import { SubmitKey } from "../store/config";
import type { LocaleType } from "./index";

const tw: LocaleType = {
  WIP: "該功能仍在開發中……",
  Error: {
    Unauthorized: "目前您的狀態是未授權，請前往設定頁面輸入授權碼。",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} 條對話`,
  },
  Chat: {
    SubTitle: (count: number) => `與 ChatGPT 的 ${count} 條對話`,
    Actions: {
      ChatList: "查看訊息列表",
      CompressedHistory: "查看壓縮後的歷史 Prompt",
      Export: "匯出聊天紀錄",
      Copy: "複製",
      Stop: "停止",
      Retry: "重試",
      Delete: "刪除",
    },
    Rename: "重命名對話",
    Typing: "正在輸入…",
    Input: (submitKey: string) => {
      var inputHints = `輸入訊息後，按下 ${submitKey} 鍵發送`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += "，按下 Shift + Enter 鍵換行";
      }
      return inputHints + "，按下 / 鍵觸發提示詞";
    },
    Send: "發送",
    Config: {
      Reset: "重置默認",
      SaveAs: "存為面具",
    },
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
      Title: "包含面具上下文",
      SubTitle: "是否在訊息中展示面具上下文",
    },
    Steps: {
      Select: "選取",
      Preview: "預覽",
    },
  },
  Select: {
    Search: "搜索訊息",
    All: "選取全部",
    Latest: "最近幾條",
    Clear: "清除選取",
  },
  Memory: {
    Title: "歷史摘要",
    EmptyContent: "對話內容過短，無需總結",
    Send: "自動壓縮聊天記錄並作為上下文發送",
    Copy: "複製摘要",
    Reset: "[unused]",
    ResetConfirm: "確認清空歷史摘要？",
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
    Actions: {
      ClearAll: "清除所有資料",
      ResetAll: "重設所有設定",
      Close: "關閉",
      ConfirmResetAll: "您確定要重設所有設定嗎？",
      ConfirmClearAll: "您確定要清除所有數據嗎？",
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
    Update: {
      Version: (x: string) => `當前版本：${x}`,
      IsLatest: "已是最新版本",
      CheckUpdate: "檢查更新",
      IsChecking: "正在檢查更新...",
      FoundUpdate: (x: string) => `發現新版本：${x}`,
      GoToUpdate: "有更新",
    },
    SendKey: "發送鍵",
    Theme: "主題",
    TightBorder: "緊湊邊框",
    SendPreviewBubble: {
      Title: "預覽氣泡",
      SubTitle: "在預覽氣泡中預覽 Markdown 内容",
    },
    Mask: {
      Title: "面具啟動頁",
      SubTitle: "新建聊天時，展示面具啟動頁",
    },
    Prompt: {
      Disable: {
        Title: "停用提示詞自動補齊",
        SubTitle: "在輸入框開頭輸入 / 即可觸發提示詞",
      },
      List: "自定義提示詞列表",
      ListCount: (builtin: number, custom: number) =>
        `內建 ${builtin} 條，用戶定義 ${custom} 條`,
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
    Token: {
      Title: "API Key",
      SubTitle: "使用自己的 Key 可規避授權存取限制",
      Placeholder: "OpenAI API Key",
    },
    Usage: {
      Title: "帳戶餘額",
      SubTitle(used: any, total: any) {
        return `本月已使用 US$${used}，訂閱總額 US$${total}`;
      },
      IsChecking: "正在檢查…",
      Check: "重新檢查",
      NoAccess: "輸入 API Key 或授權碼查看餘額",
    },
    AccessCode: {
      Title: "授權碼",
      SubTitle: "已開啟授權訪問限制",
      Placeholder: "請輸入授權碼",
    },
    Model: "模型 (model)",
    Temperature: {
      Title: "隨機性 (temperature)",
      SubTitle: "值越大，回應越隨機",
    },
    MaxTokens: {
      Title: "單次回應限制 (max_tokens)",
      SubTitle: "單次互動所用的最大 Token 數",
    },
    PresencePenalty: {
      Title: "話題新穎度 (presence_penalty)",
      SubTitle: "值越大，越有可能擴展到新話題",
    },
  },
  Store: {
    DefaultTopic: "新的對話",
    BotHello: "請問有什麼可以幫你？",
    Error: "出錯了，請稍後再嘗試",
    Prompt: {
      History: (content: string) =>
        "這是歷史聊天總結，作為前情提要：" + content,
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
  Mask: {
    Name: "面具",
    Page: {
      Title: "預設角色面具",
      SubTitle: (count: number) => `${count} 個預設角色定義`,
      Search: "搜索角色面具",
      Create: "新增",
    },
    Item: {
      Info: (count: number) => `包含 ${count} 條預設對話`,
      Chat: "對話",
      View: "查看",
      Edit: "編輯",
      Delete: "刪除",
      DeleteConfirm: "確認刪除？",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `編輯預設面具 ${readonly ? "（只讀）" : ""}`,
      Download: "下載預設",
      Clone: "複製預設",
    },
    Config: {
      Avatar: "角色頭像",
      Name: "角色名稱",
      Sync: {
        Title: "使用全局設置",
        SubTitle: "當前對話是否使用全局模型設置",
        Confirm: "當前對話的自定義設置將會被自動覆蓋，確認啟用全局設置？",
      },
      HideContext: {
        Title: "隱藏預設對話",
        SubTitle: "隱藏後預設對話不會出現在聊天界面",
      },
    },
  },
  NewChat: {
    Return: "返回",
    Skip: "直接開始",
    NotShow: "不再展示",
    ConfirmNoShow: "確認禁用？禁用後可以隨時在設置中重新啟用。",
    Title: "挑選一個面具",
    SubTitle: "現在開始，與面具背後的靈魂思維碰撞",
    More: "查看全部",
  },
  UI: {
    Confirm: "確認",
    Cancel: "取消",
    Close: "關閉",
    Create: "新增",
    Edit: "編輯",
  },
};

export default tw;
