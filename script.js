const LEVELS_PER_DIFFICULTY = 50;
const STORAGE_KEY = "changzhiguan.progress.v1";
const CONTACT_EMAIL = "4528cindy@gmail.com";

const I18N = {
  zh: {
    htmlLang: "zh-Hant",
    pageTitle: "長輩益智遊戲站",
    brandName: "長智館",
    brandLogoAlt: "長智館 LOGO",
    brandAria: "長智館品牌",
    toggleLanguage: "English",
    siteTitle: "長輩益智遊戲站",
    siteSubtitle: "左側直接選遊戲、難度與關卡。每個難度都有 50 關。",
    feedbackBtn: "意見回饋",
    collabBtn: "合作聯絡",
    menuTitle: "遊戲選單",
    gamesSectionTitle: "遊戲",
    difficultySectionTitle: "難度",
    levelSectionTitle: "關卡（每種難度 50 關）",
    navLink: "1. 連連看配對",
    navMemory: "2. 翻牌記憶",
    diffEasy: "簡單",
    diffNormal: "普通",
    diffHard: "困難",
    diffExpert: "高手",
    levelDown: "上一關",
    levelUp: "下一關",
    levelDisplay: "第 {level} / {total} 關",
    levelSliderAria: "關卡選擇",
    difficultyHint: "目前：{tier} 第 {level} 關｜{pairs} 組配對（{cards} 張卡）｜限時 {time} 秒",
    ruleAutoUp: "過關時：若步數少或花費時間短，關卡自動上升 1 級。",
    ruleAutoDown: "時間到未過關：關卡自動下降 1 級。",
    restartRound: "重新開始本關",
    linkTitle: "連連看配對",
    linkInstruction: "玩法：按兩張相同圖案即可配對成功。",
    memoryTitle: "翻牌記憶",
    memoryInstruction: "玩法：一次翻兩張，圖案相同就保留。",
    timeBar: "時間條",
    secondsDisplay: "{seconds} 秒",
    roundMeta: "{tier}｜第 {level} 關｜{pairs} 組配對｜{time} 秒",
    cardLabel: "遊戲卡片",
    faceDownCard: "未翻開卡片",
    cardIconLabel: "圖案 {symbol}",
    statusFirstLink: "請按第一張卡片。",
    statusFirstMemory: "請翻第一張卡片。",
    statusPickSecondLink: "已選第一張，請再選一張。",
    statusPickSecondMemory: "已翻第一張，請再翻一張。",
    statusMatched: "配對成功。",
    statusMismatch: "不一樣，請再試一次。",
    progress: "{message}（配對 {matched}/{total}，步數 {steps}）",
    reasonFewMoves: "步數較少",
    reasonFastTime: "用時較短",
    summary: "本局 {time} 秒，{steps} 步。",
    winPromoted: "過關！你這局{reasons}，已升到「{tier} 第 {level} 關」。{summary} 按「{restart}」進入下一關。",
    winMax: "過關！你這局{reasons}，已在最高關卡。{summary}",
    winKeep: "過關！{summary} 目前維持「{tier} 第 {level} 關」。",
    failDown: "時間到，本關未通過。已降到「{tier} 第 {level} 關」。按「{restart}」再挑戰。",
    failMin: "時間到，本關未通過。已在最低關卡，按「{restart}」再試一次。",
    reasonJoiner: "、",
    copyright: "© {year} 長智館. 版權所有。",
  },
  en: {
    htmlLang: "en",
    pageTitle: "Senior Brain Game Hub",
    brandName: "fOREVER YOUNG",
    brandLogoAlt: "fOREVER YOUNG logo",
    brandAria: "fOREVER YOUNG brand",
    toggleLanguage: "中文",
    siteTitle: "Senior Brain Game Hub",
    siteSubtitle: "Use the left panel to choose game, difficulty, and stage. Each difficulty has 50 stages.",
    feedbackBtn: "Feedback",
    collabBtn: "Collaboration",
    menuTitle: "Game Menu",
    gamesSectionTitle: "Games",
    difficultySectionTitle: "Difficulty",
    levelSectionTitle: "Stages (50 per difficulty)",
    navLink: "1. Match Pairs",
    navMemory: "2. Memory Flip",
    diffEasy: "Easy",
    diffNormal: "Normal",
    diffHard: "Hard",
    diffExpert: "Expert",
    levelDown: "Previous",
    levelUp: "Next",
    levelDisplay: "Stage {level} / {total}",
    levelSliderAria: "Stage selector",
    difficultyHint: "Now: {tier} Stage {level} | {pairs} pairs ({cards} cards) | Time limit {time}s",
    ruleAutoUp: "On clear: if your moves are fewer or your time is faster, stage goes up by 1.",
    ruleAutoDown: "On timeout: stage goes down by 1.",
    restartRound: "Restart Stage",
    linkTitle: "Match Pairs",
    linkInstruction: "How to play: select two cards with the same icon to make a match.",
    memoryTitle: "Memory Flip",
    memoryInstruction: "How to play: flip two cards each turn; matching cards stay open.",
    timeBar: "Time Bar",
    secondsDisplay: "{seconds}s",
    roundMeta: "{tier} | Stage {level} | {pairs} pairs | {time}s",
    cardLabel: "Game card",
    faceDownCard: "Face-down card",
    cardIconLabel: "Icon {symbol}",
    statusFirstLink: "Pick the first card.",
    statusFirstMemory: "Flip the first card.",
    statusPickSecondLink: "First card selected. Pick one more.",
    statusPickSecondMemory: "First card flipped. Flip one more.",
    statusMatched: "Matched.",
    statusMismatch: "Not a match. Try again.",
    progress: "{message} (Matches {matched}/{total}, Moves {steps})",
    reasonFewMoves: "fewer moves",
    reasonFastTime: "faster time",
    summary: "This stage took {time}s and {steps} moves.",
    winPromoted: "Cleared! You achieved {reasons}, and advanced to \"{tier} Stage {level}\". {summary} Press \"{restart}\" for the next stage.",
    winMax: "Cleared! You achieved {reasons}. You are already at the highest stage. {summary}",
    winKeep: "Cleared! {summary} Staying at \"{tier} Stage {level}\".",
    failDown: "Time is up. Stage failed. Dropped to \"{tier} Stage {level}\". Press \"{restart}\" to retry.",
    failMin: "Time is up. Stage failed. You are already at the lowest stage. Press \"{restart}\" to try again.",
    reasonJoiner: " and ",
    copyright: "© {year} fOREVER YOUNG. All rights reserved.",
  },
};

