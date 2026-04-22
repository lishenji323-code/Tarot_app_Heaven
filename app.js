const tarotCards = [
  {
    name: "愚者",
    en: "The Fool",
    symbol: "0",
    colors: ["#d8b16f", "#77a79d"],
    quote: "风从远处来，也把新的路带到脚边。",
    meaning: "今天适合把心放轻一点。你不必马上知道所有答案，先允许自己迈出温和的一步，路会在行动里变得清楚。",
    keywords: ["开始", "信任", "流动"]
  },
  {
    name: "女祭司",
    en: "The High Priestess",
    symbol: "II",
    colors: ["#6b5a87", "#2f625f"],
    quote: "沉默并不空白，它常常藏着最准确的潮汐。",
    meaning: "你正在靠近一个更细腻的答案。少一点解释，多一点感受，直觉会替你筛掉过于喧闹的部分。",
    keywords: ["直觉", "静观", "秘密"]
  },
  {
    name: "皇后",
    en: "The Empress",
    symbol: "III",
    colors: ["#c47472", "#6aa37e"],
    quote: "万物在被照料时，都会慢慢显出自己的光。",
    meaning: "今天把注意力放回滋养本身。照顾身体、空间和情绪，也是在替未来的果实松土。",
    keywords: ["丰盛", "滋养", "创造"]
  },
  {
    name: "恋人",
    en: "The Lovers",
    symbol: "VI",
    colors: ["#b8833e", "#c47472"],
    quote: "真正的选择，往往会让心更靠近诚实。",
    meaning: "关系与决定都在提醒你回到内心的价值。无需讨好所有方向，只要听见你真正愿意守护什么。",
    keywords: ["选择", "连接", "诚实"]
  },
  {
    name: "战车",
    en: "The Chariot",
    symbol: "VII",
    colors: ["#315f5c", "#d1a24e"],
    quote: "当目光安定，前路便不再只是风。",
    meaning: "能量正在聚拢。把分散的念头收回来，给今天一个明确的重点，你会比想象中更有推进力。",
    keywords: ["推进", "掌控", "方向"]
  },
  {
    name: "力量",
    en: "Strength",
    symbol: "VIII",
    colors: ["#d49c67", "#8a627f"],
    quote: "温柔不是退让，而是知道如何不伤害自己。",
    meaning: "你不需要用紧绷证明坚强。缓慢、耐心和自我安抚，会让你更稳地穿过眼前的事。",
    keywords: ["勇气", "耐心", "柔软"]
  },
  {
    name: "隐士",
    en: "The Hermit",
    symbol: "IX",
    colors: ["#596b7c", "#c89b4b"],
    quote: "灯不必照亮全部，只要照见下一步。",
    meaning: "今天适合减少外界噪音。独处并非疏离，而是让你重新听清自己微弱但真实的声音。",
    keywords: ["独处", "洞察", "内省"]
  },
  {
    name: "命运之轮",
    en: "Wheel of Fortune",
    symbol: "X",
    colors: ["#7f6a9d", "#4f8b85"],
    quote: "变化来临时，旧答案会松开手。",
    meaning: "某个循环正在转动。与其执着控制，不如观察机会如何浮现，并在恰当处轻轻推一把。",
    keywords: ["转机", "循环", "顺势"]
  },
  {
    name: "星星",
    en: "The Star",
    symbol: "XVII",
    colors: ["#5e86a6", "#d8b16f"],
    quote: "夜色越深，微光越懂得靠近。",
    meaning: "这是修复与希望的一天。把期待放得柔软些，给自己补水、休息，也给梦想留一扇窗。",
    keywords: ["希望", "疗愈", "清澈"]
  },
  {
    name: "月亮",
    en: "The Moon",
    symbol: "XVIII",
    colors: ["#2f4665", "#8b7899"],
    quote: "迷雾不是阻拦，它只是让你慢一点走。",
    meaning: "今天不要急着下结论。情绪可能放大细节，先安顿身体，再辨认哪些是真相，哪些只是担心。",
    keywords: ["梦境", "情绪", "辨认"]
  },
  {
    name: "太阳",
    en: "The Sun",
    symbol: "XIX",
    colors: ["#e0aa48", "#6aa37e"],
    quote: "明亮的事物，总会把影子带到可以被拥抱的地方。",
    meaning: "能见度正在提高。适合表达、协作和完成一件让你开心的小事，喜悦会把信心带回来。",
    keywords: ["清晰", "喜悦", "成长"]
  },
  {
    name: "世界",
    en: "The World",
    symbol: "XXI",
    colors: ["#4f8b85", "#8f6d4f"],
    quote: "抵达不是终点，而是终于看见自己走过的圆。",
    meaning: "某件事进入整合阶段。回头看看你已经完成的部分，认可它，然后带着更完整的自己继续向前。",
    keywords: ["完成", "整合", "开阔"]
  }
];

