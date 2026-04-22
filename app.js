const palette = [
  ["#d8b16f", "#77a79d"],
  ["#6b5a87", "#2f625f"],
  ["#c47472", "#6aa37e"],
  ["#b8833e", "#596b7c"],
  ["#315f5c", "#d1a24e"],
  ["#d49c67", "#8a627f"],
  ["#596b7c", "#c89b4b"],
  ["#7f6a9d", "#4f8b85"],
  ["#5e86a6", "#d8b16f"],
  ["#2f4665", "#8b7899"]
];

const literatureRefs = [
  ["奥维德", "《变形记》", "万物改变形貌，却仍保存隐秘的灵魂。"],
  ["但丁", "《神曲》", "在迷途深处，一束微光会教人重新辨认方向。"],
  ["莎士比亚", "《暴风雨》", "风暴过去后，心会听见岛屿上的新音乐。"],
  ["歌德", "《浮士德》", "愿望若被看清，便不再只是诱惑。"],
  ["玛丽·雪莱", "《弗兰肯斯坦》", "创造之火需要温柔，也需要承担。"],
  ["简·奥斯汀", "《劝导》", "迟来的明白，仍能抵达真诚的岸边。"],
  ["艾米莉·勃朗特", "《呼啸山庄》", "旷野知道，人心有时比天气更辽阔。"],
  ["夏洛蒂·勃朗特", "《简·爱》", "独立的心，也渴望被平等地看见。"],
  ["狄更斯", "《远大前程》", "命运的门常在朴素的善意里打开。"],
  ["梅尔维尔", "《白鲸》", "深海不回答问题，却映出追问者的轮廓。"],
  ["托尔斯泰", "《安娜·卡列尼娜》", "每一颗心都有自己的秩序与风雪。"],
  ["陀思妥耶夫斯基", "《卡拉马佐夫兄弟》", "黑暗越深，人越需要替彼此守住烛火。"],
  ["雨果", "《悲惨世界》", "怜悯落在贫瘠之处，也能长出春天。"],
  ["塞万提斯", "《堂吉诃德》", "理想有时像旧盔甲，仍替灵魂挡风。"],
  ["乔治·艾略特", "《米德尔马契》", "细小的善念，会在无人处改变水流。"],
  ["荷马", "《奥德赛》", "归途漫长，星光仍认识归人。"],
  ["弗吉尼亚·伍尔夫", "《到灯塔去》", "潮声退去时，心中的房间忽然明亮。"],
  ["普鲁斯特", "《追忆似水年华》", "记忆像香气，轻轻一碰便打开旧日之门。"],
  ["赫尔曼·黑塞", "《悉达多》", "河流从不催促，却懂得所有抵达。"],
  ["纪伯伦", "《先知》", "爱并不占有，它只让生命更宽。"],
  ["泰戈尔", "《飞鸟集》", "天空没有留下痕迹，飞翔却已经发生。"],
  ["波德莱尔", "《恶之花》", "忧郁的花也会向光展开。"],
  ["里尔克", "《给青年诗人的信》", "请慢慢活进那些暂时没有答案的问题。"],
  ["王尔德", "《道林·格雷的画像》", "美若没有灵魂照看，也会成为镜中的迷宫。"],
  ["曹雪芹", "《红楼梦》", "繁华如梦，真心却在细微处显影。"],
  ["施耐庵", "《水浒传》", "风尘之中，义气有时就是人的灯。"]
];