const DIFFICULTY_TIERS = [
  {
    labelZh: "簡單",
    labelEn: "Easy",
    pairMin: 10,
    pairMax: 26,
    timeMax: 150,
    timeMin: 105,
    stepFactorLink: 1.85,
    stepFactorMemory: 2.25,
    timeRatioLink: 0.76,
    timeRatioMemory: 0.72,
  },
  {
    labelZh: "普通",
    labelEn: "Normal",
    pairMin: 20,
    pairMax: 38,
    timeMax: 125,
    timeMin: 78,
    stepFactorLink: 1.75,
    stepFactorMemory: 2.12,
    timeRatioLink: 0.72,
    timeRatioMemory: 0.68,
  },
  {
    labelZh: "困難",
    labelEn: "Hard",
    pairMin: 32,
    pairMax: 58,
    timeMax: 100,
    timeMin: 58,
    stepFactorLink: 1.62,
    stepFactorMemory: 1.98,
    timeRatioLink: 0.69,
    timeRatioMemory: 0.64,
  },
  {
    labelZh: "高手",
    labelEn: "Expert",
    pairMin: 44,
    pairMax: 84,
    timeMax: 82,
    timeMin: 42,
    stepFactorLink: 1.5,
    stepFactorMemory: 1.86,
    timeRatioLink: 0.66,
    timeRatioMemory: 0.6,
  },
];

