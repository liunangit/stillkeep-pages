const translations = {
  "zh-Hans": {
    brandName: "留物",
    navPrivacy: "隐私政策",
    navSupport: "技术支持",
    footer: "© 2026 留物。保留所有权利。",
    homeEyebrow: "HarmonyOS 原生应用",
    homeTitle: "留物",
    homeLead: "把真正拥有的东西安静地记录下来，也把想买的东西先放一放。",
    homeLearnAction: "了解功能",
    homeScreensAction: "查看界面",
    featuresTitle: "看清拥有，冷静想买。",
    featureInventoryTitle: "清爽的物品清单",
    featureInventoryBody: "记录名称、分类、价格、日期、照片和喜爱评分，不把生活变成表格。",
    featureWishlistTitle: "更冷静的想买清单",
    featureWishlistBody: "把想买的东西先放下来，等冲动退去后再决定。",
    featureStatsTitle: "看得见的持有成本",
    featureStatsBody: "查看日均成本、分类分布和那些仍然值得留下的物品。",
    screensTitle: "安静，但信息清楚。",
    introEyebrow: "HarmonyOS",
    introTitle: "为鸿蒙设备重新实现。",
    introBody: "保持留物的安静、清晰和克制。数据导入导出与 iOS 版兼容，适合在不同设备之间继续整理自己的物品。"
  },
  en: {
    brandName: "Stillkeep",
    navPrivacy: "Privacy",
    navSupport: "Support",
    footer: "© 2026 Stillkeep. All rights reserved.",
    homeEyebrow: "Native HarmonyOS app",
    homeTitle: "Stillkeep",
    homeLead: "A quiet place to record what you truly own, and to let future purchases wait.",
    homeLearnAction: "Explore features",
    homeScreensAction: "View interface",
    featuresTitle: "Own clearly. Buy calmly.",
    featureInventoryTitle: "A readable inventory",
    featureInventoryBody: "Record names, categories, prices, dates, photos, and favorite ratings without turning life into a spreadsheet.",
    featureWishlistTitle: "A calmer wishlist",
    featureWishlistBody: "Put potential purchases aside first, then decide after the urgency fades.",
    featureStatsTitle: "Costs you can feel",
    featureStatsBody: "Review daily cost, category distribution, and the items that still earn their place.",
    screensTitle: "Quiet, clear, and useful.",
    introEyebrow: "HarmonyOS",
    introTitle: "Rebuilt for HarmonyOS devices.",
    introBody: "The HarmonyOS version keeps Stillkeep calm, clear, and restrained. Import and export remain compatible with the iOS backup format."
  },
  ja: {
    brandName: "持ちもの帖",
    navPrivacy: "プライバシー",
    navSupport: "サポート",
    footer: "© 2026 持ちもの帖。All rights reserved.",
    homeEyebrow: "HarmonyOS ネイティブアプリ",
    homeTitle: "持ちもの帖",
    homeLead: "本当に持っている物を静かに記録し、これから買いたい物を一度置いて考えるための場所です。",
    homeLearnAction: "機能を見る",
    homeScreensAction: "画面を見る",
    featuresTitle: "持ち物を見つめ、買い物を落ち着いて。",
    featureInventoryTitle: "読みやすい持ち物リスト",
    featureInventoryBody: "名前、カテゴリ、価格、日付、写真、評価を、生活を表計算にせず記録できます。",
    featureWishlistTitle: "落ち着いて考える欲しい物リスト",
    featureWishlistBody: "欲しい物を一度置き、急がずに購入を判断できます。",
    featureStatsTitle: "実感できる持有コスト",
    featureStatsBody: "日平均コスト、カテゴリ分布、残す価値のある物を確認できます。",
    screensTitle: "静かで、見やすく、使いやすく。",
    introEyebrow: "HarmonyOS",
    introTitle: "HarmonyOS 端末向けに再実装。",
    introBody: "持ちもの帖の静かで明快な使い心地を保ちながら、iOS 版のバックアップ形式と互換性のあるインポート・エクスポートに対応します。"
  }
};

const langAliases = {
  zh: "zh-Hans",
  "zh-CN": "zh-Hans",
  "zh-SG": "zh-Hans",
  "zh-Hans": "zh-Hans",
  ja: "ja",
  "ja-JP": "ja",
  en: "en"
};

