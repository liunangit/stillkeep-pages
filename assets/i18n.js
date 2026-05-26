const translations = {
  "zh-Hans": {
    brandName: "留物",
    navPrivacy: "隐私政策",
    navSupport: "技术支持",
    footer: "© 2026 留物。保留所有权利。",
    homeEyebrow: "App 信息",
    homeTitle: "留物",
    homeLead: "一款轻量的个人物品记录工具，帮助你看清真正拥有的东西，也把想买的东西先放一放。",
    homePrivacyAction: "查看隐私政策",
    homeSupportAction: "获取技术支持",
    privacyEyebrow: "隐私政策",
    privacyTitle: "隐私政策",
    privacyUpdated: "最后更新：2026 年 5 月 26 日",
    supportEyebrow: "技术支持",
    supportTitle: "技术支持",
    supportLead: "关于留物的使用帮助、数据说明和联系方式。"
  },
  en: {
    brandName: "Stillkeep",
    navPrivacy: "Privacy",
    navSupport: "Support",
    footer: "© 2026 Stillkeep. All rights reserved.",
    homeEyebrow: "App information",
    homeTitle: "Stillkeep",
    homeLead: "A calm personal inventory app for tracking what you own and what you are thinking about buying.",
    homePrivacyAction: "View Privacy Policy",
    homeSupportAction: "Get Support",
    privacyEyebrow: "Privacy Policy",
    privacyTitle: "Privacy Policy",
    privacyUpdated: "Last updated: May 26, 2026",
    supportEyebrow: "Support",
    supportTitle: "Technical Support",
    supportLead: "Help for using Stillkeep, understanding data handling, and contacting the developer."
  },
  ja: {
    brandName: "持ちもの帖",
    navPrivacy: "プライバシー",
    navSupport: "サポート",
    footer: "© 2026 持ちもの帖。All rights reserved.",
    homeEyebrow: "アプリ情報",
    homeTitle: "持ちもの帖",
    homeLead: "持っている物と、これから買いたい物を落ち着いて整理するための軽量な記録アプリです。",
    homePrivacyAction: "プライバシーポリシー",
    homeSupportAction: "サポートを見る",
    privacyEyebrow: "プライバシーポリシー",
    privacyTitle: "プライバシーポリシー",
    privacyUpdated: "最終更新日：2026年5月26日",
    supportEyebrow: "サポート",
    supportTitle: "テクニカルサポート",
    supportLead: "持ちもの帖の使い方、データの扱い、問い合わせ方法について。"
  }
};

