# 卡牌图片生成说明

当前原型已经为每张塔罗牌和雷诺曼牌生成了统一风格的 `imagePrompt` 字段，位置在 `app.js`：

- 塔罗：`tarotCards`，共 78 张，含大阿尔卡那与小阿尔卡那。
- 雷诺曼：`lenormandCards`，共 36 张。

## 视觉系统

生成图片时应使用同一套视觉语言：

- 竖版收藏级神秘学卡牌。
- 米色、象牙白、奶油色、浅沙金、旧纸色为主。
- 少量鼠尾草绿、橄榄绿、暗玫瑰色、陶土粉、古铜金点缀。
- 复杂植物藤蔓、卷叶、花卉、描金边框、古董纹饰。
- 中东、波斯、摩洛哥、北非与古欧洲装饰艺术融合。
- 高级哑光纸张、复古印刷、细腻做旧、压印纹理。
- 中央主题必须清楚易辨识，外圈装饰繁复但不杂乱。

## 避免项

不要 Q 版，不要卡通，不要现代扁平化，不要儿童绘本风，不要塑料感，不要赛博风，不要廉价金属质感，不要过度艳丽，不要低幼风，不要水印。

## 建议文件结构

```text
assets/
  tarot/
    tarot-major-0.png
    tarot-major-1.png
    ...
    tarot-pentacles-14.png
  lenormand/
    lenormand-1.png
    lenormand-2.png
    ...
    lenormand-36.png
```

## 接入方式

图片生成完成后，可为每张牌补充：

```js
imageUrl: "assets/tarot/tarot-major-0.png"
```

或：

```js
imageUrl: "assets/lenormand/lenormand-1.png"
```

当前页面先使用 CSS 风格化牌面作为占位，不会阻塞交互体验。正式图片生成后，只需要在 `setCardArt`、`renderFan`、`renderSpread` 中优先读取 `imageUrl` 即可完成替换。
