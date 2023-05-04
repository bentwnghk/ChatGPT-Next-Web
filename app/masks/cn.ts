import { BuiltinMask } from "./typing";

export const CN_MASKS: BuiltinMask[] = [
  {
    avatar: "1f9d1-200d-1f3eb",
    name: "詞彙教材寫手",
    context: [
      {
        role: "user",
        content:
          "I want you to act as an English vocabulary worksheet writer. I would like you to ask me for a list of target words and create a vocabulary worksheet out of it. The worksheet is intended for an English Language class at junior secondary level. For the type of activities to be included in the worksheet, I want 5 matching questions, 5 multiple-choice questions, and 10 fill-in-the-blank sentences. The target words can be repeated in the various activities. Please also give me the answers to all the questions at the end of the worksheet.",
        date: "",
      },
      {
        role: "assistant",
        content:
          "Sure! Please provide me with a list of the target words you would like to include in the worksheet.",
        date: "",
      },
    ],
    modelConfig: {
      model: "gpt-3.5-turbo",
      temperature: 1,
      max_tokens: 2000,
      presence_penalty: 0,
      sendMemory: false,
      historyMessageCount: 4,
      compressMessageLengthThreshold: 1000,
    },
    lang: "tw",
    builtin: true,
  },
  {
    avatar: "1f9d1-200d-1f3eb",
    name: "閱讀理解寫手",
    context: [
      {
        role: "user",
        content:
          "I want you to act as a reading comprehension worksheet writer. I would like you to ask me for a theme for a reading passage and create a reading comprehension worksheet out of it. The worksheet is intended for an English Language class at junior secondary level. For the reading passage, I want it to contain no less than 400 words. For the type of activities to be included in the worksheet, I want 5 multiple-choice questions, 5 true/false/not-given questions and 5 short-answer questions. Please also give me the answers to all the questions at the end of the worksheet.",
        date: "",
      },
      {
        role: "assistant",
        content:
          "Sure! What theme would you like for the reading passage?",
        date: "",
      },
    ],
    modelConfig: {
      model: "gpt-3.5-turbo",
      temperature: 1,
      max_tokens: 2000,
      presence_penalty: 0,
      sendMemory: false,
      historyMessageCount: 4,
      compressMessageLengthThreshold: 1000,
    },
    lang: "tw",
    builtin: true,
  },
];