const documents = {
  privacy: {
    "zh-Hans": [
      {
        title: "我们收集的信息",
        body: [
          "留物是一款个人物品记录工具。当前版本不会向开发者服务器收集、上传或出售你的个人数据。",
          "你在应用中创建的物品、想买清单、照片、价格、分类、日期、备注和设置默认保存在你的设备上。"
        ]
      },
      {
        title: "相机、照片和用户内容",
        body: [
          "当你主动添加物品照片时，应用可能会请求相机或照片权限。这些权限仅用于拍摄或选择物品图片。",
          "照片和物品数据会保存在应用数据中。如果你开启 iCloud 同步，相关数据会通过 Apple iCloud 私有数据库在同一 Apple ID 的设备之间同步。开发者无法访问你的 iCloud 私有数据库内容。"
        ]
      },
      {
        title: "iCloud 同步",
        body: [
          "iCloud 同步由你在应用设置中主动开启。同步过程由 Apple 的 iCloud 和 CloudKit 服务处理。",
          "如果你关闭 iCloud 同步，应用会继续使用本地数据。"
        ]
      },
      {
        title: "导入和导出",
        body: [
          "留物支持你主动导入或导出备份文件。导出的文件可能包含物品、想买清单、图片和相关字段。",
          "请只把备份文件分享给你信任的人，并妥善保管。"
        ]
      },
      {
        title: "第三方追踪和广告",
        body: [
          "留物不使用第三方广告追踪，不会为了广告目的追踪你，也不会与数据经纪商共享你的数据。"
        ]
      },
      {
        title: "联系我们",
        body: [
          "如果你对隐私政策有疑问，可以通过技术支持页面提供的方式联系开发者。"
        ]
      }
    ],
    en: [
      {
        title: "Information We Collect",
        body: [
          "Stillkeep is a personal inventory app. The current version does not collect, upload, sell, or share your personal data with a developer-operated server.",
          "Items, wishlist entries, photos, prices, categories, dates, notes, and settings you create in the app are stored on your device by default."
        ]
      },
      {
        title: "Camera, Photos, and User Content",
        body: [
          "When you choose to add item photos, the app may ask for camera or photo library access. These permissions are used only to capture or select item images.",
          "Photos and item data are stored as app data. If you enable iCloud Sync, the data is synced through Apple iCloud private database across devices signed in with the same Apple ID. The developer cannot access your iCloud private database content."
        ]
      },
      {
        title: "iCloud Sync",
        body: [
          "iCloud Sync is optional and must be enabled by you in app settings. Syncing is handled by Apple iCloud and CloudKit services.",
          "If you turn off iCloud Sync, the app continues to use local data on your device."
        ]
      },
      {
        title: "Import and Export",
        body: [
          "Stillkeep lets you import and export backup files when you choose to do so. Exported files may include items, wishlist entries, images, and related fields.",
          "Only share backup files with people you trust and keep them in a safe place."
        ]
      },
      {
        title: "Third-Party Tracking and Advertising",
        body: [
          "Stillkeep does not use third-party advertising trackers, does not track you for advertising purposes, and does not share data with data brokers."
        ]
      },
      {
        title: "Contact",
        body: [
          "If you have questions about this privacy policy, please contact the developer through the support page."
        ]
      }
    ],
    ja: [
      {
        title: "収集する情報",
        body: [
          "持ちもの帖は、個人の持ち物を記録するためのアプリです。現在のバージョンでは、開発者が運営するサーバーへ個人データを収集、アップロード、販売、共有することはありません。",
          "アプリ内で作成した持ち物、欲しい物リスト、写真、価格、カテゴリ、日付、メモ、設定は、初期状態では端末内に保存されます。"
        ]
      },
      {
        title: "カメラ、写真、ユーザーコンテンツ",
        body: [
          "持ち物の写真を追加する場合、アプリはカメラまたは写真ライブラリへのアクセス許可を求めることがあります。これらの権限は、持ち物の写真を撮影または選択するためだけに使用されます。",
          "写真と持ち物データはアプリデータとして保存されます。iCloud 同期を有効にした場合、同じ Apple ID でサインインしている端末間で、Apple iCloud のプライベートデータベースを通じて同期されます。開発者はあなたの iCloud プライベートデータベースの内容にアクセスできません。"
        ]
      },
      {
        title: "iCloud 同期",
        body: [
          "iCloud 同期は任意の機能で、アプリの設定からユーザーが有効にする必要があります。同期は Apple の iCloud および CloudKit サービスによって処理されます。",
          "iCloud 同期をオフにした場合、アプリは端末上のローカルデータを引き続き使用します。"
        ]
      },
      {
        title: "インポートとエクスポート",
        body: [
          "持ちもの帖では、ユーザーの操作によりバックアップファイルをインポートまたはエクスポートできます。エクスポートされたファイルには、持ち物、欲しい物リスト、画像、関連フィールドが含まれる場合があります。",
          "バックアップファイルは信頼できる相手にのみ共有し、安全に保管してください。"
        ]
      },
      {
        title: "第三者トラッキングと広告",
        body: [
          "持ちもの帖は第三者の広告トラッカーを使用せず、広告目的でユーザーを追跡せず、データブローカーとデータを共有しません。"
        ]
      },
      {
        title: "お問い合わせ",
        body: [
          "このプライバシーポリシーについて質問がある場合は、サポートページから開発者にお問い合わせください。"
        ]
      }
    ]
  },
  support: {
    "zh-Hans": [
      {
        title: "技术支持",
        body: [
          "如果你在使用留物时遇到问题，请先确认应用已更新到最新版本，并尝试重新启动应用。"
        ]
      },
      {
        title: "常见问题",
        list: [
          "相机或照片无法使用：请在系统设置中检查留物的相机和照片权限。",
          "iCloud 同步没有立即出现：首次同步可能需要一些时间，请确认设备已登录同一 Apple ID，并且 iCloud 可用。",
          "导入备份失败：请确认文件扩展名为 .heldbackup，并来自你信任的来源。"
        ]
      },
      {
        title: "联系我们",
        body: [
          "你可以通过 GitHub Issues 提交问题、建议或反馈。"
        ],
        contact: {
          label: "打开 GitHub Issues",
          href: "https://github.com/liunangit/stillkeep-pages/issues"
        }
      }
    ],
    en: [
      {
        title: "Technical Support",
        body: [
          "If you run into an issue while using Stillkeep, please make sure the app is updated to the latest version and try restarting the app first."
        ]
      },
      {
        title: "Common Questions",
        list: [
          "Camera or photo access is unavailable: check camera and photo permissions for Stillkeep in system settings.",
          "iCloud Sync does not appear immediately: initial sync may take some time. Make sure all devices are signed in with the same Apple ID and iCloud is available.",
          "Backup import fails: make sure the file extension is .heldbackup and that the file comes from a trusted source."
        ]
      },
      {
        title: "Contact",
        body: [
          "You can submit issues, suggestions, or feedback through GitHub Issues."
        ],
        contact: {
          label: "Open GitHub Issues",
          href: "https://github.com/liunangit/stillkeep-pages/issues"
        }
      }
    ],
    ja: [
      {
        title: "テクニカルサポート",
        body: [
          "持ちもの帖の使用中に問題が発生した場合は、まずアプリが最新バージョンであることを確認し、アプリを再起動してください。"
        ]
      },
      {
        title: "よくある質問",
        list: [
          "カメラまたは写真が使えない場合：システム設定で持ちもの帖のカメラと写真の権限を確認してください。",
          "iCloud 同期がすぐに反映されない場合：初回同期には時間がかかることがあります。同じ Apple ID でサインインし、iCloud が利用可能であることを確認してください。",
          "バックアップのインポートに失敗する場合：拡張子が .heldbackup で、信頼できる場所から取得したファイルであることを確認してください。"
        ]
      },
      {
        title: "お問い合わせ",
        body: [
          "問題、提案、フィードバックは GitHub Issues から送信できます。"
        ],
        contact: {
          label: "GitHub Issues を開く",
          href: "https://github.com/liunangit/stillkeep-pages/issues"
        }
      }
    ]
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

function resolveLanguage() {
  const saved = localStorage.getItem("stillkeep-language");
  if (saved && translations[saved]) return saved;

  for (const language of navigator.languages || [navigator.language]) {
    if (!language) continue;
    if (langAliases[language]) return langAliases[language];
    const base = language.split("-")[0];
    if (langAliases[base]) return langAliases[base];
  }
  return "en";
}

function renderDocument(page, lang) {
  const content = document.getElementById("content");
  if (!content || !documents[page]) return;

  const sections = documents[page][lang] || documents[page].en;
  content.replaceChildren(...sections.map((section) => {
    const wrapper = document.createElement("section");
    const title = document.createElement("h2");
    title.textContent = section.title;
    wrapper.append(title);

    for (const paragraph of section.body || []) {
      const p = document.createElement("p");
      p.textContent = paragraph;
      wrapper.append(p);
    }

    if (section.list) {
      const ul = document.createElement("ul");
      for (const item of section.list) {
        const li = document.createElement("li");
        li.textContent = item;
        ul.append(li);
      }
      wrapper.append(ul);
    }

    if (section.contact) {
      const card = document.createElement("div");
      card.className = "contact-card";
      const link = document.createElement("a");
      link.href = section.contact.href;
      link.textContent = section.contact.label;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      card.append(link);
      wrapper.append(card);
    }

    return wrapper;
  }));
}

function applyLanguage(lang) {
  const dictionary = translations[lang] || translations.en;
  document.documentElement.lang = lang === "zh-Hans" ? "zh-Hans" : lang;

  for (const element of document.querySelectorAll("[data-i18n]")) {
    const key = element.getAttribute("data-i18n");
    if (dictionary[key]) element.textContent = dictionary[key];
  }

  for (const button of document.querySelectorAll("[data-lang]")) {
    const isSelected = button.getAttribute("data-lang") === lang;
    button.setAttribute("aria-pressed", String(isSelected));
  }

  renderDocument(document.body.dataset.page, lang);
}

for (const button of document.querySelectorAll("[data-lang]")) {
  button.addEventListener("click", () => {
    const lang = button.getAttribute("data-lang");
    localStorage.setItem("stillkeep-language", lang);
    applyLanguage(lang);
  });
}

applyLanguage(resolveLanguage());
