import { getClientConfig } from "../config/client";
import { SubmitKey } from "../store/config";

const isApp = !!getClientConfig()?.isApp;

const tw = {
  WIP: "該功能仍在開發中……",
  Error: {
    Unauthorized: isApp
      ? "檢測到無效 API Key，請前往[設定](/#/settings)頁檢查 API Key 是否設定正確。"
      : "訪問密碼不正確或為空，請前往[登入](/#/auth)頁輸入正確的訪問密碼，或者在[設定](/#/settings)頁填入你自己的 OpenAI API Key。",
  },

  Auth: {
    Title: "需要密碼",
    Tips: "管理員開啟了密碼驗證，請在下方填入訪問碼",
    SubTips: "或者輸入你的 OpenAI 或 Google API 密鑰",
    Input: "在此處填寫訪問碼",
    Confirm: "確認",
    Later: "稍候再說",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} 則對話`,
  },
  Chat: {
    SubTitle: (count: number) => `您已經與 Mr.🆖 AI English Tutor 進行了 ${count} 則對話`,
    EditMessage: {
      Title: "編輯消息記錄",
      Topic: {
        Title: "聊天主題",
        SubTitle: "更改當前聊天主題",
      },
    },
    Actions: {
      ChatList: "檢視訊息列表",
      CompressedHistory: "檢視壓縮後的歷史 Prompt",
      Export: "匯出聊天紀錄",
      Copy: "複製",
      Stop: "停止",
      Retry: "重試",
      Pin: "固定",
      PinToastContent: "已將 1 條對話固定至預設提示詞",
      PinToastAction: "查看",
      Delete: "刪除",
      Edit: "編輯",
    },
    Commands: {
      new: "新建聊天",
      newm: "從面具新建聊天",
      next: "下一個聊天",
      prev: "上一個聊天",
      clear: "清除上下文",
      del: "刪除聊天",
    },
    InputActions: {
      Stop: "停止回應",
      ToBottom: "移至最新",
      Theme: {
        auto: "自動主題",
        light: "亮色模式",
        dark: "深色模式",
      },
      Prompt: "快捷指令",
      Masks: "所有面具",
      Clear: "清除聊天",
      Settings: "對話設定",
      UploadImage: "上傳圖片",
    },
    Rename: "重新命名對話",
    Typing: "正在輸入…",
    Input: (submitKey: string) => {
      var inputHints = `輸入訊息後，按下 ${submitKey} 鍵即可傳送`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += "，按下 Shift + Enter 鍵換行";
      }
      return inputHints + "，按下 / 鍵觸發提示詞";
    },
    Send: "傳送",
    Config: {
      Reset: "重設",
      SaveAs: "另存新檔",
    },
    IsContext: "預設提示詞",
  },
  Export: {
    Title: "分享聊天記錄",
    Copy: "複製全部",
    Download: "下載檔案",
    Share: "分享到 ShareGPT",
    MessageFromYou: "來自您的訊息",
    MessageFromChatGPT: "來自 Mr.🆖 AI English Tutor 的訊息",
    Format: {
      Title: "導出格式",
      SubTitle: "可以導出 Markdown 文本或者 PNG 圖片",
    },
    IncludeContext: {
      Title: "包含面具上下文",
      SubTitle: "是否在消息中展示面具上下文",
    },
    Steps: {
      Select: "選取",
      Preview: "預覽",
    },
    Image: {
      Toast: "正在生成截圖",
      Modal: "長按或右鍵保存圖片",
    },
  },
  Select: {
    Search: "搜索對話",
    All: "選取全部",
    Latest: "最近幾條",
    Clear: "清除選取",
  },
  Memory: {
    Title: "上下文記憶 Prompt",
    EmptyContent: "尚未記憶",
    Copy: "複製全部",
    Send: "傳送記憶",
    Reset: "重設對話",
    ResetConfirm: "重設後將清除目前對話記錄以及歷史記憶，確認重設？",
  },
  Home: {
    NewChat: "新的對話",
    DeleteChat: "確定要刪除選取的對話嗎？",
    DeleteToast: "已刪除對話",
    Revert: "撤銷",
  },
  Settings: {
    Title: "設定",
    SubTitle: "設定選項",

    Danger: {
      Reset: {
        Title: "重置所有設定",
        SubTitle: "重置所有設定項回預設值",
        Action: "立即重置",
        Confirm: "確認重置所有設定？",
      },
      Clear: {
        Title: "清除所有資料",
        SubTitle: "清除所有聊天、設定資料",
        Action: "立即清除",
        Confirm: "確認清除所有聊天、設定資料？",
      },
    },
    Lang: {
      Name: "Language", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      All: "所有語言",
    },
    Avatar: "大頭貼",
    FontSize: {
      Title: "字型大小",
      SubTitle: "聊天內容的字型大小",
    },
    InjectSystemPrompts: {
      Title: "匯入系統提示",
      SubTitle: "強制在每個請求的訊息列表開頭新增一個模擬 ChatGPT 的系統提示",
    },
    InputTemplate: {
      Title: "用戶輸入預處理",
      SubTitle: "用戶最新的一條消息會填充到此模板",
    },
    Update: {
      Version: (x: string) => `目前版本：${x}`,
      IsLatest: "已是最新版本",
      CheckUpdate: "檢查更新",
      IsChecking: "正在檢查更新...",
      FoundUpdate: (x: string) => `發現新版本：${x}`,
      GoToUpdate: "有更新",
    },
    SendKey: "傳送鍵",
    Theme: "主題",
    TightBorder: "緊湊邊框",
    SendPreviewBubble: {
      Title: "預覽氣泡",
      SubTitle: "在預覽氣泡中預覽 Markdown 內容",
    },
    AutoGenerateTitle: {
      Title: "自動生成標題",
      SubTitle: "根據對話內容生成合適的標題",
    },
    Sync: {
      CloudState: "雲端資料",
      NotSyncYet: "還沒有進行過同步",
      Success: "同步成功",
      Fail: "同步失敗",

      Config: {
        Modal: {
          Title: "設定雲端同步",
          Check: "檢查可用性",
        },
        SyncType: {
          Title: "同步類型",
          SubTitle: "選擇喜愛的同步服務器",
        },
        Proxy: {
          Title: "啟用代理",
          SubTitle: "在瀏覽器中同步時，必須啟用代理以避免跨域限制",
        },
        ProxyUrl: {
          Title: "代理地址",
          SubTitle: "僅適用於本項目自帶的跨域代理",
        },

        WebDav: {
          Endpoint: "WebDAV 地址",
          UserName: "用戶名",
          Password: "密碼",
        },

        UpStash: {
          Endpoint: "UpStash Redis REST Url",
          UserName: "備份名稱",
          Password: "UpStash Redis REST Token",
        },
      },

      LocalState: "本地資料",
      Overview: (overview: any) => {
        return `${overview.chat} 次對話，${overview.message} 條消息，${overview.prompt} 條提示詞，${overview.mask} 個面具`;
      },
      ImportFailed: "導入失敗",
    },
    Mask: {
      Splash: {
        Title: "面具啟動頁面",
        SubTitle: "新增聊天時，呈現面具啟動頁面",
      },
      Builtin: {
        Title: "隱藏內置面具",
        SubTitle: "在所有面具列表中隱藏內置面具",
      },
    },
    Prompt: {
      Disable: {
        Title: "停用提示詞自動補齊",
        SubTitle: "在輸入框開頭輸入 / 即可觸發提示詞",
      },
      List: "自定義提示詞列表",
      ListCount: (builtin: number, custom: number) =>
        `內建 ${builtin} 條，使用者定義 ${custom} 條`,
      Edit: "編輯",
      Modal: {
        Title: "提示詞列表",
        Add: "新增",
        Search: "搜尋提示詞",
      },
      EditModal: {
        Title: "編輯提示詞",
      },
    },
    HistoryCount: {
      Title: "附帶歷史訊息數",
      SubTitle: "每次請求附帶的歷史訊息數",
    },
    CompressThreshold: {
      Title: "歷史訊息長度壓縮閾值",
      SubTitle: "當未壓縮的歷史訊息超過該值時，將進行壓縮",
    },

    Usage: {
      Title: "帳戶餘額",
      SubTitle(used: any, total: any) {
        return `本月已使用 US$${used}，訂閱總額 US$${total}`;
      },
      IsChecking: "正在檢查…",
      Check: "重新檢查",
      NoAccess: "輸入 API Key 檢視餘額",
    },

    Access: {
      AccessCode: {
        Title: "訪問密碼",
        SubTitle: "管理員已開啟加密訪問",
        Placeholder: "請輸入訪問密碼",
      },
      CustomEndpoint: {
        Title: "自定義接口 (Endpoint)",
        SubTitle: "是否使用自定義 Azure 或 OpenAI 服務",
      },
      Provider: {
        Title: "模型服務商",
        SubTitle: "切換不同的服務商",
      },
      OpenAI: {
        ApiKey: {
          Title: "API Key",
          SubTitle: "使用自定義 OpenAI Key 繞過密碼訪問限制",
          Placeholder: "OpenAI API Key",
        },

        Endpoint: {
          Title: "接口(Endpoint) 地址",
          SubTitle: "除默認地址外，必須包含 http(s)://",
        },
      },
      Azure: {
        ApiKey: {
          Title: "Azure API 鑰匙",
          SubTitle: "使用自定義 Azure Key 繞過密碼訪問限制",
          Placeholder: "Azure API 鑰匙",
        },

        Endpoint: {
          Title: "Azure 接口",
          SubTitle: "從 Azure 控制台檢查您的接口地址",
        },

        ApiVerion: {
          Title: "Azure API 版本",
          SubTitle: "從 Azure 控制台檢查您的 API 版本",
        },
      },
      Anthropic: {
        ApiKey: {
          Title: "API 密鑰",
          SubTitle: "從 Anthropic AI 獲取您的 API 密鑰",
          Placeholder: "Anthropic API Key",
        },

        Endpoint: {
          Title: "終端地址",
          SubTitle: "示例：",
        },

        ApiVerion: {
          Title: "API 版本 (claude api version)",
          SubTitle: "選擇一個特定的 API 版本输入",
        },
      },
      Google: {
        ApiKey: {
          Title: "API 密鑰",
          SubTitle: "從 Google AI 獲取您的 API 密鑰",
          Placeholder: "輸入您的 Google AI Studio API 密鑰",
        },

        Endpoint: {
          Title: "終端地址",
          SubTitle: "示例：",
        },

        ApiVersion: {
          Title: "API 版本（僅適用於 gemini-pro）",
          SubTitle: "選擇一個特定的 API 版本",
        },
      },
      CustomModel: {
        Title: "自定義模型名",
        SubTitle: "增加自定義模型可選項，使用英文逗號隔開",
      },
    },

    Model: "模型 (model)",
    Temperature: {
      Title: "隨機性 (temperature)",
      SubTitle: "值越大，回應越隨機",
    },
    TopP: {
      Title: "核采樣 (top_p)",
      SubTitle: "與隨機性類似，但不要和隨機性一起更改",
    },
    MaxTokens: {
      Title: "單次回應限制 (max_tokens)",
      SubTitle: "單次互動所用的最大 Token 數",
    },
    PresencePenalty: {
      Title: "話題新穎度 (presence_penalty)",
      SubTitle: "值越大，越有可能拓展到新話題",
    },
    FrequencyPenalty: {
      Title: "頻率懲罰度 (frequency_penalty)",
      SubTitle: "值越大，越有可能降低重複字詞",
    },
  },
  Store: {
    DefaultTopic: "新的對話",
    BotHello: "請問有什麼可以幫你？",
    Error: "出錯了，請稍後再嘗試",
    Prompt: {
      History: (content: string) =>
        "這是 AI 與使用者的歷史聊天總結，作為前情提要：" + content,
      Topic:
        "使用四到五個字直接返回這句話的簡要主題，不要解釋、不要標點、不要語氣詞、不要多餘文本，如果沒有主題，請直接返回“閒聊”",
      Summarize:
        "簡要總結一下對話內容，用作後續的上下文提示 prompt，控制在 200 字以內",
    },
  },
  Copy: {
    Success: "已複製到剪貼簿中",
    Failed: "複製失敗，請賦予剪貼簿權限",
  },
  Download: {
    Success: "內容已下載到您的目錄。",
    Failed: "下載失敗。",
  },
  Context: {
    Toast: (x: any) => `已設定 ${x} 條前置上下文`,
    Edit: "前置上下文和歷史記憶",
    Add: "新增一條",
    Clear: "上下文已清除",
    Revert: "恢復上下文",
  },
  Plugin: {
    Name: "插件",
  },
  FineTuned: {
    Sysmessage: "你是一個助手",
  },
  Mask: {
    Name: "工具",
    Page: {
      Title: "預設工具",
      SubTitle: (count: number) => `${count} 個預設工具定義`,
      Search: "搜尋工具",
      Create: "新增",
    },
    Item: {
      Info: (count: number) => `包含 ${count} 條預設對話`,
      Chat: "對話",
      View: "檢視",
      Edit: "編輯",
      Delete: "刪除",
      DeleteConfirm: "確認刪除？",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `編輯預設工具 ${readonly ? "（唯讀）" : ""}`,
      Download: "下載預設",
      Clone: "複製預設",
    },
    Config: {
      Avatar: "角色頭像",
      Name: "角色名稱",
      Sync: {
        Title: "使用全局設定",
        SubTitle: "當前對話是否使用全局模型設定",
        Confirm: "當前對話的自定義設定將會被自動覆蓋，確認啟用全局設定？",
      },
      HideContext: {
        Title: "隱藏預設對話",
        SubTitle: "隱藏後預設對話不會出現在聊天界面",
      },
      Share: {
        Title: "分享此面具",
        SubTitle: "生成此面具的直達鏈接",
        Action: "複製鏈接",
      },
    },
  },
  NewChat: {
    Return: "返回",
    Skip: "跳過",
    NotShow: "不再呈現",
    ConfirmNoShow: "確認停用？停用後可以隨時在設定中重新啟用。",
    Title: "挑選一個面具",
    SubTitle: "現在開始，與面具背後的靈魂思維碰撞",
    More: "搜尋更多",
  },
  URLCommand: {
    Code: "檢測到連結中已經包含訪問碼，是否自動填入？",
    Settings: "檢測到連結中包含了預設設定，是否自動填入？",
  },
  UI: {
    Confirm: "確認",
    Cancel: "取消",
    Close: "關閉",
    Create: "新增",
    Edit: "編輯",
    Export: "導出",
    Import: "導入",
    Sync: "同步",
    Config: "設定",
  },
  Exporter: {
    Description: {
      Title: "只有清除上下文之後的消息會被展示",
    },
    Model: "模型",
    Messages: "訊息",
    Topic: "主題",
    Time: "時間",
  },
};

type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

export type LocaleType = typeof tw;
export type PartialLocaleType = DeepPartial<typeof tw>;

export default tw;
// Translated by @chunkiuuu, feel free the submit new pr if there are typo/incorrect translations :D
