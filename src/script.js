(function () {
  var matrixCells = Array.prototype.slice.call(document.querySelectorAll("[data-matrix-cell]"));
  var matrixPhaseTabs = Array.prototype.slice.call(document.querySelectorAll("[data-matrix-phase]"));
  var scenarioButtons = Array.prototype.slice.call(document.querySelectorAll("[data-scenario]"));
  var modalOpeners = Array.prototype.slice.call(document.querySelectorAll("[data-modal-open]"));
  var modals = Array.prototype.slice.call(document.querySelectorAll(".modal-backdrop"));
  var coverageButtons = Array.prototype.slice.call(document.querySelectorAll("[data-coverage-option]"));
  var previouslyFocused = null;
  var latestSimulatorState = null;
  var copyStatusTimer = null;
  var selectedPhase = "partA";

  var scenarioPresets = {
    conservative: {
      projectCompression: 12,
      pitchCompression: 12,
      winRateImprovement: 5,
      captureRate: 40
    },
    base: {
      projectCompression: 20,
      pitchCompression: 20,
      winRateImprovement: 10,
      captureRate: 55
    },
    strong: {
      projectCompression: 30,
      pitchCompression: 30,
      winRateImprovement: 15,
      captureRate: 70
    }
  };

  var matrixPhaseNotes = {
    partA: "Part A chooses where the work should focus before anything is scaled: what is ready, what is useful, and what evidence the pilot needs to create.",
    partB: "Part B turns the chosen areas into working practice: setup, coaching, live workflow tests, playbook capture, and quality review.",
    later: "Later is the scale decision: what should spread to more people, what needs governance, and where Lynxeye should invest next."
  };

  var matrixContent = {
    partA: {
      "employee-setup": { title: "Map readiness", summary: "Habits, blockers, confidence, and access." },
      "employee-projects": { title: "Find safe work moments", summary: "Tasks where AI can support real work." },
      "employee-pitches": { title: "Locate pitch friction", summary: "Where contribution slows down today." },
      "teams-setup": { title: "Learn current practice", summary: "What Johan, Viking, and teams already know." },
      "teams-projects": { title: "Select 3 to 5 use cases", summary: "Useful, safe, visible, and practical." },
      "teams-pitches": { title: "Choose pitch contexts", summary: "Growth moments worth testing now." },
      "lynxeye-setup": { title: "Confirm HQ direction", summary: "Tools, data access, security, and constraints." },
      "lynxeye-projects": { title: "Identify playbook candidates", summary: "Patterns worth capturing later." },
      "lynxeye-pitches": { title: "Define success logic", summary: "Evidence the pilot should create." }
    },
    partB: {
      "employee-setup": { title: "Hands-on setup", summary: "Tools, context, input methods, and routines." },
      "employee-projects": { title: "Coach real tasks", summary: "Practice with judgment close to the work." },
      "employee-pitches": { title: "Test pitch support", summary: "Structure, synthesis, and production support." },
      "teams-setup": { title: "Build shared routines", summary: "Briefing, storage, show-and-tell, and reuse." },
      "teams-projects": { title: "Run priority workflows", summary: "Configure, coach, prototype, and capture." },
      "teams-pitches": { title: "Improve pitch flow", summary: "Useful formats without generic language." },
      "lynxeye-setup": { title: "Document adoption path", summary: "A route for people beyond the pilot." },
      "lynxeye-projects": { title: "Capture first playbooks", summary: "Reusable methods with review built in." },
      "lynxeye-pitches": { title: "Package scale decision", summary: "What to scale, deepen, or pause." }
    },
    later: {
      "employee-setup": { title: "Wider confidence", summary: "More people start from a better baseline." },
      "employee-projects": { title: "Broader fluency", summary: "More people apply AI in live delivery." },
      "employee-pitches": { title: "Earlier contribution", summary: "More useful input before senior review." },
      "teams-setup": { title: "Adoption rhythm", summary: "Teams share examples and improve routines." },
      "teams-projects": { title: "More use cases", summary: "Validated workflows spread across teams." },
      "teams-pitches": { title: "Growth engine", summary: "Reusable pitch patterns and stronger output." },
      "lynxeye-setup": { title: "Governance rhythm", summary: "Ownership, guardrails, and scale support." },
      "lynxeye-projects": { title: "Reusable practice base", summary: "Playbooks deepen and quality review scales." },
      "lynxeye-pitches": { title: "Investment decision", summary: "Evidence guides what to scale next." }
    }
  };

  function byId(id) {
    return document.getElementById(id);
  }

  function setText(id, value) {
    var element = byId(id);
    if (element) element.textContent = value;
  }

  function getSelectedPhaseContent() {
    return matrixContent[selectedPhase] || matrixContent.partA;
  }

  function updateMatrixPhaseTabs() {
    matrixPhaseTabs.forEach(function (button) {
      var isActive = button.dataset.matrixPhase === selectedPhase;
      button.classList.toggle("matrix-phase-tab-active", isActive);
      button.setAttribute("aria-selected", String(isActive));
    });
  }

  function updateMatrixCells() {
    var phaseContent = getSelectedPhaseContent();

    matrixCells.forEach(function (cell) {
      var content = phaseContent[cell.dataset.matrixCell];
      if (!content) return;

      var title = cell.querySelector("strong");
      var summary = cell.querySelector("em");

      if (title) title.textContent = content.title;
      if (summary) summary.textContent = content.summary;
    });

    setText("matrix-phase-note", matrixPhaseNotes[selectedPhase] || matrixPhaseNotes.partA);
  }

  function setMatrixPhase(phase) {
    if (!matrixContent[phase]) return;

    selectedPhase = phase;
    updateMatrixPhaseTabs();
    updateMatrixCells();
  }

  function setValue(id, value) {
    var element = byId(id);
    if (element) element.value = value;
  }

  function readNumber(id) {
    var element = byId(id);
    return element ? Number(element.value) : 0;
  }

  function formatNumber(value) {
    return Number(value).toLocaleString("en-US");
  }

  function trimDecimal(value, digits) {
    return Number(value).toLocaleString("en-US", {
      maximumFractionDigits: digits
    });
  }

  function formatDecimal(value, digits) {
    return Number(value).toLocaleString("en-US", {
      minimumFractionDigits: digits,
      maximumFractionDigits: digits
    });
  }

  function roundTo(value, step) {
    if (!Number.isFinite(value)) return 0;
    return Math.round(value / step) * step;
  }

  function roundHoursForDisplay(value) {
    var absoluteValue = Math.abs(value);
    var step = absoluteValue >= 10000 ? 100 : 10;
    return roundTo(value, step);
  }

  function formatHours(value) {
    return formatNumber(Math.round(value)) + " hours";
  }

  function formatHoursRange(low, high) {
    return formatNumber(roundHoursForDisplay(low)) + " to " + formatNumber(roundHoursForDisplay(high)) + " hours";
  }

  function formatSEKShort(value) {
    if (value >= 1000000) {
      return trimDecimal(value / 1000000, 2) + "M SEK";
    }

    return formatNumber(Math.round(value / 1000)) + "k SEK";
  }

  function formatSEKRange(low, high) {
    return trimDecimal(low / 1000000, 1) + " to " + trimDecimal(high / 1000000, 1) + "M SEK";
  }

  function formatSEKShortRange(low, high) {
    if (low === high) return formatSEKShort(low);
    if (low >= 1000000 && high >= 1000000) {
      return trimDecimal(low / 1000000, 1) + " to " + trimDecimal(high / 1000000, 1) + "M SEK";
    }

    return formatSEKShort(low) + " to " + formatSEKShort(high);
  }

  function formatSignedNumber(value, digits) {
    return "+" + trimDecimal(value, digits);
  }

  function formatHireCount(value) {
    return value === 1 ? "1 hire" : formatNumber(value) + " hires";
  }

  function formatRoleCount(value) {
    return value === 1 ? "1 role" : formatNumber(value) + " roles";
  }

  function formatRemainingHires(value) {
    return value === 1 ? "About 1 hire still needed" : "About " + formatNumber(value) + " hires still needed";
  }

  function setHidden(id, value) {
    var element = byId(id);
    if (element) element.hidden = value;
  }

  function readCoverageRate() {
    var activeButton = coverageButtons.find(function (button) {
      return button.getAttribute("aria-pressed") === "true";
    });

    return activeButton ? Number(activeButton.dataset.coverageOption) : 50;
  }

  function getCoverageLabel(rate) {
    if (rate === 25) return "Light support";
    if (rate === 70) return "Strong lift";
    return "Balanced lift";
  }

  function setCoverageRate(rate, shouldRecalculate) {
    coverageButtons.forEach(function (button) {
      var isActive = Number(button.dataset.coverageOption) === Number(rate);
      button.classList.toggle("coverage-option-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    if (shouldRecalculate !== false) {
      recalculateSimulator();
    }
  }

  function setScenario(name) {
    var preset = scenarioPresets[name];
    if (!preset) return;

    setValue("project-compression", preset.projectCompression);
    setValue("pitch-compression", preset.pitchCompression);
    setValue("win-rate", preset.winRateImprovement);
    setValue("capture-rate", preset.captureRate);

    scenarioButtons.forEach(function (button) {
      var isActive = button.dataset.scenario === name;
      button.classList.toggle("scenario-card-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    recalculateSimulator();
  }

  function clearScenarioActive() {
    scenarioButtons.forEach(function (button) {
      button.classList.remove("scenario-card-active");
      button.setAttribute("aria-pressed", "false");
    });
  }

  function openModal(id) {
    var modal = byId(id);
    if (!modal) return;

    previouslyFocused = document.activeElement;
    modal.hidden = false;
    document.body.classList.add("modal-open");

    var closeButton = modal.querySelector("[data-modal-close]");
    if (closeButton) closeButton.focus();
  }

  function closeModal(modal) {
    if (!modal) return;

    modal.hidden = true;

    var anyOpen = modals.some(function (item) {
      return !item.hidden;
    });

    if (!anyOpen) {
      document.body.classList.remove("modal-open");
    }

    if (previouslyFocused && typeof previouslyFocused.focus === "function") {
      previouslyFocused.focus();
    }
  }

  function closeInfoPanels() {
    document.querySelectorAll(".info-pinned").forEach(function (button) {
      button.classList.remove("info-pinned");
      button.setAttribute("aria-expanded", "false");
    });

    document.querySelectorAll(".info-panel-visible").forEach(function (panel) {
      panel.classList.remove("info-panel-visible");
    });
  }

  function findInfoPanel(button) {
    var host = button.closest(".field") || button.closest(".metric");
    return host ? host.querySelector(".info-panel") : null;
  }

  function readSimulatorInputs() {
    return {
      employees: Math.max(0, readNumber("employees")),
      hours: Math.max(0, readNumber("hours")),
      rate: Math.max(0, readNumber("rate")),
      projectCompression: Math.max(0, readNumber("project-compression")),
      pitchCompression: Math.max(0, readNumber("pitch-compression")),
      winRateImprovement: Math.max(0, readNumber("win-rate")),
      captureRate: Math.max(0, readNumber("capture-rate")),
      hiringNeed: Math.max(1, readNumber("hiring-need")),
      coverageRate: readCoverageRate(),
      baselinePitches: Math.max(1, readNumber("baseline-pitches")),
      baselineWinRate: Math.max(0, readNumber("baseline-win-rate")),
      workingWeeks: Math.max(1, readNumber("working-weeks")),
      uncertaintyBand: Math.max(0, readNumber("uncertainty-band"))
    };
  }

  function calculateSimulatorModel(inputs) {
    var hoursPerWorkday = 7.5;
    var projectCompressionRate = inputs.projectCompression / 100;
    var pitchCompressionRate = Math.min(inputs.pitchCompression / 100, 0.95);
    var winRateImprovementRate = inputs.winRateImprovement / 100;
    var captureRateDecimal = inputs.captureRate / 100;
    var coverageRateDecimal = Math.min(Math.max(inputs.coverageRate / 100, 0), 0.95);
    var uncertaintyRate = inputs.uncertaintyBand / 100;
    var hireCostLow = 1200000;
    var hireCostHigh = 1500000;
    var rawFreedHours = inputs.employees * inputs.hours * projectCompressionRate;
    var capturedHours = rawFreedHours * captureRateDecimal;
    var capturedLow = capturedHours * (1 - uncertaintyRate);
    var capturedHigh = capturedHours * (1 + uncertaintyRate);
    var valueLow = capturedLow * inputs.rate;
    var valueHigh = capturedHigh * inputs.rate;
    var pitchCapacity = inputs.baselinePitches / (1 - pitchCompressionRate) - inputs.baselinePitches;
    var additionalWins = inputs.baselinePitches * (inputs.baselineWinRate / 100) * winRateImprovementRate;
    var weeklyHours = inputs.employees > 0 ? capturedHours / inputs.employees / inputs.workingWeeks : 0;
    var weeklyWorkdays = weeklyHours / hoursPerWorkday;
    var absorbedHours = rawFreedHours - capturedHours;
    var sensitivityHours = rawFreedHours * 0.01;
    var sensitivityValue = sensitivityHours * inputs.rate;
    var remainingHires = Math.max(1, Math.ceil(inputs.hiringNeed * (1 - coverageRateDecimal)));
    var pressureEased = Math.max(0, inputs.hiringNeed - remainingHires);
    var oldHiringCostLow = inputs.hiringNeed * hireCostLow;
    var oldHiringCostHigh = inputs.hiringNeed * hireCostHigh;
    var hiringRunRateNotAddedLow = pressureEased * hireCostLow;
    var hiringRunRateNotAddedHigh = pressureEased * hireCostHigh;

    return Object.assign({}, inputs, {
      rawFreedHours: rawFreedHours,
      capturedHours: capturedHours,
      capturedLow: Math.max(0, capturedLow),
      capturedHigh: Math.max(0, capturedHigh),
      valueLow: Math.max(0, valueLow),
      valueHigh: Math.max(0, valueHigh),
      pitchCapacity: pitchCapacity,
      additionalWins: additionalWins,
      weeklyHours: weeklyHours,
      weeklyWorkdays: weeklyWorkdays,
      absorbedHours: absorbedHours,
      sensitivityHours: sensitivityHours,
      sensitivityValue: sensitivityValue,
      remainingHires: remainingHires,
      pressureEased: pressureEased,
      oldHiringCostLow: oldHiringCostLow,
      oldHiringCostHigh: oldHiringCostHigh,
      hiringRunRateNotAddedLow: hiringRunRateNotAddedLow,
      hiringRunRateNotAddedHigh: hiringRunRateNotAddedHigh,
      coverageLabel: getCoverageLabel(inputs.coverageRate)
    });
  }

  function buildHiringPressureSentence(state) {
    var sentence = "Baseline pressure: " + formatHireCount(state.hiringNeed) + ". Capability view: " + formatHireCount(state.remainingHires) + " still needed";

    if (state.pressureEased === 0) {
      return sentence + ", with no immediate hiring pressure absorbed at this setting.";
    }

    return sentence + ", while playbooks absorb roughly " + formatRoleCount(state.pressureEased) + " of repeatable load.";
  }

  function buildHiringPressureHelp(state) {
    if (state.pressureEased === 0) {
      return state.coverageLabel + " does not change the immediate hire count at this setting.";
    }

    return state.coverageLabel + " shows how much pressure could be absorbed before the next hiring decision.";
  }

  function recalculateSimulator() {
    var state = calculateSimulatorModel(readSimulatorInputs());

    setText("employees-value", formatNumber(state.employees));
    setText("hours-value", formatNumber(state.hours));
    setText("rate-value", formatNumber(state.rate));
    setText("project-compression-value", state.projectCompression + "%");
    setText("pitch-compression-value", state.pitchCompression + "%");
    setText("win-rate-value", state.winRateImprovement + "%");
    setText("capture-rate-value", state.captureRate + "%");
    setText("hiring-need-value", formatHireCount(state.hiringNeed));
    setText("coverage-rate-value", state.coverageRate + "%");
    setText("capacity-output", formatHoursRange(state.capturedLow, state.capturedHigh));
    setText("capacity-help", "For Lynxeye at " + formatNumber(state.employees) + " people, roughly " + formatHours(state.capturedHours) + " survives work creep before uncertainty.");
    setText("value-output", formatSEKRange(state.valueLow, state.valueHigh));
    setText("value-help", "If captured as billable work at " + formatNumber(state.rate) + " SEK/hr, this is gross directional value.");
    setText("pitch-output", formatSignedNumber(state.pitchCapacity, 1));
    setText("pitch-help", "At " + state.baselinePitches + " baseline pitches and " + state.pitchCompression + "% compression.");
    setText("wins-output", formatSignedNumber(state.additionalWins, 1));
    setText("wins-help", "At " + state.baselinePitches + " qualified pitches per year and a " + state.baselineWinRate + "% baseline win rate.");
    setText("weekly-hours-output", formatDecimal(state.weeklyHours, 1) + " hours");
    setText("weekly-hours-help", "Roughly " + formatDecimal(state.weeklyWorkdays, 1) + " workdays per consultant per week.");
    setText("absorption-output", state.captureRate + "% captured / " + (100 - state.captureRate) + "% absorbed");
    setText("absorption-help", "That means " + formatHours(state.capturedHours) + " captured and " + formatHours(state.absorbedHours) + " absorbed before behavior changes.");
    setText("sensitivity-line", "Every 1 percentage point increase in captured time is worth roughly " + formatHours(state.sensitivityHours) + " / " + formatSEKShort(state.sensitivityValue) + " gross capacity at current settings.");
    setText("hiring-pressure-output", buildHiringPressureSentence(state));
    setText("old-hiring-cost-output", formatSEKShortRange(state.oldHiringCostLow, state.oldHiringCostHigh) + " / year");
    setText("hiring-avoided-output", formatSEKShortRange(state.hiringRunRateNotAddedLow, state.hiringRunRateNotAddedHigh) + " / year");
    setText("remaining-hiring-output", formatRemainingHires(state.remainingHires));
    setText("hiring-pressure-help", buildHiringPressureHelp(state));

    var captureBar = byId("capture-bar-fill");
    if (captureBar) captureBar.style.width = state.captureRate + "%";

    latestSimulatorState = state;
  }

  function buildCopyText(state) {
    return [
      "Accelerate Lynxeye with AI, back-of-envelope model",
      "",
      "Inputs",
      "Employees: " + formatNumber(state.employees),
      "Billable hours / consultant / year: " + formatNumber(state.hours),
      "Avg. billing rate: " + formatNumber(state.rate) + " SEK/hr",
      "Project delivery compression: " + state.projectCompression + "%",
      "Pitch cycle compression: " + state.pitchCompression + "%",
      "Win rate improvement: " + state.winRateImprovement + "%",
      "Freed time captured as real value: " + state.captureRate + "%",
      "Hiring need under old answer: " + formatHireCount(state.hiringNeed),
      "Capability support level: " + state.coverageLabel + " (" + state.coverageRate + "%)",
      "",
      "Outputs",
      "Captured capacity range: " + formatHoursRange(state.capturedLow, state.capturedHigh),
      "Gross capacity value: " + formatSEKRange(state.valueLow, state.valueHigh),
      "Pitch-equivalent capacity: " + formatSignedNumber(state.pitchCapacity, 1),
      "Expected additional qualified wins: " + formatSignedNumber(state.additionalWins, 1),
      "Hours returned / consultant / week: " + formatDecimal(state.weeklyHours, 1) + " hours",
      "Captured vs absorbed: " + state.captureRate + "% captured / " + (100 - state.captureRate) + "% absorbed",
      "",
      "Hiring pressure",
      buildHiringPressureSentence(state),
      "Old hiring run-rate: " + formatSEKShortRange(state.oldHiringCostLow, state.oldHiringCostHigh) + " / year",
      "Hiring run-rate not immediately added: " + formatSEKShortRange(state.hiringRunRateNotAddedLow, state.hiringRunRateNotAddedHigh) + " / year",
      "",
      "Caveat",
      "This is back-of-the-envelope thinking, not proof. Scope & Setup should calibrate the model with Lynxeye-specific evidence."
    ].join("\n");
  }

  function copyTextFallback(text) {
    var textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.setAttribute("readonly", "");
    textArea.style.position = "fixed";
    textArea.style.left = "-9999px";
    document.body.appendChild(textArea);
    textArea.select();

    try {
      document.execCommand("copy");
      document.body.removeChild(textArea);
      return Promise.resolve();
    } catch (error) {
      document.body.removeChild(textArea);
      return Promise.reject(error);
    }
  }

  function copyCurrentModel() {
    if (!latestSimulatorState) recalculateSimulator();

    var text = buildCopyText(latestSimulatorState);
    var copyPromise = navigator.clipboard && navigator.clipboard.writeText
      ? navigator.clipboard.writeText(text).catch(function () {
        return copyTextFallback(text);
      })
      : copyTextFallback(text);

    copyPromise.then(function () {
      setText("copy-status", "Copied. This model is not saved.");
      window.clearTimeout(copyStatusTimer);
      copyStatusTimer = window.setTimeout(function () {
        setText("copy-status", "");
      }, 3500);
    }).catch(function () {
      setText("copy-status", "Copy unavailable. Select the model text on screen.");
    });
  }

  scenarioButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      setScenario(button.dataset.scenario);
    });
  });

  matrixPhaseTabs.forEach(function (button) {
    button.addEventListener("click", function () {
      setMatrixPhase(button.dataset.matrixPhase);
    });
  });

  modalOpeners.forEach(function (button) {
    button.addEventListener("click", function () {
      openModal(button.dataset.modalOpen);
    });
  });

  modals.forEach(function (modal) {
    modal.addEventListener("click", function (event) {
      if (event.target === modal || event.target.matches("[data-modal-close]")) {
        closeModal(modal);
      }
    });
  });

  document.querySelectorAll("[data-info-trigger]").forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();

      var panel = findInfoPanel(button);
      var isPinned = button.classList.toggle("info-pinned");
      button.setAttribute("aria-expanded", String(isPinned));

      if (panel) {
        panel.classList.toggle("info-panel-visible", isPinned);
      }
    });
  });

  document.addEventListener("click", function (event) {
    if (event.target.closest("[data-info-trigger]") || event.target.closest(".info-panel")) {
      return;
    }

    closeInfoPanels();
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      modals.forEach(function (modal) {
        if (!modal.hidden) closeModal(modal);
      });
      closeInfoPanels();
    }
  });

  coverageButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      setCoverageRate(Number(button.dataset.coverageOption));
    });
  });

  document.querySelectorAll("[data-simulator-input]").forEach(function (input) {
    input.addEventListener("input", function () {
      clearScenarioActive();
      recalculateSimulator();
    });
  });

  var copyButton = byId("copy-model");
  if (copyButton) copyButton.addEventListener("click", copyCurrentModel);

  setMatrixPhase(selectedPhase);
  setCoverageRate(50, false);
  setScenario("base");
})();
