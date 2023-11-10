import { getClientConfig } from "../config/client";
import { SubmitKey } from "../store/config";
import type { PartialLocaleType } from "./index";

const isApp = !!getClientConfig()?.isApp;

const tw: PartialLocaleType = {
  WIP: "該功能仍在開發中……",
  Error: {
    Unauthorized: isApp
      ? "檢測到無效 API Key，請前往[設置](/#/settings)檢查 API Key 是否配置正確。"
      : "目前您的狀態是未授權，請前往[登錄](/#/auth)輸入正確的授權碼。",
  },
  Auth: {
    Title: "授權碼驗證",
    Tips: "請在下方輸入授權碼",
    Input: "授權碼",
    Confirm: "確認",
    Later: "稍後再說",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} 則對話`,
  },
  Chat: {
    SubTitle: (count: number) => `您已經與 Mr.🆖 AI English Tutor 進行了 ${count} 則對話`,
    EditMessage: {
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
      newm: "從工具新建聊天",
      next: "下一個聊天",
      prev: "上一個聊天",
      clear: "清除上下文",
      del: "刪除聊天",
    },
    InputActions: {
      Stop: "停止響應",
      ToBottom: "滾到最新",
      Theme: {
        auto: "自動主題",
        light: "亮色模式",
        dark: "深色模式",
      },
      Prompt: "快捷指令",
      Masks: "所有工具",
      Clear: "清除聊天",
      Settings: "對話設置",
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
    MessageFromChatGPT: "來自 ChatGPT 的訊息",
    Format: {
      Title: "導出格式",
      SubTitle: "可以導出 Markdown 文本或者 PNG 圖片",
    },
    IncludeContext: {
      Title: "包含工具上下文",
      SubTitle: "是否在訊息中展示工具上下文",
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
    Search: "搜索訊息",
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
        Title: "重設所有設定",
        SubTitle: "將所有設定重置回默認值",
        Action: "立即重設",
        Confirm: "您確定要將所有設定重置回默認值嗎？",
      },
      Clear: {
        Title: "清除所有資料",
        SubTitle: "清除所有對話和設定",
        Action: "立即清除",
        Confirm: "您確定要清除所有對話和設定嗎？",
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
      CloudState: "雲端數據",
      NotSyncYet: "還沒有進行過同步",
      Success: "同步成功",
      Fail: "同步失敗",

      Config: {
        Modal: {
          Title: "配置雲同步",
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

      LocalState: "本地數據",
      Overview: (overview: any) => {
        return `${overview.chat} 次對話，${overview.message} 條消息，${overview.prompt} 條提示詞，${overview.mask} 個工具`;
      },
      ImportFailed: "導入失敗",
    },
    Mask: {
      Splash: {
        Title: "工具啟動頁面",
        SubTitle: "新增聊天時，呈現工具啟動頁面",
      },
      Builtin: {
        Title: "隱藏內置工具",
        SubTitle: "在所有工具列表中隱藏內置工具",
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
        Title: "授權碼",
        SubTitle: "已開啟授權訪問限制",
        Placeholder: "請輸入授權碼",
      },
      CustomEndpoint: {
        Title: "自訂接口",
        SubTitle: "使用自訂 Azure 或 OpenAI 服務",
      },
      Provider: {
        Title: "模型提供者",
        SubTitle: "選擇 Azure 或 OpenAI",
      },
      OpenAI: {
        ApiKey: {
          Title: "OpenAI API 鑰匙",
          SubTitle: "用戶自訂 OpenAI API 鑰匙",
          Placeholder: "sk-xxx",
        },

        Endpoint: {
          Title: "OpenAI 接口",
          SubTitle: "以 http(s):// 開始或預設使用 /api/openai",
        },
      },
      Azure: {
        ApiKey: {
          Title: "Azure API 鑰匙",
          SubTitle: "從 Azure 控制台檢查您 API 鑰匙",
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
      Title: "核採樣 (top_p)",
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
  Context: {
    Toast: (x: any) => `包含 ${x} 條預設提示詞`,
    Edit: "當前對話設置",
    Add: "新增預設對話",
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
      Avatar: "工具頭像",
      Name: "工具名稱",
      Sync: {
        Title: "使用全局設置",
        SubTitle: "當前對話是否使用全局模型設置",
        Confirm: "當前對話的自定義設置將會被自動覆蓋，確認啟用全局設置？",
      },
      HideContext: {
        Title: "隱藏預設對話",
        SubTitle: "隱藏後預設對話不會出現在聊天界面",
      },
      Share: {
        Title: "分享此工具",
        SubTitle: "生成此工具的直達鏈接",
        Action: "複製鏈接",
      },
    },
  },
  NewChat: {
    Return: "返回",
    Skip: "跳過",
    NotShow: "不再呈現",
    ConfirmNoShow: "確認停用？停用後可以随時在設定中重新啟用。",
    Title: "挑選一個工具",
    SubTitle: "現在開始，與工具背後的靈魂思維碰撞",
    More: "搜尋更多",
  },
  URLCommand: {
    Code: "檢測到鏈接中已經包含訪問碼，是否自動填入？",
    Settings: "檢測到鏈接中包含了預製設置，是否自動填入？",
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
    Config: "配置",
  },
  Exporter: {
    Model: "模型",
    Messages: "訊息",
    Topic: "主題",
    Time: "時間",
  },
};

export default tw;