const lenormandCards = [
  ["骑士", "Rider", "♞", "消息与抵达"],
  ["三叶草", "Clover", "♣", "轻盈的好运"],
  ["船", "Ship", "≈", "远方与移动"],
  ["房子", "House", "⌂", "安全与根基"],
  ["树", "Tree", "♁", "生长与身心"],
  ["云", "Clouds", "☁", "不确定与遮蔽"],
  ["蛇", "Snake", "S", "迂回与诱惑"],
  ["棺材", "Coffin", "□", "结束与释放"],
  ["花束", "Bouquet", "✦", "礼物与欣赏"],
  ["镰刀", "Scythe", "⌒", "切断与决断"],
  ["鞭子", "Whip", "∿", "重复与摩擦"],
  ["鸟", "Birds", "V", "对话与焦虑"],
  ["孩子", "Child", "○", "新鲜与单纯"],
  ["狐狸", "Fox", "◇", "警觉与策略"],
  ["熊", "Bear", "▲", "力量与保护"],
  ["星星", "Stars", "✶", "愿景与指引"],
  ["鹳", "Stork", "⌁", "转变与迁移"],
  ["狗", "Dog", "●", "陪伴与忠诚"],
  ["塔", "Tower", "▥", "边界与系统"],
  ["花园", "Garden", "✿", "社交与公开"],
  ["山", "Mountain", "△", "阻碍与距离"],
  ["路", "Crossroads", "Y", "选择与分岔"],
  ["老鼠", "Mice", "⋯", "消耗与细碎"],
  ["心", "Heart", "♡", "情感与柔软"],
  ["戒指", "Ring", "◎", "承诺与循环"],
  ["书", "Book", "▤", "知识与未知"],
  ["信", "Letter", "✉", "文字与通知"],
  ["男人", "Man", "♂", "阳性能量"],
  ["女人", "Woman", "♀", "阴性能量"],
  ["百合", "Lily", "⚜", "成熟与平和"],
  ["太阳", "Sun", "☼", "明朗与成功"],
  ["月亮", "Moon", "☾", "感受与声望"],
  ["钥匙", "Key", "⚿", "答案与开启"],
  ["鱼", "Fish", "≋", "流通与资源"],
  ["锚", "Anchor", "⌖", "稳定与停泊"],
  ["十字架", "Cross", "✚", "责任与信念"]
].map((card, index) => ({
  id: index + 1,
  name: card[0],
  en: card[1],
  symbol: card[2],
  meaning: card[3],
  colors: [
    ["#c47472", "#4f8b85"],
    ["#b8833e", "#596b7c"],
    ["#6b5a87", "#d8b16f"],
    ["#315f5c", "#c9786c"],
    ["#5e86a6", "#8f6d4f"]
  ][index % 5]
}));

const spreadPositions = {
  3: ["过去", "现在", "未来"],
  5: ["现实", "潜意识", "阻碍", "目标", "结果"]
};

let currentSpread = 3;
let currentRating = 0;
let meditationSeconds = 300;
let meditationTimer = null;
const dailyStorageKey = "oracle-daily-tarot";

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function pickRandom(items, count = 1) {
  const pool = [...items];
  const result = [];
  while (result.length < count && pool.length) {
    const index = Math.floor(Math.random() * pool.length);
    result.push(pool.splice(index, 1)[0]);
  }
  return count === 1 ? result[0] : result;
}