const majorArcana = [
  ["愚者", "The Fool", "0", "开始", "信任", "冒险", "轻装出发，允许未知带路。", "犹豫和散漫让脚步失焦，先把边界找回来。"],
  ["魔术师", "The Magician", "I", "显化", "技巧", "意志", "资源已经在手边，关键是把念头落成动作。", "意志分散或表达失真，先校准真正想创造的事。"],
  ["女祭司", "The High Priestess", "II", "直觉", "静观", "秘密", "答案藏在安静里，少说一点会听见更多。", "过度封闭让直觉变成猜疑，需要温柔地求证。"],
  ["皇后", "The Empress", "III", "丰盛", "滋养", "创造", "照料自己，也是在照料正在成形的未来。", "给予过多会耗空自己，丰盛需要边界陪伴。"],
  ["皇帝", "The Emperor", "IV", "秩序", "责任", "结构", "建立规则会让能量有地方安放。", "控制欲可能遮住关怀，试着让秩序更有弹性。"],
  ["教皇", "The Hierophant", "V", "传统", "学习", "信念", "旧智慧正在提供一条可借力的路径。", "外在标准不必替你决定内心的信仰。"],
  ["恋人", "The Lovers", "VI", "选择", "连接", "诚实", "真正的选择会让你更靠近自己。", "关系里的摇摆提醒你重新辨认价值排序。"],
  ["战车", "The Chariot", "VII", "方向", "推进", "掌控", "把分散的力量收束，路会更清楚。", "急于前进可能带来拉扯，先确认方向一致。"],
  ["力量", "Strength", "VIII", "勇气", "耐心", "柔软", "温柔不是退让，而是稳定地陪伴内在野性。", "强撑会消耗勇气，真正的力量允许休息。"],
  ["隐者", "The Hermit", "IX", "独处", "洞察", "内省", "灯不必照亮全部，只要照见下一步。", "孤立并非清醒，适时让可信的人靠近。"],
  ["命运之轮", "Wheel of Fortune", "X", "转机", "循环", "顺势", "变化正在转动，旧答案开始松手。", "抗拒变化会放大无力感，先找回能选择的一小块。"],
  ["正义", "Justice", "XI", "平衡", "真相", "因果", "清晰地看见事实，就是修复的开始。", "苛责或偏见会让天平失准，给事实多一点空间。"],
  ["倒吊人", "The Hanged Man", "XII", "暂停", "换位", "臣服", "停下来不是失败，而是换一个角度理解命运。", "拖延若披着等待的外衣，需要被轻轻识破。"],
  ["死神", "Death", "XIII", "结束", "蜕变", "释放", "落叶不是消失，是把生命交还给下一个季节。", "害怕结束会困住新生，先放下一件不再适合的事。"],
  ["节制", "Temperance", "XIV", "调和", "疗愈", "流动", "两股水慢慢相融，心也会找到温度。", "失衡来自过度补偿，回到中间那条安静的路。"],
  ["恶魔", "The Devil", "XV", "束缚", "欲望", "觉察", "看见锁链的那一刻，自由已经开始。", "否认欲望会让它更暗，诚实面对才有选择。"],
  ["高塔", "The Tower", "XVI", "破局", "震动", "重建", "坍塌的部分，往往早已不再承重。", "余震让人不安，但新的结构正在等待被建立。"],
  ["星星", "The Star", "XVII", "希望", "疗愈", "清澈", "夜色越深，微光越懂得靠近。", "希望暂时微弱时，先照顾身体里的水与呼吸。"],
  ["月亮", "The Moon", "XVIII", "梦境", "情绪", "辨认", "迷雾不是阻拦，它只是让你慢一点走。", "不安会投下影子，等潮水退一点再下结论。"],
  ["太阳", "The Sun", "XIX", "喜悦", "清晰", "成长", "明亮的事物会把信心带回身体。", "过度乐观可能忽略细节，让快乐也保持清醒。"],
  ["审判", "Judgement", "XX", "召唤", "醒悟", "更新", "旧我听见钟声，新的名字正在出现。", "害怕回应召唤时，先原谅过去的迟疑。"],
  ["世界", "The World", "XXI", "完成", "整合", "开阔", "抵达不是终点，而是看见自己走过的圆。", "尚未收尾的细节需要被温柔整理，再继续向前。"]
];

const minorSuits = [
  ["权杖", "Wands", "火", "行动", "热情", "灵感"],
  ["圣杯", "Cups", "水", "情感", "关系", "接纳"],
  ["宝剑", "Swords", "风", "思考", "真相", "决断"],
  ["金币", "Pentacles", "土", "现实", "身体", "资源"]
];