const SYMBOLS = [
  "🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼", "🐨", "🐯",
  "🦁", "🐮", "🐷", "🐸", "🐵", "🐔", "🐧", "🐦", "🐤", "🦆",
  "🦉", "🦄", "🐢", "🐙", "🦋", "🐌", "🐞", "🐠", "🐬", "🦀",
  "🐳", "🦈", "🐘", "🦒", "🦓", "🦔", "🦩", "🦜", "🪿", "🐇",
  "🍎", "🍐", "🍊", "🍋", "🍌", "🍉", "🍇", "🍓", "🫐", "🍒",
  "🥝", "🍑", "🍍", "🥥", "🥕", "🌽", "🍅", "🥔", "🍄", "🥜",
  "🍞", "🧀", "🍪", "🍩", "🍰", "🧁", "🍫", "🍭", "🍿", "🥨",
  "⚽", "🏀", "🏈", "⚾", "🎾", "🏐", "🎱", "🏓", "🏸", "🥊",
  "🎯", "🎲", "🧩", "🎸", "🎹", "🎺", "🎻", "🥁", "🎮", "🚗",
  "🚕", "🚌", "🚲", "🚂", "✈️", "🚀", "⛵", "🛸", "🏠", "🏢",
  "⛲", "🌈", "⭐", "🌙", "☀️", "☁️", "❄️", "⚡", "🪐", "🧸",
];

const appState = {
  currentGame: "link",
  difficultyIndex: 1,
  level: 1,
  locale: "zh",
};

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function t(key, vars = {}) {
  const pack = I18N[appState.locale] || I18N.zh;
  const fallback = I18N.zh[key] || key;
  const template = pack[key] || fallback;
  return template.replace(/\{(\w+)\}/g, (_, token) => String(vars[token] ?? ""));
}

function tierLabel(tier) {
  return appState.locale === "en" ? tier.labelEn : tier.labelZh;
}

function saveProgress() {
  const payload = {
    currentGame: appState.currentGame,
    difficultyIndex: appState.difficultyIndex,
    level: appState.level,
    locale: appState.locale,
    savedAt: Date.now(),
  };

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch (error) {
    // Ignore storage errors (private mode or blocked storage).
  }
}

function loadProgress() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return null;
    }

    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") {
      return null;
    }

    return {
      currentGame: parsed.currentGame === "memory" ? "memory" : "link",
      difficultyIndex: clamp(Number(parsed.difficultyIndex), 0, DIFFICULTY_TIERS.length - 1),
      level: clamp(Number(parsed.level), 1, LEVELS_PER_DIFFICULTY),
      locale: parsed.locale === "en" ? "en" : "zh",
    };
  } catch (error) {
    return null;
  }
}

const screens = {
  link: document.getElementById("linkGameScreen"),
  memory: document.getElementById("memoryGameScreen"),
};

const boards = {
  link: document.getElementById("linkBoard"),
  memory: document.getElementById("memoryBoard"),
};

const statusEls = {
  link: document.getElementById("linkStatus"),
  memory: document.getElementById("memoryStatus"),
};

const roundMetaEls = {
  link: document.getElementById("linkRoundMeta"),
  memory: document.getElementById("memoryRoundMeta"),
};

const timerEls = {
  link: {
    text: document.getElementById("linkTimerText"),
    bar: document.getElementById("linkTimerBar"),
  },
  memory: {
    text: document.getElementById("memoryTimerText"),
    bar: document.getElementById("memoryTimerBar"),
  },
};

const navButtons = document.querySelectorAll(".nav-btn");
const diffButtons = document.querySelectorAll(".diff-btn");
const restartButtons = document.querySelectorAll(".restart");

