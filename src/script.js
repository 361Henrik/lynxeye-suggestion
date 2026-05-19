(function () {
  var matrixPhaseTabs = Array.prototype.slice.call(document.querySelectorAll("[data-matrix-phase]"));
  var matrixDetailTabs = Array.prototype.slice.call(document.querySelectorAll("[data-matrix-detail-tab]"));
  var matrixCells = Array.prototype.slice.call(document.querySelectorAll("[data-matrix-cell]"));
  var matrixRowToggles = Array.prototype.slice.call(document.querySelectorAll("[data-matrix-row-toggle]"));
  var matrixColumnToggles = Array.prototype.slice.call(document.querySelectorAll("[data-matrix-column-toggle]"));
  var matrixHome = document.querySelector("[data-matrix-home]");
  var scenarioButtons = Array.prototype.slice.call(document.querySelectorAll("[data-scenario]"));
  var modalOpeners = Array.prototype.slice.call(document.querySelectorAll("[data-modal-open]"));
  var modals = Array.prototype.slice.call(document.querySelectorAll(".modal-backdrop"));
  var coverageButtons = Array.prototype.slice.call(document.querySelectorAll("[data-coverage-option]"));
  var selectedPhase = "phase1";
  var selectedDetailTab = "success";
  var selectedCell = "teams-projects";
  var highlightedRow = null;
  var highlightedColumn = null;
  var previouslyFocused = null;
  var latestSimulatorState = null;
  var copyStatusTimer = null;

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

  var phaseLabels = {
    phase1: "Phase 1: Scope & Setup",
    phase2: "Phase 2: Prove In Work",
    phase3: "Phase 3: Scale Further"
  };

  var detailTabLabels = {
    success: "Success looks like",
    deliverables: "Concrete deliverables",
    activities: "Activities we do",
    collaboration: "How we collaborate"
  };

  var matrixContent = {
    "employee-setup": {
      title: "Smooth AI flow",
      coordinates: "Employee x AI-ready setup",
      guardrails: "Approved tools, privacy boundaries, role context, safe input habits.",
      valueLink: false,
      phase1: {
        success: "The selected employees know what approved AI can and cannot do, can access the tools, and have a smoother starting rhythm with less guessing and less setup friction.",
        deliverables: "Readiness notes, access and blocker map, personal setup checklist, role-specific starting prompts.",
        activities: "Map current habits, remove setup blockers, clarify approved use, and identify the few daily tasks where smoother AI use matters first.",
        collaboration: "Henrik works with Johan, Viking, and selected employees to understand real friction before proposing routines.",
        commercial: "This creates the conditions for value. It does not claim value before people can use the setup smoothly.",
        evidence: "Readiness notes, blocker map, approved-use summary.",
        status: "Included in this proposal."
      },
      phase2: {
        success: "Employees use approved AI in the flow of daily work without stopping to fight the setup. Confidence rises because the method is clear and usable.",
        deliverables: "Working personal setup, practical routines, reviewed examples, confidence notes.",
        activities: "Coach live usage, tune prompts and context, review outputs, and adjust the setup around each person’s real work.",
        collaboration: "Henrik supports people close to the task, with internal owners seeing what can be repeated later.",
        commercial: "Smooth setup protects the larger value case by reducing avoidable friction.",
        evidence: "Setup completion, reviewed examples, employee feedback.",
        status: "Included in this proposal."
      }
    },
    "employee-projects": {
      title: "Useful delivery capacity",
      coordinates: "Employee x client projects",
      guardrails: "Client confidentiality, human review, source discipline, quality standard.",
      valueLink: true,
      phase1: {
        success: "The pilot identifies where individual client-work tasks can create more useful capacity without lowering quality or pushing people into unsafe shortcuts.",
        deliverables: "Candidate task list, risk notes, personal workflow hypotheses, success criteria.",
        activities: "Find recurring client-work friction, check risk, define what good support looks like, and choose the first coached work moments.",
        collaboration: "Henrik listens for where employees lose time and where judgment must stay close.",
        commercial: "Connects to project compression only after the workflow is tested.",
        evidence: "Candidate task list, risk notes, success logic.",
        status: "Included in this proposal."
      },
      phase2: {
        success: "Employees contribute more useful capacity inside live client work. AI supports preparation, synthesis, production, and review while human judgment stays responsible.",
        deliverables: "Reviewed before-and-after examples, personal workflow notes, reusable prompts, quality observations.",
        activities: "Coach real tasks, compare outputs, review quality, and capture where the work moved faster or became stronger.",
        collaboration: "Henrik works alongside selected employees in real tasks, then reviews learning with the internal AI team.",
        commercial: "Connects to captured capacity and weekly hours returned in the directional value case.",
        evidence: "Before-and-after examples, review notes, employee feedback.",
        status: "Included in this proposal."
      }
    },
    "employee-pitches": {
      title: "Earlier sharper input",
      coordinates: "Employee x client pitches",
      guardrails: "Senior judgment owns claims, no generic language, client fit review.",
      valueLink: true,
      phase1: {
        success: "Lynxeye knows where employees could contribute earlier and sharper input to pitch work without flattening the voice or creating unsupported claims.",
        deliverables: "Pitch friction map, candidate pitch tasks, output-quality risks, review criteria.",
        activities: "Map pitch bottlenecks, identify blank-page moments, define where support helps, and protect the standard for final claims.",
        collaboration: "Henrik works with people close to pitch production and with senior reviewers who know what good looks like.",
        commercial: "Connects later to pitch cycle compression and win-rate assumptions.",
        evidence: "Pitch friction map and review criteria.",
        status: "Included in this proposal."
      },
      phase2: {
        success: "More people can contribute earlier to pitch thinking, synthesis, and production. The work gets faster and sharper without becoming generic.",
        deliverables: "Pitch workflow examples, synthesis prompts, output templates, senior review checklist.",
        activities: "Test pitch support patterns, review outputs, refine structure, and capture the parts that improve speed and quality.",
        collaboration: "Henrik supports the pitch workflow while senior Lynxeye judgment keeps positioning and claims sharp.",
        commercial: "Connects to pitch-equivalent capacity and expected additional wins in the directional value case.",
        evidence: "Pitch examples, review checklist, team feedback.",
        status: "Included in this proposal."
      }
    },
    "teams-setup": {
      title: "Shared working rhythm",
      coordinates: "Teams x AI-ready setup",
      guardrails: "Shared approved-use rules, internal ownership, handover points.",
      valueLink: false,
      phase1: {
        success: "The pilot team has a shared view of how to use approved AI, where to store learning, how to review output, and what not to touch yet.",
        deliverables: "Team setup map, current-practice notes, ownership map, shared-rhythm hypothesis.",
        activities: "Learn from existing internal AI work, clarify team habits, identify ownership, and decide which routines the pilot should use.",
        collaboration: "Henrik builds with Johan and Viking rather than around them, using the team’s existing knowledge as source material.",
        commercial: "Shared setup reduces reinvention before the value case can be tested.",
        evidence: "Current-practice notes, ownership map, shared setup draft.",
        status: "Included in this proposal."
      },
      phase2: {
        success: "The team has a rhythm for briefing, producing, reviewing, sharing examples, and improving the method together.",
        deliverables: "Shared setup guide, meeting rhythm, example library, handover notes.",
        activities: "Run show-and-tell moments, tune shared routines, capture examples, and make the setup teachable.",
        collaboration: "Henrik coaches the rhythm while Johan and Viking shape what should become internal practice.",
        commercial: "Better team rhythm supports adoption and reduces repeated setup cost.",
        evidence: "Shared setup guide, example library, team feedback.",
        status: "Included in this proposal."
      }
    },
    "teams-projects": {
      title: "Capability lift in delivery",
      coordinates: "Teams x client projects",
      guardrails: "Approved tools, client confidentiality, human review, quality standard.",
      valueLink: true,
      phase1: {
        success: "The pilot team knows which client-project workflows matter enough to test, who should be involved, what the risks are, and what evidence would make the pilot worth running.",
        deliverables: "3 to 5 priority use cases, pilot context, workflow hypotheses, success logic, risk notes.",
        activities: "Select useful use cases, define workflow boundaries, map constraints, and agree what Phase 2 should prove in live work.",
        collaboration: "Henrik works with Johan, Viking, and the selected team to turn real delivery pressure into a focused pilot shape.",
        commercial: "This is where project compression, captured value, and reduced hiring pressure can become visible in the directional value case.",
        evidence: "Use-case shortlist, pilot context, success logic, risk notes.",
        status: "Included in this proposal."
      },
      phase2: {
        success: "Teams create more client value with the same or less pressure on hours. Capacity increases because repeatable work moves faster. Capability increases because the team learns better ways to prepare, synthesize, produce, review, and reuse.",
        deliverables: "Validated use cases, workflow examples, reviewed outputs, playbook inputs, quality checkpoints.",
        activities: "Design workflows, coach live work, review outputs, capture what worked, and convert useful patterns into repeatable practice.",
        collaboration: "Henrik works close to the live work with the selected team, while Johan and Viking see what should become internal method.",
        commercial: "Connects directly to project compression, captured capacity, gross capacity value, and hiring pressure.",
        evidence: "Workflow examples, reviewed outputs, use-case ranking, playbook inputs.",
        status: "Included in this proposal."
      }
    },
    "teams-pitches": {
      title: "Stronger pitch flow",
      coordinates: "Teams x client pitches",
      guardrails: "Senior review, Lynxeye voice, supported claims, output quality.",
      valueLink: true,
      phase1: {
        success: "The pilot identifies which pitch moments are worth testing because they can improve speed, quality, contribution, or confidence in the commercial story.",
        deliverables: "Pitch context shortlist, pitch-flow map, quality risks, review criteria.",
        activities: "Choose pitch contexts, map where work slows down, define quality standards, and agree what Phase 2 should test.",
        collaboration: "Henrik works with the people who shape pitch flow, from early synthesis through senior review.",
        commercial: "Sets up the pitch cycle and win-rate assumptions for the directional value case.",
        evidence: "Pitch context shortlist, quality risks, success logic.",
        status: "Included in this proposal."
      },
      phase2: {
        success: "Pitch work moves faster and gets sharper. The team can synthesize faster, structure better, and produce useful material earlier without losing Lynxeye’s taste or judgment.",
        deliverables: "Pitch workflow pattern, synthesis examples, output templates, senior review checklist.",
        activities: "Test pitch support, compare outputs, refine templates, and identify where AI improves speed and quality.",
        collaboration: "Henrik works with the pitch team while senior owners keep the voice and commercial argument sharp.",
        commercial: "Connects to pitch-equivalent capacity and expected additional wins.",
        evidence: "Pitch examples, workflow pattern, review findings.",
        status: "Included in this proposal."
      }
    },
    "lynxeye-setup": {
      title: "Scalable adoption path",
      coordinates: "Lynxeye x AI-ready setup",
      guardrails: "Group alignment, approved tools, data boundaries, adoption ownership.",
      valueLink: false,
      phase1: {
        success: "Lynxeye has a clear view of how the pilot setup fits HQ direction, what must be resolved, and what a wider adoption path could require later.",
        deliverables: "HQ input summary, approved-tool boundaries, adoption risks, scale-path assumptions.",
        activities: "Clarify infrastructure fit, confirm constraints, map adoption risks, and define what should stay inside the first pilot.",
        collaboration: "Henrik connects Lynxeye’s practical needs with the infrastructure and guardrails already being created.",
        commercial: "A clear setup path avoids wasting investment through fragmented adoption.",
        evidence: "HQ input summary, boundary notes, adoption-risk map.",
        status: "Included in this proposal."
      },
      phase2: {
        success: "The pilot leaves a better starting point for more people. Lynxeye can see what would be needed to expand setup beyond the first group.",
        deliverables: "Documented setup path, internal handover notes, adoption checklist, next-scale requirements.",
        activities: "Document the setup, test handover points, capture blockers, and define what wider rollout would require.",
        collaboration: "Henrik packages the learning so internal owners can decide what should move forward.",
        commercial: "Supports scaling without requiring every team to restart from zero.",
        evidence: "Setup path, adoption checklist, scale requirements.",
        status: "Included in this proposal."
      }
    },
    "lynxeye-projects": {
      title: "Reusable client practice",
      coordinates: "Lynxeye x client projects",
      guardrails: "Company-owned examples, IP discipline, review rhythm, quality rules.",
      valueLink: true,
      phase1: {
        success: "Lynxeye knows which delivery patterns could become reusable company practice and which should wait until the working pilot creates evidence.",
        deliverables: "Capture candidates, playbook hypothesis, quality-risk notes, review rhythm draft.",
        activities: "Identify repeatable patterns, decide what should be captured, and define how quality will be reviewed.",
        collaboration: "Henrik uses live-work candidates to shape what could become Lynxeye-owned method.",
        commercial: "Reusable practice is how capacity gains can become more than isolated savings.",
        evidence: "Capture candidates, quality-risk notes, playbook hypothesis.",
        status: "Included in this proposal."
      },
      phase2: {
        success: "Good client-project practice becomes company-owned assets: playbooks, examples, review habits, and quality rules that can improve through reuse.",
        deliverables: "First client-work playbooks, reviewed examples, quality protocol, reusable prompts and templates.",
        activities: "Capture playbook material, review quality, organize examples, and turn useful workflows into teachable practice.",
        collaboration: "Henrik captures the working method with Johan, Viking, and the team so Lynxeye owns the output.",
        commercial: "Connects to captured capacity and the ability to spread capability beyond the first team.",
        evidence: "First playbooks, quality protocol, reusable examples.",
        status: "Included in this proposal."
      }
    },
    "lynxeye-pitches": {
      title: "Commercial scale evidence",
      coordinates: "Lynxeye x client pitches",
      guardrails: "Directional numbers, senior ownership, no unsupported claims, quality review.",
      valueLink: true,
      phase1: {
        success: "Leadership gets a practical commercial hypothesis for what the pilot should test: pitch speed, pitch quality, win probability, and what evidence would justify scaling.",
        deliverables: "Success logic, simulator assumptions to calibrate, pitch-value hypothesis, Phase 2 decision criteria.",
        activities: "Define the value case, check assumptions, decide what evidence matters, and keep pricing as [TBD] until the shape is clear.",
        collaboration: "Henrik gives Christian and the internal team a sharper basis for deciding what the pilot should prove.",
        commercial: "This sets the directional model before Lynxeye-specific evidence replaces assumptions.",
        evidence: "Assumption log, success criteria, value-case draft.",
        status: "Included in this proposal."
      },
      phase2: {
        success: "Lynxeye has evidence for what to scale, deepen, or pause. The pitch and delivery findings feed a practical recommendation for the next investment.",
        deliverables: "Refined value model, use-case ranking, scale decision package, recommendation for what comes next.",
        activities: "Calibrate the model, combine qualitative and quantitative evidence, and prepare the scale decision.",
        collaboration: "Henrik packages the evidence with Lynxeye so leadership can make a confident next decision.",
        commercial: "Connects to pitch-equivalent capacity, expected additional wins, and the overall scale case.",
        evidence: "Refined model, use-case ranking, scale decision package.",
        status: "Included in this proposal."
      }
    }
  };

  function byId(id) {
    return document.getElementById(id);
  }

  function setText(id, value) {
    var element = byId(id);
    if (element) element.textContent = value;
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

  function getSelectedMatrixContent() {
    var cell = matrixContent[selectedCell] || matrixContent["teams-projects"];
    var phase = cell[selectedPhase] || cell.phase1;
    var tabContent = phase[selectedDetailTab] || phase.success;

    return {
      cell: cell,
      body: tabContent,
      commercial: phase.commercial,
      evidence: phase.evidence,
      status: phase.status
    };
  }

  function updateMatrixDetail() {
    var content = getSelectedMatrixContent();

    setText("matrix-detail-kicker", phaseLabels[selectedPhase] || phaseLabels.phase1);
    setText("matrix-detail-title", content.cell.title);
    setText("matrix-detail-coordinates", content.cell.coordinates);
    setText("matrix-detail-body", content.body);
    setText("matrix-detail-commercial", content.commercial);
    setText("matrix-detail-guardrails", content.cell.guardrails);
    setText("matrix-detail-evidence", content.evidence);
    setText("matrix-detail-status", content.status);
    setHidden("matrix-value-link", !content.cell.valueLink);
  }

  function updateMatrixSelection() {
    matrixCells.forEach(function (button) {
      var isActive = button.dataset.matrixCell === selectedCell;
      var isRowHighlighted = highlightedRow && button.dataset.matrixRow === highlightedRow;
      var isColumnHighlighted = highlightedColumn && button.dataset.matrixColumn === highlightedColumn;

      button.classList.toggle("matrix-cell-active", isActive);
      button.classList.toggle("matrix-cell-highlighted", Boolean(isRowHighlighted || isColumnHighlighted));
      button.setAttribute("aria-pressed", String(isActive));
    });

    matrixRowToggles.forEach(function (button) {
      var isActive = highlightedRow === button.dataset.matrixRowToggle;
      button.classList.toggle("matrix-row-head-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    matrixColumnToggles.forEach(function (button) {
      var isActive = highlightedColumn === button.dataset.matrixColumnToggle;
      button.classList.toggle("matrix-col-head-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    updateMatrixDetail();
  }

  function setMatrixPhase(name) {
    if (!phaseLabels[name]) return;
    selectedPhase = name;

    matrixPhaseTabs.forEach(function (button) {
      var isActive = button.dataset.matrixPhase === name;
      button.classList.toggle("matrix-phase-tab-active", isActive);
      button.setAttribute("aria-selected", String(isActive));
    });

    updateMatrixDetail();
  }

  function setMatrixDetailTab(name) {
    if (!detailTabLabels[name]) return;
    selectedDetailTab = name;

    matrixDetailTabs.forEach(function (button) {
      var isActive = button.dataset.matrixDetailTab === name;
      button.classList.toggle("matrix-detail-tab-active", isActive);
      button.setAttribute("aria-selected", String(isActive));
    });

    updateMatrixDetail();
  }

  function resetMatrix() {
    selectedCell = "teams-projects";
    selectedPhase = "phase1";
    selectedDetailTab = "success";
    highlightedRow = null;
    highlightedColumn = null;
    setMatrixPhase(selectedPhase);
    setMatrixDetailTab(selectedDetailTab);
    updateMatrixSelection();
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
      "Project Accelerate pricing: [TBD]",
      "",
      "Caveat",
      "This is directional commercial logic, not proof. Phase 1 should calibrate the model with Lynxeye-specific evidence."
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

  matrixPhaseTabs.forEach(function (button) {
    button.addEventListener("click", function () {
      if (!button.disabled) setMatrixPhase(button.dataset.matrixPhase);
    });
  });

  matrixDetailTabs.forEach(function (button) {
    button.addEventListener("click", function () {
      setMatrixDetailTab(button.dataset.matrixDetailTab);
    });
  });

  matrixCells.forEach(function (button) {
    button.addEventListener("click", function () {
      selectedCell = button.dataset.matrixCell;
      updateMatrixSelection();
    });
  });

  matrixRowToggles.forEach(function (button) {
    button.addEventListener("click", function () {
      var row = button.dataset.matrixRowToggle;
      highlightedRow = highlightedRow === row ? null : row;
      highlightedColumn = null;
      updateMatrixSelection();
    });
  });

  matrixColumnToggles.forEach(function (button) {
    button.addEventListener("click", function () {
      var column = button.dataset.matrixColumnToggle;
      highlightedColumn = highlightedColumn === column ? null : column;
      highlightedRow = null;
      updateMatrixSelection();
    });
  });

  if (matrixHome) matrixHome.addEventListener("click", resetMatrix);

  scenarioButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      setScenario(button.dataset.scenario);
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

  resetMatrix();
  setCoverageRate(50, false);
  setScenario("base");
})();