const minorRanks = [
  ["王牌", "Ace", "萌芽", "一枚新的种子正在发光。", "种子需要土壤，而不是焦急的凝视。"],
  ["二", "Two", "选择", "两个方向都在邀请你辨认重心。", "摇摆过久会消耗清明，先选一小步。"],
  ["三", "Three", "协作", "有人与你同频，作品开始成形。", "合作若失衡，需要重新分配重量。"],
  ["四", "Four", "稳定", "稳固的空间让心有处安放。", "过度守成可能让流动停滞。"],
  ["五", "Five", "摩擦", "不适感正在指出需要调整的位置。", "别把暂时的困难误认为全部命运。"],
  ["六", "Six", "回馈", "给予与接受正在寻找更自然的比例。", "旧情或旧模式可能让你回头太久。"],
  ["七", "Seven", "评估", "耐心观察，果实还在枝头成熟。", "怀疑太多会削弱已经种下的努力。"],
  ["八", "Eight", "练习", "重复并不无聊，它正在磨亮手艺。", "忙碌若没有方向，会把人带离初心。"],
  ["九", "Nine", "成果", "你已经靠近一个值得珍惜的阶段。", "独享成果时，也别忘了补充真实连接。"],
  ["十", "Ten", "圆满", "一段经验抵达重量与收束。", "负担若过满，需要把不属于你的放下。"],
  ["侍从", "Page", "学习", "新消息带着年轻而敏锐的光。", "稚嫩不是错误，但需要更多倾听。"],
  ["骑士", "Knight", "推进", "能量开始移动，方向感变得重要。", "冲得太快时，先看清脚下的路。"],
  ["王后", "Queen", "承载", "成熟的感受力让周围变得安定。", "照顾别人之前，也请回到自己的杯中。"],
  ["国王", "King", "掌握", "你可以稳稳管理这一份力量。", "权威若少了柔软，容易变成距离。"]
];

const lenormandDefinitions = [
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
];

const spreadPositions = {
  3: ["过去", "现在", "未来"],
  5: ["现实", "潜意识", "阻碍", "目标", "结果"]
};

const dailyStorageKey = "oracle-daily-tarot-v2";
let currentSpread = 3;
let currentRating = 0;
let meditationSeconds = 300;
let meditationTimer = null;
let activeRituals = {};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function imagePrompt(deckType, cardName, cardEn, symbol) {
  const shared =
    "vertical collectible occult card, mysterious exotic classical luxury, intricate botanical vines, curled leaves, floral ornament, antique symmetrical border, ivory beige cream old paper matte texture, pale sand gold, sage green, olive green, muted rose, bronze accents, Persian Moroccan North African and old European decorative arts fusion, refined vintage print, clear central subject, no cartoon, no modern minimalism, no cyberpunk, no plastic, no watermark, no readable text";
  if (deckType === "lenormand") {
    return `Original Lenormand deck card: ${cardName} / ${cardEn}, central symbol must be ${symbol}, ${shared}.`;
  }
  return `Original Tarot deck card: ${cardName} / ${cardEn}, central tarot theme must be unmistakable, ${shared}.`;
}

function buildTarotDeck() {
  const majors = majorArcana.map((card, index) => {
    const ref = literatureRefs[index % literatureRefs.length];
    return {
      id: `tarot-major-${index}`,
      deck: "tarot",
      name: card[0],
      en: card[1],
      symbol: card[2],
      colors: palette[index % palette.length],
      keywords: [card[3], card[4], card[5]],
      upright: card[6],
      reversed: card[7],
      quote: ref[2],
      author: ref[0],
      book: ref[1],
      imagePrompt: imagePrompt("tarot", card[0], card[1], card[2])
    };
  });

  const minors = minorSuits.flatMap((suit, suitIndex) =>
    minorRanks.map((rank, rankIndex) => {
      const index = 22 + suitIndex * minorRanks.length + rankIndex;
      const ref = literatureRefs[index % literatureRefs.length];
      const zh = `${suit[0]}${rank[0]}`;
      const en = `${rank[1]} of ${suit[1]}`;
      return {
        id: `tarot-${slugify(suit[1])}-${rankIndex + 1}`,
        deck: "tarot",
        name: zh,
        en,
        symbol: suit[2],
        colors: palette[index % palette.length],
        keywords: [suit[3], suit[4], rank[2]],
        upright: `${suit[0]}的${rank[0]}把「${rank[2]}」带入${suit[3]}领域。${rank[3]}今天请把注意力放在${suit[5]}，让行动更贴近真实需要。`,
        reversed: `${suit[0]}的${rank[0]}逆位让${rank[2]}暂时变得不稳定。${rank[4]}给自己一点缓冲，再决定下一步。`,
        quote: ref[2],
        author: ref[0],
        book: ref[1],
        imagePrompt: imagePrompt("tarot", zh, en, suit[2])
      };
    })
  );

  return [...majors, ...minors];
}