const dom = {
  brandMark: document.querySelector(".brand-mark"),
  brandLogo: document.querySelector(".brand-logo"),
  brandName: document.getElementById("brandName"),
  langToggle: document.getElementById("langToggle"),
  siteTitle: document.getElementById("siteTitle"),
  siteSubtitle: document.getElementById("siteSubtitle"),
  menuTitle: document.getElementById("menuTitle"),
  gamesSectionTitle: document.getElementById("gamesSectionTitle"),
  difficultySectionTitle: document.getElementById("difficultySectionTitle"),
  levelSectionTitle: document.getElementById("levelSectionTitle"),
  navLinkBtn: document.getElementById("navLinkBtn"),
  navMemoryBtn: document.getElementById("navMemoryBtn"),
  diffEasyBtn: document.getElementById("diffEasyBtn"),
  diffNormalBtn: document.getElementById("diffNormalBtn"),
  diffHardBtn: document.getElementById("diffHardBtn"),
  diffExpertBtn: document.getElementById("diffExpertBtn"),
  levelDown: document.getElementById("levelDown"),
  levelUp: document.getElementById("levelUp"),
  levelDisplay: document.getElementById("levelDisplay"),
  levelSlider: document.getElementById("levelSlider"),
  difficultyHint: document.getElementById("difficultyHint"),
  ruleAutoUp: document.getElementById("ruleAutoUp"),
  ruleAutoDown: document.getElementById("ruleAutoDown"),
  linkTitle: document.getElementById("linkTitle"),
  linkInstruction: document.getElementById("linkInstruction"),
  memoryTitle: document.getElementById("memoryTitle"),
  memoryInstruction: document.getElementById("memoryInstruction"),
  linkTimerLabel: document.getElementById("linkTimerLabel"),
  memoryTimerLabel: document.getElementById("memoryTimerLabel"),
  feedbackLink: document.getElementById("feedbackLink"),
  collabLink: document.getElementById("collabLink"),
  copyrightText: document.getElementById("copyrightText"),
};

function createGameState() {
  return {
    firstCard: null,
    secondCard: null,
    lock: false,
    matchedPairs: 0,
    steps: 0,
    config: null,
    timeLeft: 0,
    timerId: null,
    startedAt: 0,
    roundOver: false,
  };
}

const gameState = {
  link: createGameState(),
  memory: createGameState(),
};

function updateContactLinks() {
  const emailParam = encodeURIComponent(CONTACT_EMAIL);
  const langParam = encodeURIComponent(appState.locale);
  dom.feedbackLink.href = `contact.html?type=feedback&lang=${langParam}&email=${emailParam}`;
  dom.collabLink.href = `contact.html?type=collaboration&lang=${langParam}&email=${emailParam}`;
}

function applyLanguageToStaticUI() {
  document.documentElement.lang = t("htmlLang");
  document.title = t("pageTitle");

  dom.brandMark.setAttribute("aria-label", t("brandAria"));
  dom.brandLogo.alt = t("brandLogoAlt");
  dom.brandName.textContent = t("brandName");
  dom.langToggle.textContent = t("toggleLanguage");

  dom.siteTitle.textContent = t("siteTitle");
  dom.siteSubtitle.textContent = t("siteSubtitle");
  dom.menuTitle.textContent = t("menuTitle");
  dom.gamesSectionTitle.textContent = t("gamesSectionTitle");
  dom.difficultySectionTitle.textContent = t("difficultySectionTitle");
  dom.levelSectionTitle.textContent = t("levelSectionTitle");
  dom.navLinkBtn.textContent = t("navLink");
  dom.navMemoryBtn.textContent = t("navMemory");
  dom.diffEasyBtn.textContent = t("diffEasy");
  dom.diffNormalBtn.textContent = t("diffNormal");
  dom.diffHardBtn.textContent = t("diffHard");
  dom.diffExpertBtn.textContent = t("diffExpert");
  dom.levelDown.textContent = t("levelDown");
  dom.levelUp.textContent = t("levelUp");
  dom.levelSlider.setAttribute("aria-label", t("levelSliderAria"));
  dom.ruleAutoUp.textContent = t("ruleAutoUp");
  dom.ruleAutoDown.textContent = t("ruleAutoDown");
  dom.linkTitle.textContent = t("linkTitle");
  dom.linkInstruction.textContent = t("linkInstruction");
  dom.memoryTitle.textContent = t("memoryTitle");
  dom.memoryInstruction.textContent = t("memoryInstruction");
  dom.linkTimerLabel.textContent = t("timeBar");
  dom.memoryTimerLabel.textContent = t("timeBar");
  dom.feedbackLink.textContent = t("feedbackBtn");
  dom.collabLink.textContent = t("collabBtn");
  dom.copyrightText.textContent = t("copyright", { year: new Date().getFullYear() });
  updateContactLinks();

  restartButtons.forEach((button) => {
    button.textContent = t("restartRound");
  });
}

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function lerp(start, end, ratio) {
  return start + (end - start) * ratio;
}

