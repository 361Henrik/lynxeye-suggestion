(function () {
  var matrixTabs = Array.prototype.slice.call(document.querySelectorAll("[data-matrix-tab]"));
  var matrixSummaryCells = Array.prototype.slice.call(document.querySelectorAll("[data-matrix-summary]"));
  var matrixDetailCells = Array.prototype.slice.call(document.querySelectorAll("[data-matrix-detail]"));
  var matrixRowButtons = Array.prototype.slice.call(document.querySelectorAll("[data-matrix-toggle]"));
  var matrixSummaryRows = Array.prototype.slice.call(document.querySelectorAll("[data-matrix-row]"));
  var scenarioButtons = Array.prototype.slice.call(document.querySelectorAll("[data-scenario]"));
  var modalOpeners = Array.prototype.slice.call(document.querySelectorAll("[data-modal-open]"));
  var modals = Array.prototype.slice.call(document.querySelectorAll(".modal-backdrop"));
  var coverageButtons = Array.prototype.slice.call(document.querySelectorAll("[data-coverage-option]"));
  var previouslyFocused = null;
  var latestSimulatorState = null;
  var copyStatusTimer = null;
  var selectedMatrixTab = "overview";
  var openMatrixRow = "";

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

  var matrixContent = {
    overview: {
      note: "Overview shows the operating model first. Use the tabs to change the lens, then open the level that matters most.",
      summaries: {
        "employees-setup": { title: "Skills, tools, access, confidence", summary: "Daily AI use starts from less friction." },
        "employees-projects": { title: "Better prepared, faster contribution", summary: "Individuals bring stronger work into real projects." },
        "employees-pitches": { title: "More useful pitch input earlier", summary: "People can contribute before the pressure peaks." },
        "teams-setup": { title: "Shared setup and working rhythm", summary: "Teams get a common way to work." },
        "teams-projects": { title: "Workflows tested in real projects", summary: "The method is tested where value is visible." },
        "teams-pitches": { title: "Better pitch flow and output quality", summary: "Pitch work becomes more structured and reusable." },
        "lynxeye-setup": { title: "Company-owned adoption path", summary: "The setup can spread beyond the first group." },
        "lynxeye-projects": { title: "Playbooks and reusable methods", summary: "Strong work becomes company practice." },
        "lynxeye-pitches": { title: "Value evidence and scale choices", summary: "Leadership can decide what should expand." }
      },
      details: {
        "employees-setup": ["Skills, tools, access, and confidence", "Less friction in daily AI use", "Practical habits people can repeat"],
        "employees-projects": ["Better meeting preparation", "Faster contribution to project work", "Clearer documentation and follow-up"],
        "employees-pitches": ["Earlier pitch contribution", "Better first drafts and options", "Stronger preparation before senior review"],
        "teams-setup": ["Shared setup standards", "Common working rhythm", "Visible support and handover"],
        "teams-projects": ["Priority workflows tested in real work", "Reusable examples captured", "Team learning made visible"],
        "teams-pitches": ["Better pitch flow", "Reusable output patterns", "Quality and speed improved together"],
        "lynxeye-setup": ["Company-owned adoption path", "Setup guide beyond the bridge team", "Clear owner for keeping it current"],
        "lynxeye-projects": ["Playbooks and reusable methods", "Quality guardrails around client work", "Patterns that can scale safely"],
        "lynxeye-pitches": ["Value evidence for leadership", "Scale choices based on real use", "Lynxeye as a stronger internal reference"]
      }
    },
    scope: {
      note: "Scope & Setup finds the short-term value areas, builds on what Lynxeye and HQ already have, and clarifies what should be tested first.",
      summaries: {
        "employees-setup": { title: "Skills setup and access", summary: "Tools, Atlas, connectors, devices." },
        "employees-projects": { title: "Short-term value moments", summary: "Meeting prep, follow-up, output friction." },
        "employees-pitches": { title: "Pitch preparation friction", summary: "Where people can contribute earlier." },
        "teams-setup": { title: "Current practice and bridge team", summary: "What works, what failed, who owns action." },
        "teams-projects": { title: "3 to 5 priority use cases", summary: "Useful, visible, and safe to test." },
        "teams-pitches": { title: "Pitch workflow baseline", summary: "Current flow, review points, prototype candidates." },
        "lynxeye-setup": { title: "HQ direction and constraints", summary: "Tools, platform, security, IP, compliance." },
        "lynxeye-projects": { title: "Project Phase scope", summary: "Use cases, team, cadence, boundaries." },
        "lynxeye-pitches": { title: "Baseline value evidence", summary: "Simulator, assumptions, leadership questions." }
      },
      details: {
        "employees-setup": ["Skills setup by role", "Approved AI tools configured correctly", "ChatGPT Atlas browser setup and use cases where approved", "Projects, memory, custom instructions, files, connectors", "Cloud storage and document access mapped", "Voice input where useful", "Mac, PC, browser, and phone friction removed", "Availability and support needs clarified"],
        "employees-projects": ["Identify where each person can contribute faster", "Map meeting preparation and follow-up friction", "Find where transcripts can become outputs faster", "Identify research, synthesis, documentation, and versioning moments", "Confirm human review and client data boundaries"],
        "employees-pitches": ["Map where individuals can prepare better for pitches", "Identify moments for faster research and synthesis", "Find where more versions or directions would improve the work", "Capture proposal, deck, and meeting-output friction", "Clarify what support helps people contribute earlier"],
        "teams-setup": ["Current AI practice working session", "What works, what failed, what should be reused", "Relevant HQ and group resources collected", "Bridge team roles, actions, and availability", "Shared rhythm for support, learning, and handover"],
        "teams-projects": ["Rank 3 to 5 priority use cases", "Select project contexts with visible short-term value", "Map team collaboration flows around AI", "Identify prototype opportunities using Lynxeye materials", "Define what evidence should be captured"],
        "teams-pitches": ["Baseline current pitch workflow", "Select priority pitch contexts", "Identify reusable proposal logic and design elements", "Map team review and decision points", "Define pitch examples that show orchestration over chat"],
        "lynxeye-setup": ["HQ and June 3 input review", "Tool, platform, security, data, IP, and compliance constraint map", "Engagement charter and escalation paths", "Clear rules for read, draft, create, edit, and send actions"],
        "lynxeye-projects": ["Project Phase scope recommendation", "Use cases, team, cadence, boundaries, responsibilities", "Baseline success measures", "Compliance model for project material", "Pricing basis, with pricing still [TBD]"],
        "lynxeye-pitches": ["Baseline commercial simulator", "Value capture assumptions", "Leadership questions to resolve before Project Phase", "Evidence model for short-term value", "What would make Lynxeye a forerunner inside the wider group"]
      }
    },
    project: {
      note: "Project Phase shows value creation through prototypes, outputs, examples, reusable workflows, and evidence from the work.",
      summaries: {
        "employees-setup": { title: "Personalized daily setup", summary: "Working browser and tool habits." },
        "employees-projects": { title: "Useful outputs from real work", summary: "Preparation, documentation, first versions." },
        "employees-pitches": { title: "Sharper pitch contribution", summary: "More options and stronger drafts." },
        "teams-setup": { title: "Shared standards and rhythm", summary: "Support, action rules, show-and-tell." },
        "teams-projects": { title: "Designed workflows and prototypes", summary: "Examples, outputs, reusable assets." },
        "teams-pitches": { title: "Reusable pitch workflow", summary: "Proposal logic, formats, quality gates." },
        "lynxeye-setup": { title: "Setup guide and hub", summary: "Documentation, skills, playbooks, ownership." },
        "lynxeye-projects": { title: "Playbooks and opportunity map", summary: "Reusable methods owned by Lynxeye." },
        "lynxeye-pitches": { title: "Commercial upside and scale plan", summary: "Evidence, recommendation, expansion stages." }
      },
      details: {
        "employees-setup": ["One-on-one practical setup support", "Personalized tool environments and context packs", "ChatGPT Atlas routines for on-page help, research, and summaries", "Connectors, storage, voice, and device habits working in daily use", "Meeting transcript to output routines", "Email draft/send workflows only inside approved boundaries"],
        "employees-projects": ["Better meeting preparation", "Faster documentation and follow-up", "More useful first versions of client outputs", "Reviewed outputs people can use", "Clear notes on when AI should not be used"],
        "employees-pitches": ["Faster pitch preparation", "More options and stronger first drafts", "Pitch meeting notes turned into usable outputs", "Research, synthesis, structure, and drafting support", "Human judgment remains explicit before senior review"],
        "teams-setup": ["Shared setup standards", "Storage hygiene and context patterns", "Team support channel and action rules", "Show-and-tell rhythm", "Availability rhythm that keeps the work moving"],
        "teams-projects": ["Designed workflows for selected use cases", "Prototype builds using Lynxeye playbooks and design elements", "Team collaboration flows captured as deliverables", "Before and after examples", "Review and refine loop"],
        "teams-pitches": ["Redesigned pitch workflow", "Reusable proposal logic", "Output formats and design patterns", "Pitch prototypes and example outputs", "Quality gates before external use"],
        "lynxeye-setup": ["Documented setup guide for wider rollout", "Interactive documentation hub", "Tool setup, connector guidance, skills, playbooks, and support material in one place", "Ownership model for maintenance", "Reskilling rhythm for the wider firm"],
        "lynxeye-projects": ["First Lynxeye playbooks", "Quality guardrails and review rhythm", "Use-case map and opportunity surface", "Reusable methods owned by Lynxeye", "What to scale and what to leave alone"],
        "lynxeye-pitches": ["Refined simulator with Lynxeye evidence", "Updated commercial upside quantification", "Highest-value expansion recommendation", "Staged scale plan", "Lynxeye positioned as the go-to AI adoption and value creation reference inside the wider group"]
      }
    },
    adoption: {
      note: "Adoption, Security & Quality shows how the work becomes regular, trusted, safe, and strong enough for Lynxeye's premium standard.",
      summaries: {
        "employees-setup": { title: "Comfort and approved use", summary: "Confidence, consent, Atlas controls." },
        "employees-projects": { title: "Human review and safe handling", summary: "Quality checks before work leaves the team." },
        "employees-pitches": { title: "Safe pitch contribution", summary: "Tone, quality, originality, confidence." },
        "teams-setup": { title: "Learning rhythm and recognition", summary: "Use-case sessions, Q&A, shared examples." },
        "teams-projects": { title: "QA rhythm for live workflows", summary: "Risks, mistakes, best practices, review loops." },
        "teams-pitches": { title: "Pitch quality rhythm", summary: "Shared examples and maintained methods." },
        "lynxeye-setup": { title: "Rhythm of business for AI", summary: "Governance, ownership, captured learning." },
        "lynxeye-projects": { title: "Company quality guardrails", summary: "Compliance, IP, privacy, safe scale." },
        "lynxeye-pitches": { title: "Internal showcase model", summary: "Commercial evidence and adoption proof." }
      },
      details: {
        "employees-setup": ["Confidence and comfort checks", "Support for skeptical or unsure employees", "Approved tool use made practical", "ChatGPT Atlas page visibility and browser-memory controls", "Consent rules for recording and transcripts", "Clear escalation path for questions"],
        "employees-projects": ["Human review for client-facing work", "Safe handling of client data", "Quality checks before output leaves the team", "Notes on mistakes, weak outputs, and learning moments", "QA sessions where people can ask practical questions"],
        "employees-pitches": ["Review before pitch material is shared", "Tone, quality, and originality checks", "Safe use of client and prospect context", "Clear rule for what can be drafted, reused, or shown", "Better confidence before senior or partner review"],
        "teams-setup": ["Every-other-week AI use-case session", "Shared learning from wins, mistakes, and examples", "Recognition for teams moving adoption forward", "Practical AI team of the month or similar light ritual", "Team support and Q&A cadence"],
        "teams-projects": ["QA rhythm for live workflows", "Escalation for privacy, IP, or quality concerns", "Best practices captured from actual project work", "Mistakes and lessons captured without blame", "Review patterns added back into playbooks"],
        "teams-pitches": ["Pitch quality review rhythm", "Shared examples of strong AI-supported pitch work", "Reusable pitch patterns improved over time", "Team learning from what worked and what did not", "Clear owner for maintaining pitch methods"],
        "lynxeye-setup": ["Rhythm of business for AI", "Governance for tools, connectors, permissions, and budgets", "Regular capture of skills, use cases, best practices, mistakes, and learnings", "Ownership for documentation and playbook updates", "Wider adoption rhythm beyond the bridge team"],
        "lynxeye-projects": ["Company quality guardrails", "Compliance, privacy, and IP habits", "Reusable project methods maintained over time", "Leadership visibility into adoption and value", "A practical model for scaling safely"],
        "lynxeye-pitches": ["Commercial evidence reviewed regularly", "Pitch and growth learnings fed back into the method", "Strongest use cases prioritized for expansion", "Recognition of teams creating measurable value", "Lynxeye becomes a credible internal showcase for AI adoption"]
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

  function getSelectedMatrixContent() {
    return matrixContent[selectedMatrixTab] || matrixContent.overview;
  }

  function updateMatrixTabs() {
    var panel = byId("matrix-panel");

    matrixTabs.forEach(function (button) {
      var isActive = button.dataset.matrixTab === selectedMatrixTab;
      button.classList.toggle("matrix-tab-active", isActive);
      button.setAttribute("aria-selected", String(isActive));
      button.setAttribute("tabindex", isActive ? "0" : "-1");

      if (isActive && panel) {
        panel.setAttribute("aria-labelledby", button.id);
      }
    });
  }

  function renderBulletList(list, items) {
    list.innerHTML = "";

    items.forEach(function (item) {
      var listItem = document.createElement("li");
      listItem.textContent = item;
      list.appendChild(listItem);
    });
  }

  function updateMatrixContent() {
    var content = getSelectedMatrixContent();

    matrixSummaryCells.forEach(function (cell) {
      var cellContent = content.summaries[cell.dataset.matrixSummary];
      if (!cellContent) return;

      var title = cell.querySelector("strong");
      var summary = cell.querySelector("em");

      if (title) title.textContent = cellContent.title;
      if (summary) summary.textContent = cellContent.summary;
    });

    matrixDetailCells.forEach(function (cell) {
      var items = content.details[cell.dataset.matrixDetail] || [];
      var list = cell.querySelector("ul");
      if (list) renderBulletList(list, items);
    });

    setText("matrix-note", content.note || matrixContent.overview.note);
  }

  function updateMatrixRows() {
    matrixSummaryRows.forEach(function (row) {
      row.classList.toggle("matrix-summary-row-open", row.dataset.matrixRow === openMatrixRow);
    });

    matrixRowButtons.forEach(function (button) {
      var isOpen = button.dataset.matrixToggle === openMatrixRow;
      var detail = byId("matrix-detail-" + button.dataset.matrixToggle);
      var action = button.querySelector(".matrix-row-action");

      button.setAttribute("aria-expanded", String(isOpen));
      button.classList.toggle("matrix-row-button-open", isOpen);

      if (detail) detail.hidden = !isOpen;
      if (action) action.firstChild.nodeValue = isOpen ? "Hide details " : "View details ";
    });
  }

  function setOpenMatrixRow(row) {
    openMatrixRow = openMatrixRow === row ? "" : row;
    updateMatrixRows();
  }

  function setMatrixTab(tab) {
    if (!matrixContent[tab]) return;

    selectedMatrixTab = tab;
    updateMatrixTabs();
    updateMatrixContent();
    updateMatrixRows();
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
      "Project Accelerate Lynxeye, back-of-envelope model",
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

  matrixTabs.forEach(function (button) {
    button.addEventListener("click", function () {
      setMatrixTab(button.dataset.matrixTab);
    });

    button.addEventListener("keydown", function (event) {
      var currentIndex = matrixTabs.indexOf(button);
      var nextIndex = currentIndex;

      if (event.key === "ArrowRight") nextIndex = currentIndex + 1;
      if (event.key === "ArrowLeft") nextIndex = currentIndex - 1;
      if (event.key === "Home") nextIndex = 0;
      if (event.key === "End") nextIndex = matrixTabs.length - 1;

      if (nextIndex !== currentIndex) {
        event.preventDefault();
        if (nextIndex < 0) nextIndex = matrixTabs.length - 1;
        if (nextIndex >= matrixTabs.length) nextIndex = 0;
        matrixTabs[nextIndex].focus();
        setMatrixTab(matrixTabs[nextIndex].dataset.matrixTab);
      }
    });
  });

  matrixRowButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      setOpenMatrixRow(button.dataset.matrixToggle);
    });
  });

  matrixSummaryRows.forEach(function (row) {
    row.addEventListener("click", function (event) {
      if (event.target.closest("button")) return;
      setOpenMatrixRow(row.dataset.matrixRow);
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

  setMatrixTab(selectedMatrixTab);
  updateMatrixRows();
  setCoverageRate(50, false);
  setScenario("base");
})();