function seededDailyIndex() {
  const today = new Date();
  const key = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
  let hash = 0;
  for (const char of key) hash = (hash * 31 + char.charCodeAt(0)) >>> 0;
  return hash % tarotCards.length;
}

function setCardArt(element, card) {
  element.dataset.symbol = card.symbol;
  element.style.setProperty("--art-a", card.colors[0]);
  element.style.setProperty("--art-b", card.colors[1]);
}

function todayKey() {
  const today = new Date();
  return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
}

function revealDailyTarot(card, persist = true) {
  const tarotCard = $("#dailyTarotCard");
  tarotCard.classList.remove("revealed");

  window.setTimeout(() => {
    setCardArt($("#tarotVisual"), card);
    $("#tarotName").textContent = card.name;
    $("#tarotEn").textContent = card.en;
    $("#tarotQuote").textContent = `“${card.quote}”`;
    $("#tarotMeaning").textContent = card.meaning;
    $("#tarotKeywords").innerHTML = card.keywords.map((keyword) => `<span>${keyword}</span>`).join("");
    $("#tarotReading").classList.remove("hidden");
    tarotCard.classList.add("revealed");
    const button = $("#drawTarotBtn");
    button.disabled = true;
    button.querySelector("span:last-child").textContent = "今日牌面已显现";
    if (persist) {
      localStorage.setItem(dailyStorageKey, JSON.stringify({ date: todayKey(), index: tarotCards.indexOf(card) }));
    }
  }, 160);
}

function drawDailyTarot() {
  const stored = readDailyTarot();
  if (stored) {
    revealDailyTarot(stored, false);
    return;
  }
  revealDailyTarot(tarotCards[seededDailyIndex()]);
}

function readDailyTarot() {
  try {
    const stored = JSON.parse(localStorage.getItem(dailyStorageKey) || "null");
    if (!stored || stored.date !== todayKey()) return null;
    return tarotCards[stored.index] || null;
  } catch {
    return null;
  }
}

function renderSpread(cards) {
  const grid = $("#spreadGrid");
  grid.className = `spread-grid ${currentSpread === 5 ? "five" : ""}`;
  grid.innerHTML = cards
    .map((card, index) => {
      const position = spreadPositions[currentSpread][index];
      return `
        <article class="mini-card" style="animation-delay:${index * 70}ms">
          <div class="mini-face" data-symbol="${card.symbol}" style="--art-a:${card.colors[0]};--art-b:${card.colors[1]}"></div>
          <p>${position}</p>
          <strong>${card.name}</strong>
        </article>
      `;
    })
    .join("");
}

function makeAiReading(cards) {
  const names = cards.map((card) => card.name).join("、");
  const first = cards[0];
  const center = cards[Math.floor(cards.length / 2)];
  const last = cards[cards.length - 1];
  const spreadName = currentSpread === 3 ? "过去、现在、未来" : "现实、潜意识、阻碍、目标、结果";
  $("#spreadTitle").textContent = spreadName;
  return `这组牌以「${names}」展开，像一条很轻的线索：${first.name}带来${first.meaning}，让你看见事情最初的气息；${center.name}提醒你把注意力放在${center.meaning}上，不必急着把感受压成结论；${last.name}则把能量慢慢落向${last.meaning}。如果今天心里有疑问，可以先选择一个让身体放松的方向，答案会在更安静的时候变得柔和而清楚。`;
}

function shuffleLenormand() {
  const deck = $("#deckStack");
  deck.classList.add("shuffling");
  $("#lenormandResult").classList.add("hidden");
  $("#spreadGrid").innerHTML = "";
  window.setTimeout(() => {
    const cards = pickRandom(lenormandCards, currentSpread);
    renderSpread(cards);
    $("#aiReading").textContent = makeAiReading(cards);
    $("#lenormandResult").classList.remove("hidden");
    currentRating = 0;
    paintStars();
    deck.classList.remove("shuffling");
  }, 640);
}