function currentTier() {
  return DIFFICULTY_TIERS[appState.difficultyIndex];
}

function getCurrentRank() {
  return appState.difficultyIndex * LEVELS_PER_DIFFICULTY + (appState.level - 1);
}

function setFromRank(rank) {
  const maxRank = DIFFICULTY_TIERS.length * LEVELS_PER_DIFFICULTY - 1;
  const clamped = clamp(rank, 0, maxRank);
  appState.difficultyIndex = Math.floor(clamped / LEVELS_PER_DIFFICULTY);
  appState.level = (clamped % LEVELS_PER_DIFFICULTY) + 1;
  return clamped;
}

function shiftRank(delta) {
  const before = getCurrentRank();
  const after = setFromRank(before + delta);
  return before !== after;
}

function calculateDensity(totalCards) {
  if (totalCards <= 52) {
    return { cell: 92, icon: 2.4, gap: 5 };
  }
  if (totalCards <= 80) {
    return { cell: 74, icon: 2.0, gap: 4 };
  }
  if (totalCards <= 110) {
    return { cell: 62, icon: 1.65, gap: 4 };
  }
  if (totalCards <= 140) {
    return { cell: 52, icon: 1.35, gap: 3 };
  }
  return { cell: 44, icon: 1.12, gap: 3 };
}

function getRoundConfig(type) {
  const tier = currentTier();
  const ratio = (appState.level - 1) / (LEVELS_PER_DIFFICULTY - 1);
  const pairCount = Math.round(lerp(tier.pairMin, tier.pairMax, ratio));
  const timeLimit = Math.round(lerp(tier.timeMax, tier.timeMin, ratio));
  const totalCards = pairCount * 2;
  const density = calculateDensity(totalCards);

  const stepFactor = type === "link" ? tier.stepFactorLink : tier.stepFactorMemory;
  const timeRatio = type === "link" ? tier.timeRatioLink : tier.timeRatioMemory;

  return {
    difficultyLabel: tierLabel(tier),
    difficultyIndex: appState.difficultyIndex,
    level: appState.level,
    pairCount,
    totalCards,
    timeLimit,
    stepTarget: Math.max(pairCount, Math.round(pairCount * stepFactor)),
    timeTarget: Math.max(8, timeLimit * timeRatio),
    density,
  };
}

function updateSidebarState() {
  navButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.game === appState.currentGame);
  });

  diffButtons.forEach((button) => {
    button.classList.toggle("active", Number(button.dataset.level) === appState.difficultyIndex);
  });

  dom.levelDisplay.textContent = t("levelDisplay", {
    level: appState.level,
    total: LEVELS_PER_DIFFICULTY,
  });
  dom.levelSlider.value = String(appState.level);

  const previewConfig = getRoundConfig(appState.currentGame);
  dom.difficultyHint.textContent = t("difficultyHint", {
    tier: previewConfig.difficultyLabel,
    level: previewConfig.level,
    pairs: previewConfig.pairCount,
    cards: previewConfig.totalCards,
    time: previewConfig.timeLimit,
  });
}

function showScreen(target) {
  Object.entries(screens).forEach(([name, screen]) => {
    const isActive = name === target;
    screen.classList.toggle("active", isActive);
    screen.setAttribute("aria-hidden", String(!isActive));
  });
}

function clearTimer(type) {
  const state = gameState[type];
  if (state.timerId) {
    window.clearInterval(state.timerId);
    state.timerId = null;
  }
}

function clearAllTimers() {
  clearTimer("link");
  clearTimer("memory");
}

