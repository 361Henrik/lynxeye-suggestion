(function () {
  var panelButtons = Array.prototype.slice.call(document.querySelectorAll("[data-panel-target]"));
  var panels = Array.prototype.slice.call(document.querySelectorAll("[data-panel]"));
  var tabButtons = Array.prototype.slice.call(document.querySelectorAll("[data-tab-target]"));
  var tabPanes = Array.prototype.slice.call(document.querySelectorAll("[data-tab-pane]"));
  var paceButtons = Array.prototype.slice.call(document.querySelectorAll("[data-pace-option]"));
  var coverageButtons = Array.prototype.slice.call(document.querySelectorAll("[data-coverage-option]"));
  var paceSummary = document.getElementById("pace-summary");
  var modalOpeners = Array.prototype.slice.call(document.querySelectorAll("[data-modal-open]"));
  var proofOpeners = Array.prototype.slice.call(document.querySelectorAll("[data-proof-open]"));
  var modals = Array.prototype.slice.call(document.querySelectorAll(".modal-backdrop"));
  var previouslyFocused = null;
  var mobilePanelQuery = window.matchMedia("(max-width: 880px)");
  var panelHomeParent = panels[0] ? panels[0].parentNode : null;
  var panelHomeAnchor = document.createComment("panel-home");
  var activePanelName = "situation";

  if (panelHomeParent && panels[0]) {
    panelHomeParent.insertBefore(panelHomeAnchor, panels[0]);
  }

  function formatNumber(value) {
    return Number(value).toLocaleString("en-US");
  }

  function restorePanelsHome() {
    if (!panelHomeParent) return;

    var cursor = panelHomeAnchor;
    panels.forEach(function (panel) {
      panelHomeParent.insertBefore(panel, cursor.nextSibling);
      cursor = panel;
    });
  }

  function placeActivePanel(name) {
    var activePanel = document.querySelector('[data-panel="' + name + '"]');
    var activeButton = document.querySelector('[data-panel-target="' + name + '"]');

    if (!activePanel) return;

    if (mobilePanelQuery.matches && activeButton) {
      activeButton.insertAdjacentElement("afterend", activePanel);
      return;
    }

    restorePanelsHome();
  }

  function scrollToPanelContext(name) {
    var panel = document.querySelector('[data-panel="' + name + '"]');
    var button = document.querySelector('[data-panel-target="' + name + '"]');
    var target = button || panel;

    if (!target) return;

    setTimeout(function () {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  }

  function setPanel(name, shouldScroll) {
    activePanelName = name;

    panels.forEach(function (panel) {
      var isActive = panel.dataset.panel === name;
      panel.hidden = !isActive;
      panel.classList.toggle("panel-hidden", !isActive);

      if (isActive) {
        panel.style.animation = "none";
        panel.offsetHeight;
        panel.style.animation = "";
      }
    });

    panelButtons.forEach(function (button) {
      var isActive = button.dataset.panelTarget === name;
      var cue = button.querySelector(".nav-card-cue");
      button.classList.toggle("nav-card-active", isActive);
      button.setAttribute("aria-expanded", String(isActive));
      if (cue) cue.textContent = "↓";
    });

    placeActivePanel(name);

    if (shouldScroll) {
      scrollToPanelContext(name);
    }
  }

  function closeActivePanel() {
    activePanelName = null;

    panels.forEach(function (panel) {
      panel.hidden = true;
      panel.classList.add("panel-hidden");
    });

    panelButtons.forEach(function (button) {
      var cue = button.querySelector(".nav-card-cue");
      button.classList.remove("nav-card-active");
      button.setAttribute("aria-expanded", "false");
      if (cue) cue.textContent = "↓";
    });

    restorePanelsHome();
  }

  function setTab(name) {
    tabButtons.forEach(function (button) {
      var isActive = button.dataset.tabTarget === name;
      button.classList.toggle("tab-active", isActive);
      button.setAttribute("aria-selected", String(isActive));
    });

    tabPanes.forEach(function (pane) {
      var isActive = pane.dataset.tabPane === name;
      pane.hidden = !isActive;
      pane.classList.toggle("tab-pane-active", isActive);
    });
  }

  function setPace(name) {
    paceButtons.forEach(function (button) {
      var isActive = button.dataset.paceOption === name;
      button.classList.toggle("pace-card-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));

      if (isActive && paceSummary) {
        paceSummary.textContent = button.dataset.paceSummary;
      }
    });
  }

  function setCoverageRate(rate, shouldRecalculate) {
    coverageButtons.forEach(function (button) {
      var isActive = Number(button.dataset.coverageOption) === Number(rate);
      button.classList.toggle("lift-option-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    if (shouldRecalculate !== false) {
      recalculateSimulator();
    }
  }

  function openModal(id) {
    var modal = document.getElementById(id);
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

  panelButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var targetPanel = button.dataset.panelTarget;

      if (targetPanel === activePanelName) {
        closeActivePanel();
        return;
      }

      setPanel(targetPanel, true);
    });
  });

  tabButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      setTab(button.dataset.tabTarget);
    });
  });

  paceButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      setPace(button.dataset.paceOption);
    });
  });

  coverageButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      setCoverageRate(Number(button.dataset.coverageOption));
    });
  });

  document.querySelectorAll(".deliverable-head").forEach(function (button) {
    button.addEventListener("click", function () {
      var item = button.closest(".deliverable");
      var isOpen = item.classList.toggle("deliverable-open");
      button.setAttribute("aria-expanded", String(isOpen));
    });
  });

  modalOpeners.forEach(function (button) {
    button.addEventListener("click", function () {
      openModal(button.dataset.modalOpen);
    });
  });

  proofOpeners.forEach(function (button) {
    button.addEventListener("click", function () {
      setPanel("envelope", true);
    });
  });

  modals.forEach(function (modal) {
    modal.addEventListener("click", function (event) {
      if (event.target === modal || event.target.matches("[data-modal-close]")) {
        closeModal(modal);
      }
    });
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      modals.forEach(function (modal) {
        if (!modal.hidden) closeModal(modal);
      });
      closeInfoPanels();
    }
  });

  function closeInfoPanels() {
    document.querySelectorAll(".info-pinned").forEach(function (button) {
      button.classList.remove("info-pinned");
      button.setAttribute("aria-expanded", "false");
    });

    document.querySelectorAll(".info-panel-visible").forEach(function (panel) {
      panel.classList.remove("info-panel-visible");
    });
  }

  document.querySelectorAll("[data-info-trigger]").forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();

      var host = button.closest(".slider-row") || button.closest(".assumption-row") || button.closest(".metric") || button.closest(".value-card");
      var panel = host ? host.querySelector(".info-panel") : null;
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

  var latestSimulatorState = null;
  var copyStatusTimer = null;

  function byId(id) {
    return document.getElementById(id);
  }

  function readNumber(id) {
    var element = byId(id);
    return element ? Number(element.value) : 0;
  }

  function setText(id, value) {
    var element = byId(id);
    if (element) element.textContent = value;
  }

  function formatDecimal(value, digits) {
    return Number(value).toLocaleString("en-US", {
      minimumFractionDigits: digits,
      maximumFractionDigits: digits
    });
  }

  function trimDecimal(value, digits) {
    return Number(value).toLocaleString("en-US", {
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

  function formatSignedNumber(value, digits) {
    return "+" + trimDecimal(value, digits);
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
    if (low === 0 && high === 0) return "0 SEK";
    if (low === high) return formatSEKShort(low);

    if (low >= 1000000 && high >= 1000000) {
      return trimDecimal(low / 1000000, 1) + " to " + trimDecimal(high / 1000000, 1) + "M SEK";
    }

    return formatSEKShort(low) + " to " + formatSEKShort(high);
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

  function buildHiringPressureSentence(state) {
    var sentence = "Old answer: hire " + state.hiringNeed + ". Capability answer: hire about " + state.remainingHires;

    if (state.pressureEased === 0) {
      return sentence + ", while the model keeps at least one real hire in place.";
    }

    return sentence + ", while playbooks absorb the pressure of roughly " + formatRoleCount(state.pressureEased) + ".";
  }

  function buildHiringPressureHelp(state) {
    if (state.pressureEased === 0) {
      return state.coverageLabel + " does not change the immediate hire count at this setting. Project Accelerate pricing stays [TBD].";
    }

    return state.coverageLabel + " keeps roughly " + formatRoleCount(state.pressureEased) + " out of the immediate hiring pressure. Project Accelerate pricing stays [TBD].";
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
    var remainingHiringCostLow = remainingHires * hireCostLow;
    var remainingHiringCostHigh = remainingHires * hireCostHigh;
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
      remainingHiringCostLow: remainingHiringCostLow,
      remainingHiringCostHigh: remainingHiringCostHigh,
      hiringRunRateNotAddedLow: hiringRunRateNotAddedLow,
      hiringRunRateNotAddedHigh: hiringRunRateNotAddedHigh,
      coverageLabel: getCoverageLabel(inputs.coverageRate)
    });
  }

  function buildCopyText(state) {
    return [
      "Project Accelerate Lynxeye, directional simulator model",
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
      "AI tool costs: per-employee cost exists, handled outside this directional model.",
      "",
      "Advanced assumptions",
      "Qualified pitches / year: " + state.baselinePitches,
      "Baseline win rate: " + state.baselineWinRate + "%",
      "Working weeks / year: " + state.workingWeeks,
      "Uncertainty band: " + state.uncertaintyBand + "%",
      "",
      "Outputs",
      "Raw freed capacity: " + formatHours(state.rawFreedHours),
      "Captured capacity before uncertainty: " + formatHours(state.capturedHours),
      "Captured capacity range: " + formatHoursRange(state.capturedLow, state.capturedHigh),
      "Gross capacity value: " + formatSEKRange(state.valueLow, state.valueHigh),
      "Pitch-equivalent capacity: " + formatSignedNumber(state.pitchCapacity, 1) + " pitches/year",
      "Expected additional qualified wins: " + formatSignedNumber(state.additionalWins, 1) + " wins/year",
      "Hours returned / consultant / week: " + formatDecimal(state.weeklyHours, 1) + " hours",
      "Captured vs absorbed: " + state.captureRate + "% captured / " + (100 - state.captureRate) + "% absorbed",
      "Sensitivity: every 1 percentage point increase in captured time is worth roughly " + formatHours(state.sensitivityHours) + " / " + formatSEKShort(state.sensitivityValue) + " gross capacity at current settings.",
      "",
      "Hiring pressure scenario",
      buildHiringPressureSentence(state),
      "Old hiring run-rate: " + formatSEKShortRange(state.oldHiringCostLow, state.oldHiringCostHigh) + " / year",
      "Hiring run-rate not immediately added: " + formatSEKShortRange(state.hiringRunRateNotAddedLow, state.hiringRunRateNotAddedHigh) + " / year",
      "Remaining hiring run-rate: " + formatSEKShortRange(state.remainingHiringCostLow, state.remainingHiringCostHigh) + " / year",
      "AI tool costs: per-employee cost exists, handled outside this hiring-cost model.",
      "Project Accelerate pricing: [TBD], outside this hiring-cost model.",
      "",
      "Qualitative value summary",
      "For clients: faster iteration, better-prepared teams, and more senior attention on judgment, implications, and quality.",
      "For employees: fewer blank-page starts, less production drag, clearer playbooks, and more time for thinking and craft.",
      "For partners: less senior bottleneck, better delegation, reusable methods, and clearer quality control.",
      "For Lynxeye: compounding capability instead of isolated tool use.",
      "",
      "Hiring pressure interpretation",
      "This is not a headcount reduction argument. It is a hiring pressure argument: hire where human judgment is needed, and let playbooks absorb repeatable production load.",
      "",
      "Caveats",
      "This is directional Ascent potential, not a commitment. Gross capacity value is not net profit. No deal-size revenue value is assigned to qualified wins. Qualitative value is an interpretation of what captured capacity could enable, not measured evidence yet. Phase 1 replaces these defaults with Lynxeye-specific evidence.",
      "This model is not saved.",
      "",
      "Sources",
      "Source citations are directional and should be confirmed by Henrik before external sharing.",
      "McKinsey, The Economic Potential of Generative AI: https://www.mckinsey.com/capabilities/tech-and-ai/our-insights/the-economic-potential-of-generative-ai-the-next-productivity-frontier",
      "HBS AI Institute, Navigating the Jagged Technological Frontier: https://d3.harvard.edu/navigating-the-jagged-technological-frontier/",
      "BCG, How People Create and Destroy Value with GenAI: https://www.bcg.com/publications/2023/how-people-create-and-destroy-value-with-gen-ai",
      "BCG, GenAI Doesn't Just Increase Productivity. It Expands Capabilities: https://www.bcg.com/publications/2024/gen-ai-increases-productivity-and-expands-capabilities",
      "McKinsey, The State of AI: how organizations are rewiring to capture value: https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai-how-organizations-are-rewiring-to-capture-value",
      "Skatteverket employer contributions: https://www.skatteverket.se/servicelankar/otherlanguages/englishengelska/businessesandemployers/startingandrunningaswedishbusiness/declaringtaxesbusinesses/filingapayereturn/employercontributions.4.2fb39afe18dabf1e4d24a3d.html"
    ].join("\n");
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

    setText("raw-capacity-output", formatHours(state.rawFreedHours));
    setText("raw-capacity-help", "Gross time opportunity before the " + state.captureRate + "% capture rate is applied.");
    setText("capacity-output", formatHoursRange(state.capturedLow, state.capturedHigh));
    setText("proof-capacity-output", formatHoursRange(state.capturedLow, state.capturedHigh));
    setText("capacity-help", "For Lynxeye at " + formatNumber(state.employees) + " people, roughly " + formatHours(state.capturedHours) + " survives work creep before the uncertainty band.");
    setText("value-output", formatSEKRange(state.valueLow, state.valueHigh));
    setText("proof-value-output", formatSEKRange(state.valueLow, state.valueHigh));
    setText("value-help", "If captured as billable work at " + formatNumber(state.rate) + " SEK/hr, this is the gross directional Ascent upside.");
    setText("pitch-output", formatSignedNumber(state.pitchCapacity, 1));
    setText("pitch-help", "At " + state.baselinePitches + " baseline pitches and " + state.pitchCompression + "% compression, the same pitch capacity can handle roughly " + formatSignedNumber(state.pitchCapacity, 1) + " more pitch-equivalents per year.");
    setText("wins-output", formatSignedNumber(state.additionalWins, 1));
    setText("wins-help", "At " + state.baselinePitches + " qualified pitches per year and a " + state.baselineWinRate + "% baseline win rate.");
    setText("weekly-hours-output", formatDecimal(state.weeklyHours, 1) + " hours");
    setText("proof-weekly-output", formatDecimal(state.weeklyHours, 1) + " hours / week");
    setText("weekly-hours-help", "Roughly " + formatDecimal(state.weeklyWorkdays, 1) + " workdays per consultant per week.");
    setText("absorption-output", state.captureRate + "% captured / " + (100 - state.captureRate) + "% absorbed");
    setText("absorption-help", "That means " + formatHours(state.capturedHours) + " captured and " + formatHours(state.absorbedHours) + " absorbed before behavior changes.");
    setText("time-use-help", "At current settings, roughly " + formatDecimal(state.weeklyHours, 1) + " hours per consultant per week can be redirected into better work.");
    setText("sensitivity-line", "Every 1 percentage point increase in captured time is worth roughly " + formatHours(state.sensitivityHours) + " / " + formatSEKShort(state.sensitivityValue) + " gross capacity at current settings.");
    setText("hiring-pressure-output", buildHiringPressureSentence(state));
    setText("hiring-avoided-output", formatSEKShortRange(state.hiringRunRateNotAddedLow, state.hiringRunRateNotAddedHigh) + " / year");
    setText("hiring-pressure-help", buildHiringPressureHelp(state));
    setText("old-hiring-cost-output", formatSEKShortRange(state.oldHiringCostLow, state.oldHiringCostHigh) + " / year");
    setText("old-hiring-help", "Fully loaded annual run-rate for " + formatHireCount(state.hiringNeed) + ", before recruiting delay.");
    setText("remaining-hiring-output", formatRemainingHires(state.remainingHires));
    setText("remaining-hiring-help", "Remaining hiring run-rate: " + formatSEKShortRange(state.remainingHiringCostLow, state.remainingHiringCostHigh) + " / year, plus [TBD] Phase 1 and per-employee AI tool costs.");

    var captureBar = byId("capture-bar-fill");
    if (captureBar) captureBar.style.width = state.captureRate + "%";

    latestSimulatorState = state;
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

  document.querySelectorAll("[data-simulator-input]").forEach(function (input) {
    input.addEventListener("input", function () {
      recalculateSimulator();
    });
  });

  var copyButton = byId("copy-model");
  if (copyButton) copyButton.addEventListener("click", copyCurrentModel);

  if (mobilePanelQuery.addEventListener) {
    mobilePanelQuery.addEventListener("change", function () {
      placeActivePanel(activePanelName);
    });
  } else if (mobilePanelQuery.addListener) {
    mobilePanelQuery.addListener(function () {
      placeActivePanel(activePanelName);
    });
  }

  setPace("focused");
  setCoverageRate(50, false);
  setPanel("situation", false);
  setTab("core");
  recalculateSimulator();
})();
