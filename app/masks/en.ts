import { BuiltinMask } from "./typing";

export const EN_MASKS: BuiltinMask[] = [
  {
    avatar: "270d-fe0f",
    name: "Proofreader",
    context: [
      {
        role: "user",
        content:
          "I want you to act as a proofreader. I will provide you with a text and I would like you to review them for any spelling, vocabulary, grammar, or punctuation errors. Once you have finished reviewing the text, provide me with any necessary corrections for the text.",
        date: "",
      },
      {
        role: "assistant",
        content:
          "Sure, please provide me with the text you want me to proofread.",
        date: "",
      },
    ],
    modelConfig: {
      model: "gpt-3.5-turbo",
      temperature: 0.8,
      max_tokens: 2000,
      presence_penalty: 0,
      sendMemory: false,
      historyMessageCount: 4,
      compressMessageLengthThreshold: 2000,
    },
    lang: "en",
    builtin: true,
  },
  {
    avatar: "270d-fe0f",
    name: "Grammar checker",
    context: [
      {
        role: "user",
        content:
          "I want you to act as a grammar checker. I will provide you with a text and I would like you to check the grammar, use a table to highlight the wrong sentences and provide me with suggested corrections.",
        date: "",
      },
      {
        role: "assistant",
        content:
          "Sure, I can do that for you. Please provide me with the text.",
        date: "",
      },
    ],
    modelConfig: {
      model: "gpt-3.5-turbo",
      temperature: 0.8,
      max_tokens: 2000,
      presence_penalty: 0,
      sendMemory: false,
      historyMessageCount: 4,
      compressMessageLengthThreshold: 2000,
    },
    lang: "en",
    builtin: true,
  },
  {
    avatar: "270d-fe0f",
    name: "Basic writing improvement",
    context: [
      {
        role: "user",
        content:
          "I want you to act as a writing improvement assistant. I will provide you with a text and I would like you to improve its spelling, grammar, clarity, conciseness, and overall readability, while breaking down long sentences, reducing repetition, and providing suggestions for improvement.",
        date: "",
      },
      {
        role: "assistant",
        content:
          "Sure, I can help you with that. Please provide me with the text you need help with.",
        date: "",
      },
    ],
    modelConfig: {
      model: "gpt-3.5-turbo",
      temperature: 0.8,
      max_tokens: 2000,
      presence_penalty: 0,
      sendMemory: false,
      historyMessageCount: 4,
      compressMessageLengthThreshold: 2000,
    },
    lang: "en",
    builtin: true,
  },
  {
    avatar: "270d-fe0f",
    name: "Advanced writing improvement",
    context: [
      {
        role: "user",
        content:
          "I want you to act as an English spell checker and improver. I will speak to you in English and you will reply with the corrected and improved version of my text, in English. I want you to replace my simplified A0-level words and sentences with more beautiful and elegant, upper level English words and sentences. Keep the meaning same, but make them more professional. I want you to only reply with the corrections and the improvements, and nothing else; do not write any explanation.",
        date: "",
      },
      {
        role: "assistant",
        content:
          "Sure, I can help you with that. Please provide me with the text you need assistance with.",
        date: "",
      },
    ],
    modelConfig: {
      model: "gpt-3.5-turbo",
      temperature: 0.8,
      max_tokens: 2000,
      presence_penalty: 0,
      sendMemory: false,
      historyMessageCount: 4,
      compressMessageLengthThreshold: 2000,
    },
    lang: "en",
    builtin: true,
  },
];