function updateTimerUI(type) {
  const state = gameState[type];
  if (!state.config) {
    return;
  }

  const percent = Math.max(0, (state.timeLeft / state.config.timeLimit) * 100);
  timerEls[type].text.textContent = t("secondsDisplay", { seconds: Math.ceil(state.timeLeft) });
  timerEls[type].bar.style.width = `${percent}%`;
  timerEls[type].bar.classList.remove("warn", "danger");

  if (percent <= 30) {
    timerEls[type].bar.classList.add("danger");
  } else if (percent <= 60) {
    timerEls[type].bar.classList.add("warn");
  }
}

function applyBoardDensity(type, density) {
  boards[type].style.setProperty("--cell-size", `${density.cell}px`);
  boards[type].style.setProperty("--icon-size", `${density.icon}rem`);
  boards[type].style.setProperty("--cell-gap", `${density.gap}px`);
}

function disableBoard(type) {
  boards[type].querySelectorAll(".card-btn").forEach((card) => {
    card.disabled = true;
  });
}

function startTimer(type) {
  const state = gameState[type];
  clearTimer(type);
  updateTimerUI(type);
  state.startedAt = Date.now();

  state.timerId = window.setInterval(() => {
    if (state.roundOver || !state.config) {
      clearTimer(type);
      return;
    }

    const elapsed = (Date.now() - state.startedAt) / 1000;
    state.timeLeft = Math.max(0, state.config.timeLimit - elapsed);
    updateTimerUI(type);

    if (state.timeLeft <= 0) {
      handleRoundFail(type);
    }
  }, 120);
}

function prepareRound(type) {
  const config = getRoundConfig(type);
  const state = gameState[type];

  clearTimer(type);
  state.firstCard = null;
  state.secondCard = null;
  state.lock = false;
  state.matchedPairs = 0;
  state.steps = 0;
  state.config = config;
  state.timeLeft = config.timeLimit;
  state.roundOver = false;

  applyBoardDensity(type, config.density);
  roundMetaEls[type].textContent = t("roundMeta", {
    tier: config.difficultyLabel,
    level: config.level,
    pairs: config.pairCount,
    time: config.timeLimit,
  });
}

function buildDeck(pairCount) {
  const source = shuffle(SYMBOLS).slice(0, pairCount);
  const pairs = source.map((symbol, index) => {
    const hue = (index * 31 + 23) % 360;
    return {
      id: `pair-${index}`,
      symbol,
      bg: `hsl(${hue} 85% 92%)`,
      border: `hsl(${hue} 58% 46%)`,
    };
  });

  const doubled = [...pairs, ...pairs];
  return shuffle(doubled);
}

function createCardElement(type, item, index) {
  const card = document.createElement("button");
  card.type = "button";
  card.className = `card-btn ${type}-card`;
  card.dataset.index = String(index);
  card.dataset.pairId = item.id;
  card.dataset.symbol = item.symbol;
  card.dataset.open = "false";
  card.style.setProperty("--pair-bg", item.bg);
  card.style.setProperty("--pair-border", item.border);
  card.setAttribute("aria-label", t("cardLabel"));
  return card;
}

function formatProgress(type, message) {
  const state = gameState[type];
  if (!state.config) {
    return message;
  }
  return t("progress", {
    message,
    matched: state.matchedPairs,
    total: state.config.pairCount,
    steps: state.steps,
  });
}

function resetLinkGame() {
  prepareRound("link");
  const state = gameState.link;
  const deck = buildDeck(state.config.pairCount);

  boards.link.innerHTML = "";
  deck.forEach((item, index) => {
    const card = createCardElement("link", item, index);
    card.textContent = item.symbol;
    card.addEventListener("click", onLinkCardClick);
    boards.link.appendChild(card);
  });

  statusEls.link.textContent = formatProgress("link", t("statusFirstLink"));
  startTimer("link");
}

function resetMemoryGame() {
  prepareRound("memory");
  const state = gameState.memory;
  const deck = buildDeck(state.config.pairCount);

  boards.memory.innerHTML = "";
  deck.forEach((item, index) => {
    const card = createCardElement("memory", item, index);
    card.textContent = "?";
    card.setAttribute("aria-label", t("faceDownCard"));
    card.addEventListener("click", onMemoryCardClick);
    boards.memory.appendChild(card);
  });

  statusEls.memory.textContent = formatProgress("memory", t("statusFirstMemory"));
  startTimer("memory");
}