const tarotCards = buildTarotDeck();

const lenormandCards = lenormandDefinitions.map((card, index) => ({
  id: `lenormand-${index + 1}`,
  deck: "lenormand",
  name: card[0],
  en: card[1],
  symbol: card[2],
  meaning: card[3],
  colors: palette[index % palette.length],
  imagePrompt: imagePrompt("lenormand", card[0], card[1], card[2])
}));

function seededNumber(seed) {
  let hash = 2166136261;
  for (const char of seed) {
    hash ^= char.charCodeAt(0);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function todayKey() {
  const today = new Date();
  return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
}

function shuffleDeck(deck, seed = `${Date.now()}-${Math.random()}`) {
  const result = [...deck];
  let random = seededNumber(seed);
  for (let i = result.length - 1; i > 0; i -= 1) {
    random = (Math.imul(random, 1664525) + 1013904223) >>> 0;
    const j = random % (i + 1);
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function pickRandom(items, count = 1) {
  return shuffleDeck(items).slice(0, count);
}

function setCardArt(element, card) {
  element.dataset.symbol = card.symbol;
  element.style.setProperty("--art-a", card.colors[0]);
  element.style.setProperty("--art-b", card.colors[1]);
  element.style.backgroundImage = card.imageUrl ? `url("${card.imageUrl}")` : "";
}

function cardInlineStyle(card) {
  const image = card.imageUrl ? `background-image:url('${card.imageUrl}');background-size:cover;background-position:center;` : "";
  return `--art-a:${card.colors[0]};--art-b:${card.colors[1]};${image}`;
}

function deckStackHtml(state) {
  return `<div class="deck-stack ritual-deck" data-role="circleDeck">
    <span></span><span></span><span></span><span></span><span></span>
    <canvas width="180" height="238"></canvas>
    <em>${state.circled ? "圆圈完成" : "在牌上画圈"}</em>
  </div>`;
}

function createRitual(container, options) {
  const state = {
    ...options,
    order: shuffleDeck(options.deck, `${options.type}-${todayKey()}-${Date.now()}`),
    selected: [],
    circled: false,
    shuffled: false,
    cut: false,
    startX: 0
  };
  activeRituals[options.type] = state;
  renderRitual(container, state);
}

function renderRitual(container, state) {
  const selectedCount = state.selected.length;
  const needCount = state.pickCount;
  const status =
    !state.circled ? "在牌堆上画一个圆圈" :
    !state.shuffled ? "圆圈已完成，请点击洗牌" :
    !state.cut ? "点击切牌，让牌堆一分为二" :
    selectedCount < needCount ? `请选择 ${needCount} 张牌，已选 ${selectedCount} 张` :
    "牌阵已经完成";

  container.classList.remove("hidden");
  container.innerHTML = `
    <div class="ritual-status">
      <p class="eyebrow">${state.label}</p>
      <h2>${status}</h2>
    </div>
    <div class="ritual-board ${state.circled ? "is-circled" : ""} ${state.shuffled ? "is-shuffled" : ""} ${state.cut ? "is-cut" : ""}">
      ${deckStackHtml(state)}
      <button class="ghost-action ritual-shuffle" type="button" data-role="shuffle" ${state.circled && !state.shuffled ? "" : "disabled"}>
        <span class="btn-icon shuffle-icon" aria-hidden="true"></span>
        <span>洗牌</span>
      </button>
      <button class="ghost-action ritual-cut ${state.shuffled && !state.cut ? "ready" : ""}" type="button" data-role="cut" ${state.shuffled && !state.cut ? "" : "disabled"}>
        <span class="btn-icon cut-icon" aria-hidden="true"></span>
        <span>切牌</span>
      </button>
    </div>
    <div class="fan-zone ${state.cut ? "show" : ""}">
      ${state.cut ? renderFan(state) : ""}
    </div>
  `;

  bindRitual(container, state);
}

function renderFan(state) {
  return state.order
    .map((card, index) => {
      const selected = state.selected.includes(card);
      const disabled = state.selected.length >= state.pickCount && !selected;
      return `
        <button class="fan-card ${selected ? "selected" : ""}" type="button" data-index="${index}" ${disabled ? "disabled" : ""} style="animation-delay:${Math.min(index, 24) * 18}ms">
          <span data-symbol="${card.symbol}" style="${cardInlineStyle(card)}"></span>
          <strong>${selected ? card.name : ""}</strong>
        </button>
      `;
    })
    .join("");
}

function bindRitual(container, state) {
  const board = container.querySelector(".ritual-board");
  const circleDeck = container.querySelector("[data-role='circleDeck']");
  const canvas = circleDeck.querySelector("canvas");
  const ctx = canvas.getContext("2d");
  let drawing = false;
  let points = [];

  function pointFromEvent(event) {
    const rect = canvas.getBoundingClientRect();
    const touch = event.touches?.[0] || event.changedTouches?.[0] || event;
    return {
      x: ((touch.clientX - rect.left) / rect.width) * canvas.width,
      y: ((touch.clientY - rect.top) / rect.height) * canvas.height
    };
  }

  function drawLine(point) {
    ctx.lineWidth = 6;
    ctx.lineCap = "round";
    ctx.strokeStyle = "rgba(255, 249, 237, 0.92)";
    ctx.shadowColor = "rgba(200, 155, 75, 0.6)";
    ctx.shadowBlur = 8;
    if (points.length === 1) {
      ctx.beginPath();
      ctx.moveTo(point.x, point.y);
    } else {
      ctx.lineTo(point.x, point.y);
      ctx.stroke();
    }
  }

  function testCircle() {
    if (points.length < 12) return false;
    const xs = points.map((point) => point.x);
    const ys = points.map((point) => point.y);
    const width = Math.max(...xs) - Math.min(...xs);
    const height = Math.max(...ys) - Math.min(...ys);
    const first = points[0];
    const last = points[points.length - 1];
    const close = Math.hypot(first.x - last.x, first.y - last.y) < 82;
    const path = points.slice(1).reduce((sum, point, index) => sum + Math.hypot(point.x - points[index].x, point.y - points[index].y), 0);
    return close && width > 52 && height > 52 && path > 175;
  }

  circleDeck.addEventListener("pointerdown", (event) => {
    if (state.circled) return;
    drawing = true;
    points = [];
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const point = pointFromEvent(event);
    points.push(point);
    drawLine(point);
    circleDeck.setPointerCapture(event.pointerId);
  });

  circleDeck.addEventListener("pointermove", (event) => {
    if (!drawing || state.circled) return;
    event.preventDefault();
    const point = pointFromEvent(event);
    points.push(point);
    drawLine(point);
  });

  circleDeck.addEventListener("pointerup", () => {
    if (!drawing || state.circled) return;
    drawing = false;
    if (testCircle()) {
      state.circled = true;
      renderRitual(container, state);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  });

  container.querySelector("[data-role='shuffle']").addEventListener("click", () => {
    if (!state.circled || state.shuffled) return;
    state.shuffled = true;
    state.order = shuffleDeck(state.order, `${state.type}-shuffle-${Date.now()}`);
    board.classList.add("shuffling");
    window.setTimeout(() => renderRitual(container, state), 760);
  });

  container.querySelector("[data-role='cut']").addEventListener("click", () => {
    if (!state.shuffled || state.cut) return;
    const half = Math.floor(state.order.length / 2);
    state.order = [...state.order.slice(half), ...state.order.slice(0, half)];
    state.cut = true;
    board.classList.add("cutting");
    window.setTimeout(() => renderRitual(container, state), 560);
  });

  container.querySelectorAll(".fan-card").forEach((button) => {
    button.addEventListener("click", () => {
      const card = state.order[Number(button.dataset.index)];
      if (!card || state.selected.includes(card) || state.selected.length >= state.pickCount) return;
      state.selected.push(card);
      if (state.selected.length === state.pickCount) {
        state.onComplete(state.selected);
      }
      renderRitual(container, state);
    });
  });
}

function readDailyTarot() {
  try {
    const stored = JSON.parse(localStorage.getItem(dailyStorageKey) || "null");
    if (!stored || stored.date !== todayKey()) return null;
    const card = tarotCards.find((item) => item.id === stored.cardId);
    return card ? { card, reversed: stored.reversed } : null;
  } catch {
    return null;
  }
}

function revealDailyTarot(card, reversed, persist = true) {
  const tarotCard = $("#dailyTarotCard");
  tarotCard.classList.remove("revealed", "is-reversed");

  window.setTimeout(() => {
    setCardArt($("#tarotVisual"), card);
    tarotCard.classList.toggle("is-reversed", reversed);
    $("#tarotName").textContent = `${card.name}${reversed ? " 逆位" : " 正位"}`;
    $("#tarotEn").textContent = card.en;
    $("#tarotQuote").textContent = `“${card.quote}”`;
    $("#tarotSource").textContent = `文学灵感：${card.author} · ${card.book}`;
    $("#tarotMeaning").textContent = reversed ? card.reversed : card.upright;
    $("#tarotKeywords").innerHTML = card.keywords.map((keyword) => `<span>${keyword}</span>`).join("");
    $("#tarotReading").classList.remove("hidden");
    tarotCard.classList.add("revealed");
    const button = $("#drawTarotBtn");
    button.disabled = true;
    button.querySelector("span:last-child").textContent = "今日牌面已显现";
    if (persist) {
      localStorage.setItem(dailyStorageKey, JSON.stringify({ date: todayKey(), cardId: card.id, reversed }));
    }
  }, 160);
}

function startDailyTarot() {
  const stored = readDailyTarot();
  if (stored) {
    revealDailyTarot(stored.card, stored.reversed, false);
    return;
  }
  $("#tarotReading").classList.add("hidden");
  const order = shuffleDeck(tarotCards, `daily-${todayKey()}`);
  const card = order[0];
  const reversed = seededNumber(`${todayKey()}-${card.id}`) % 2 === 1;
  revealDailyTarot(card, reversed);
}

function renderSpread(cards) {
  const grid = $("#spreadGrid");
  grid.className = `spread-grid ${currentSpread === 5 ? "five" : ""}`;
  grid.innerHTML = cards
    .map((card, index) => {
      const position = spreadPositions[currentSpread][index];
      return `
        <article class="mini-card" style="animation-delay:${index * 70}ms">
          <div class="mini-face" data-symbol="${card.symbol}" style="${cardInlineStyle(card)}"></div>
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
  return `你亲手选出的牌是「${names}」。${first.name}像一封刚抵达的信，带着${first.meaning}；${center.name}让这组牌的心跳落在${center.meaning}上；${last.name}则把故事轻轻推向${last.meaning}。这不是一个僵硬的是或否，更像一盏低亮度的灯：请先照见你真正牵挂的地方，再选择让身体更放松、让心更诚实的那一步。`;
}

function startLenormand() {
  $("#lenormandResult").classList.add("hidden");
  $("#spreadGrid").innerHTML = "";
  createRitual($("#lenormandRitual"), {
    type: "lenormand",
    label: `${currentSpread} 张雷诺曼牌阵`,
    deck: lenormandCards,
    pickCount: currentSpread,
    onComplete: (cards) => {
      renderSpread(cards);
      $("#aiReading").textContent = makeAiReading(cards);
      $("#lenormandResult").classList.remove("hidden");
      currentRating = 0;
      paintStars();
    }
  });
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
  $("#drawTarotBtn").addEventListener("click", startDailyTarot);
  $("#startLenormandBtn").addEventListener("click", startLenormand);
  $("#meditationToggle").addEventListener("click", toggleMeditation);

  $$(".bottom-nav button").forEach((button) => {
    button.addEventListener("click", () => switchScreen(button.dataset.target));
  });

  $$(".segmented button").forEach((button) => {
    button.addEventListener("click", () => {
      currentSpread = Number(button.dataset.spread);
      $$(".segmented button").forEach((item) => item.classList.toggle("active", item === button));
      if (!$("#lenormandRitual").classList.contains("hidden")) startLenormand();
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
  if (dailyCard) revealDailyTarot(dailyCard.card, dailyCard.reversed, false);
  console.info(`Tarot cards: ${tarotCards.length}; Lenormand cards: ${lenormandCards.length}`);
}

init();