const screenshotAssets = {
  "zh-Hans": {
    items: {
      mobile: "../assets/screenshots/iphone-items-full-540.webp",
      desktop: "../assets/screenshots/iphone-items-full-900.webp",
      fallback: "../assets/screenshots/iphone-items-full.png"
    },
    wishlist: {
      mobile: "../assets/screenshots/iphone-wishlist-full-540.webp",
      desktop: "../assets/screenshots/iphone-wishlist-full-900.webp",
      fallback: "../assets/screenshots/iphone-wishlist-full.png"
    },
    stats: {
      mobile: "../assets/screenshots/iphone-stats-full-540.webp",
      desktop: "../assets/screenshots/iphone-stats-full-900.webp",
      fallback: "../assets/screenshots/iphone-stats-full.png"
    }
  },
  en: {
    items: {
      mobile: "../assets/screenshots/iphone-items-en-full-540.webp",
      desktop: "../assets/screenshots/iphone-items-en-full-900.webp",
      fallback: "../assets/screenshots/iphone-items-en-full.png"
    },
    wishlist: {
      mobile: "../assets/screenshots/iphone-wishlist-en-full-540.webp",
      desktop: "../assets/screenshots/iphone-wishlist-en-full-900.webp",
      fallback: "../assets/screenshots/iphone-wishlist-en-full.png"
    },
    stats: {
      mobile: "../assets/screenshots/iphone-stats-en-full-540.webp",
      desktop: "../assets/screenshots/iphone-stats-en-full-900.webp",
      fallback: "../assets/screenshots/iphone-stats-en-full.png"
    }
  },
  ja: {
    items: {
      mobile: "../assets/screenshots/iphone-items-ja-full-540.webp",
      desktop: "../assets/screenshots/iphone-items-ja-full-900.webp",
      fallback: "../assets/screenshots/iphone-items-ja-full.png"
    },
    wishlist: {
      mobile: "../assets/screenshots/iphone-wishlist-ja-full-540.webp",
      desktop: "../assets/screenshots/iphone-wishlist-ja-full-900.webp",
      fallback: "../assets/screenshots/iphone-wishlist-ja-full.png"
    },
    stats: {
      mobile: "../assets/screenshots/iphone-stats-ja-full-540.webp",
      desktop: "../assets/screenshots/iphone-stats-ja-full-900.webp",
      fallback: "../assets/screenshots/iphone-stats-ja-full.png"
    }
  }
};

function resolveLanguage() {
  const saved = localStorage.getItem("stillkeep-language");
  if (saved && translations[saved]) return saved;

  for (const language of navigator.languages || [navigator.language]) {
    if (!language) continue;
    if (langAliases[language]) return langAliases[language];
    const base = language.split("-")[0];
    if (langAliases[base]) return langAliases[base];
  }
  return "zh-Hans";
}

function applyScreenshots(lang) {
  const assets = screenshotAssets[lang] || screenshotAssets["zh-Hans"];

  for (const picture of document.querySelectorAll("[data-screenshot]")) {
    const key = picture.getAttribute("data-screenshot");
    const imageSet = assets[key];
    if (!imageSet) continue;

    const mobileSource = picture.querySelector("source[data-size='mobile']");
    const desktopSource = picture.querySelector("source[data-size='desktop']");
    const image = picture.querySelector("img");

    if (mobileSource) mobileSource.srcset = imageSet.mobile;
    if (desktopSource) desktopSource.srcset = imageSet.desktop;
    if (image) image.src = imageSet.fallback;
  }
}

function applyLanguage(lang) {
  const dictionary = translations[lang] || translations["zh-Hans"];
  document.documentElement.lang = lang === "zh-Hans" ? "zh-Hans" : lang;

  for (const element of document.querySelectorAll("[data-i18n]")) {
    const key = element.getAttribute("data-i18n");
    if (dictionary[key]) element.textContent = dictionary[key];
  }

  for (const button of document.querySelectorAll("[data-lang]")) {
    const isSelected = button.getAttribute("data-lang") === lang;
    button.setAttribute("aria-pressed", String(isSelected));
  }

  applyScreenshots(lang);
}

for (const button of document.querySelectorAll("[data-lang]")) {
  button.addEventListener("click", () => {
    const lang = button.getAttribute("data-lang");
    localStorage.setItem("stillkeep-language", lang);
    applyLanguage(lang);
  });
}

applyLanguage(resolveLanguage());