function evaluatePromotion(type) {
  const state = gameState[type];
  if (!state.config) {
    return { fastBySteps: false, fastByTime: false, usedTime: 0, promoted: false, reachedMax: false };
  }

  const usedTime = state.config.timeLimit - state.timeLeft;
  const fastBySteps = state.steps <= state.config.stepTarget;
  const fastByTime = usedTime <= state.config.timeTarget;
  const shouldPromote = fastBySteps || fastByTime;
  const promoted = shouldPromote ? shiftRank(1) : false;

  return {
    fastBySteps,
    fastByTime,
    usedTime,
    promoted,
    reachedMax: shouldPromote && !promoted,
  };
}

function handleRoundWin(type) {
  const state = gameState[type];
  if (state.roundOver || !state.config) {
    return;
  }

  state.roundOver = true;
  state.lock = true;
  clearTimer(type);
  disableBoard(type);

  const result = evaluatePromotion(type);
  updateSidebarState();
  saveProgress();

  const reasons = [];
  if (result.fastBySteps) {
    reasons.push(t("reasonFewMoves"));
  }
  if (result.fastByTime) {
    reasons.push(t("reasonFastTime"));
  }

  const summary = t("summary", {
    time: result.usedTime.toFixed(1),
    steps: state.steps,
  });

  if (result.promoted) {
    const nextTier = tierLabel(currentTier());
    statusEls[type].textContent = t("winPromoted", {
      reasons: reasons.join(t("reasonJoiner")),
      tier: nextTier,
      level: appState.level,
      summary,
      restart: t("restartRound"),
    });
    return;
  }

  if (result.reachedMax) {
    statusEls[type].textContent = t("winMax", {
      reasons: reasons.join(t("reasonJoiner")),
      summary,
    });
    return;
  }

  statusEls[type].textContent = t("winKeep", {
    summary,
    tier: state.config.difficultyLabel,
    level: state.config.level,
  });
}

function handleRoundFail(type) {
  const state = gameState[type];
  if (state.roundOver) {
    return;
  }

  state.roundOver = true;
  state.lock = true;
  state.timeLeft = 0;
  updateTimerUI(type);
  clearTimer(type);
  disableBoard(type);

  const lowered = shiftRank(-1);
  updateSidebarState();
  saveProgress();

  if (lowered) {
    statusEls[type].textContent = t("failDown", {
      tier: tierLabel(currentTier()),
      level: appState.level,
      restart: t("restartRound"),
    });
    return;
  }

  statusEls[type].textContent = t("failMin", {
    restart: t("restartRound"),
  });
}

function onLinkCardClick(event) {
  const card = event.currentTarget;
  const state = gameState.link;

  if (state.roundOver || state.lock || card.classList.contains("matched")) {
    return;
  }

  if (!state.firstCard) {
    state.firstCard = card;
    card.classList.add("selected");
    statusEls.link.textContent = formatProgress("link", t("statusPickSecondLink"));
    return;
  }

  if (state.firstCard === card) {
    return;
  }

  const first = state.firstCard;
  const second = card;
  second.classList.add("selected");
  state.steps += 1;

  if (first.dataset.pairId === second.dataset.pairId) {
    state.lock = true;
    window.setTimeout(() => {
      first.classList.remove("selected");
      second.classList.remove("selected");
      first.classList.add("matched");
      second.classList.add("matched");
      first.disabled = true;
      second.disabled = true;
      state.firstCard = null;
      state.lock = false;
      state.matchedPairs += 1;

      if (state.config && state.matchedPairs === state.config.pairCount) {
        handleRoundWin("link");
      } else {
        statusEls.link.textContent = formatProgress("link", t("statusMatched"));
      }
    }, 180);
  } else {
    state.lock = true;
    window.setTimeout(() => {
      first.classList.remove("selected");
      second.classList.remove("selected");
      state.firstCard = null;
      state.lock = false;
      statusEls.link.textContent = formatProgress("link", t("statusMismatch"));
    }, 460);
  }
}