function paintStars() {
  const stars = $("#ratingStars");
  stars.innerHTML = Array.from({ length: 10 }, (_, index) => {
    const value = (index + 1) / 2;
    const active = value <= currentRating ? "active" : "";
    return `<button class="star-half ${active}" type="button" data-value="${value}" aria-label="${value}星">★</button>`;
  }).join("");
  $("#ratingValue").textContent = currentRating ? `${currentRating.toFixed(1)} 星` : "未评分";
}

function setMeditationTheme() {
  const hour = new Date().getHours();
  const bg = $("#meditationBg");
  const label = $("#timeTheme");
  const themes = ["sunrise", "day", "dusk", "night"];
  bg.classList.remove(...themes);

  if (hour >= 5 && hour < 9) {
    bg.classList.add("sunrise");
    label.textContent = "晨曦冥想";
  } else if (hour >= 9 && hour < 17) {
    bg.classList.add("day");
    label.textContent = "日间冥想";
  } else if (hour >= 17 && hour < 20) {
    bg.classList.add("dusk");
    label.textContent = "黄昏冥想";
  } else {
    bg.classList.add("night");
    label.textContent = "夜间冥想";
  }
}

function updateTimer() {
  const minutes = String(Math.floor(meditationSeconds / 60)).padStart(2, "0");
  const seconds = String(meditationSeconds % 60).padStart(2, "0");
  const progress = ((300 - meditationSeconds) / 300) * 360;
  $("#timerText").textContent = `${minutes}:${seconds}`;
  $("#timerRing").style.setProperty("--progress", `${progress}deg`);
  $("#breathCue").textContent = meditationSeconds % 8 >= 4 ? "呼气" : "吸气";
}

function toggleMeditation() {
  const button = $("#meditationToggle");
  const icon = button.querySelector(".btn-icon");
  const label = button.querySelector("span:last-child");

  if (meditationTimer) {
    window.clearInterval(meditationTimer);
    meditationTimer = null;
    icon.className = "btn-icon play-icon";
    label.textContent = "继续";
    return;
  }

  icon.className = "btn-icon pause-icon";
  label.textContent = "暂停";
  meditationTimer = window.setInterval(() => {
    meditationSeconds = Math.max(0, meditationSeconds - 1);
    updateTimer();
    if (meditationSeconds === 0) {
      window.clearInterval(meditationTimer);
      meditationTimer = null;
      meditationSeconds = 300;
      icon.className = "btn-icon play-icon";
      label.textContent = "再次开始";
      updateTimer();
    }
  }, 1000);
}

function switchScreen(target) {
  $$(".app-screen").forEach((screen) => {
    screen.classList.toggle("active", screen.dataset.screen === target);
  });
  $$(".bottom-nav button").forEach((button) => {
    button.classList.toggle("active", button.dataset.target === target);
  });
}

function bindEvents() {
  $("#drawTarotBtn").addEventListener("click", drawDailyTarot);
  $("#shuffleBtn").addEventListener("click", shuffleLenormand);
  $("#meditationToggle").addEventListener("click", toggleMeditation);

  $$(".bottom-nav button").forEach((button) => {
    button.addEventListener("click", () => switchScreen(button.dataset.target));
  });

  $$(".segmented button").forEach((button) => {
    button.addEventListener("click", () => {
      currentSpread = Number(button.dataset.spread);
      $$(".segmented button").forEach((item) => item.classList.toggle("active", item === button));
      shuffleLenormand();
    });
  });

  $("#ratingStars").addEventListener("click", (event) => {
    const target = event.target.closest(".star-half");
    if (!target) return;
    currentRating = Number(target.dataset.value);
    paintStars();
  });
}

function init() {
  bindEvents();
  setMeditationTheme();
  updateTimer();
  paintStars();
  const dailyCard = readDailyTarot();
  if (dailyCard) revealDailyTarot(dailyCard, false);
  shuffleLenormand();
}

init();