function revealMemoryCard(card) {
  card.dataset.open = "true";
  card.textContent = card.dataset.symbol;
  card.classList.add("is-flipped");
  card.setAttribute("aria-label", t("cardIconLabel", { symbol: card.dataset.symbol }));
}

function hideMemoryCard(card) {
  card.dataset.open = "false";
  card.textContent = "?";
  card.classList.remove("is-flipped");
  card.setAttribute("aria-label", t("faceDownCard"));
}

function onMemoryCardClick(event) {
  const card = event.currentTarget;
  const state = gameState.memory;

  if (state.roundOver || state.lock || card.classList.contains("matched") || card.dataset.open === "true") {
    return;
  }

  revealMemoryCard(card);

  if (!state.firstCard) {
    state.firstCard = card;
    statusEls.memory.textContent = formatProgress("memory", t("statusPickSecondMemory"));
    return;
  }

  state.secondCard = card;
  state.steps += 1;
  state.lock = true;

  if (state.firstCard.dataset.pairId === state.secondCard.dataset.pairId) {
    window.setTimeout(() => {
      state.firstCard.classList.add("matched");
      state.secondCard.classList.add("matched");
      state.firstCard.disabled = true;
      state.secondCard.disabled = true;
      state.firstCard = null;
      state.secondCard = null;
      state.lock = false;
      state.matchedPairs += 1;

      if (state.config && state.matchedPairs === state.config.pairCount) {
        handleRoundWin("memory");
      } else {
        statusEls.memory.textContent = formatProgress("memory", t("statusMatched"));
      }
    }, 170);
  } else {
    window.setTimeout(() => {
      hideMemoryCard(state.firstCard);
      hideMemoryCard(state.secondCard);
      state.firstCard = null;
      state.secondCard = null;
      state.lock = false;
      statusEls.memory.textContent = formatProgress("memory", t("statusMismatch"));
    }, 620);
  }
}

function startGame(type) {
  appState.currentGame = type;
  clearAllTimers();
  showScreen(type);
  updateSidebarState();

  if (type === "link") {
    resetLinkGame();
    saveProgress();
    return;
  }

  resetMemoryGame();
  saveProgress();
}

function restartCurrentGame() {
  startGame(appState.currentGame);
}

function setDifficulty(index) {
  appState.difficultyIndex = clamp(index, 0, DIFFICULTY_TIERS.length - 1);
}

function setLevel(level) {
  appState.level = clamp(level, 1, LEVELS_PER_DIFFICULTY);
}

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    startGame(button.dataset.game);
  });
});

diffButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setDifficulty(Number(button.dataset.level));
    restartCurrentGame();
  });
});

dom.levelSlider.addEventListener("input", () => {
  setLevel(Number(dom.levelSlider.value));
  updateSidebarState();
  saveProgress();
});

dom.levelSlider.addEventListener("change", () => {
  restartCurrentGame();
});

dom.levelDown.addEventListener("click", () => {
  setLevel(appState.level - 1);
  restartCurrentGame();
});

dom.levelUp.addEventListener("click", () => {
  setLevel(appState.level + 1);
  restartCurrentGame();
});

restartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    startGame(button.dataset.game);
  });
});

dom.langToggle.addEventListener("click", () => {
  appState.locale = appState.locale === "zh" ? "en" : "zh";
  applyLanguageToStaticUI();
  restartCurrentGame();
});

window.addEventListener("beforeunload", () => {
  saveProgress();
  clearAllTimers();
});

const restoredProgress = loadProgress();
if (restoredProgress) {
  appState.currentGame = restoredProgress.currentGame;
  appState.difficultyIndex = restoredProgress.difficultyIndex;
  appState.level = restoredProgress.level;
  appState.locale = restoredProgress.locale;
}

applyLanguageToStaticUI();
updateSidebarState();
startGame(appState.currentGame);
