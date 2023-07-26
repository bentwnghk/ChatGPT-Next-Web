import { BuiltinMask } from "./typing";

export const EN_MASKS: BuiltinMask[] = [
  {
    avatar: "1f4d5",
    name: "語法檢查",
    context: [
      {
        id: "grammar-check-0",
        role: "user",
        content:
          "I want you to act as a grammar checker. I will provide you with a text and your task is to perform a grammar check. If the text contains more than one sentence, use a table to highlight the wrong sentences and provide a suggested correction. Otherwise, do not use any table.",
        date: "",
      },
      {
        id: "grammar-check-1",
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
      frequency_penalty: 0,
      sendMemory: false,
      historyMessageCount: 4,
      compressMessageLengthThreshold: 2000,
    },
    lang: "en",
    builtin: true,
    createdAt: 1688899480412,
  },
  {
    avatar: "1f4da",
    name: "句子改寫",
    context: [
      {
        id: "text-rewrite-0",
        role: "user",
        content:
          "Give me a few different versions of the text I provide.",
        date: "",
      },
      {
        id: "text-rewrite-1",
        role: "assistant",
        content:
          "Sure! Please provide me with the text you want me to rewrite or paraphrase.",
        date: "",
      },
    ],
    modelConfig: {
      model: "gpt-3.5-turbo",
      temperature: 0.8,
      max_tokens: 2000,
      presence_penalty: 0,
      frequency_penalty: 0,
      sendMemory: false,
      historyMessageCount: 4,
      compressMessageLengthThreshold: 2000,
    },
    lang: "en",
    builtin: true,
    createdAt: 1688899480412,
  },
  {
    avatar: "1f4d1",
    name: "DSE詞彙表",
    context: [
      {
        id: "dse-vocab-0",
        role: "user",
        content:
          "Generate a vocabulary list for HKDSE English Language examination. The list should be in the format '**English word** [繁體中文定義] <word class symbol>: example sentence 例句中文翻譯'.",
        date: "",
      },
      {
        id: "dse-vocab-1",
        role: "assistant",
        content:
          "Sure! Please tell me how many vocabulary items you want me to include on the list.",
        date: "",
      },
    ],
    modelConfig: {
      model: "gpt-3.5-turbo",
      temperature: 0.8,
      max_tokens: 2000,
      presence_penalty: 0,
      frequency_penalty: 0,
      sendMemory: false,
      historyMessageCount: 4,
      compressMessageLengthThreshold: 2000,
    },
    lang: "en",
    builtin: true,
    createdAt: 1688899480412,
  },
  {
    avatar: "270d-fe0f",
    name: "寫作改進",
    context: [
      {
        id: "write-improve-0",
        role: "user",
        content:
          "I want you to act as a writing improvement assistant. I will provide you with a text that needs improving and your task is to improve its spelling, grammar, clarity, concision, and overall readability, while breaking down long sentences, reducing repetition, and providing suggestions for improvement. Please provide only the corrected English version of the text and avoid including explanations.",
        date: "",
      },
      {
        id: "write-improve-1",
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
      frequency_penalty: 0,
      sendMemory: false,
      historyMessageCount: 4,
      compressMessageLengthThreshold: 2000,
    },
    lang: "en",
    builtin: true,
    createdAt: 1688899480412,
  },
  {
    avatar: "1f4da",
    name: "英專寫手",
    context: [
      {
        id: "write-polish-0",
        role: "user",
        content:
          "I want you to act as a professional writer and editor. I will provide you with a text and your task is to correct and improve it. Replace any simple words and sentence structures with more advanced and complex versions. Also, perform a style check and suggest changes to improve the clarity, concision, and readability of the text. Additionally, use more descriptive adjectives and adverbs to add more detail and interest to the text.",
        date: "",
      },
      {
        id: "write-polish-1",
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
      frequency_penalty: 0,
      sendMemory: false,
      historyMessageCount: 4,
      compressMessageLengthThreshold: 2000,
    },
    lang: "en",
    builtin: true,
    createdAt: 1688899480412,
  },
  {
    avatar: "1f58d-fe0f",
    name: "高亮文章重點",
    context: [
      {
        id: "text-highlight-0",
        role: "user",
        content:
          "Carefully read the following text and highlight the key points using double asterisks (**) around the words or phrases you want to emphasize. Do not alter the original text or summarize it.",
        date: "",
      },
      {
        id: "text-highlight-1",
        role: "assistant",
        content:
          "Sure, I can help you with that. Please provide me with the text you need help with.",
        date: "",
      },
    ],
    modelConfig: {
      model: "gpt-3.5-turbo",
      temperature: 0.8,
      max_tokens: 3000,
      presence_penalty: 0,
      frequency_penalty: 0,
      sendMemory: false,
      historyMessageCount: 4,
      compressMessageLengthThreshold: 2000,
    },
    lang: "en",
    builtin: true,
    createdAt: 1688899480412,
  },
  {
    avatar: "1f9d1-200d-1f3eb",
    name: "詞彙練習",
    context: [
      {
        id: "vocab-worksheet-0",
        role: "user",
        content:
          "I want you to act as an English vocabulary worksheet generator. I want you to create a worksheet that tests students' understanding of my requested vocabulary items. As for the test items to be included in the worksheet, I want 5 questions of matching definitions, 5 multiple-choice questions, and 10 fill-in-the-blank sentences. The target vocabulary items can be repeated in the various test items. Finally, provide the answers at the end of the worksheet.",
        date: "",
      },
      {
        id: "vocab-worksheet-1",
        role: "assistant",
        content:
          "Sure! Please provide me with a list of target vocabulary items for the worksheet.",
        date: "",
      },
    ],
    modelConfig: {
      model: "gpt-3.5-turbo",
      temperature: 1,
      max_tokens: 3000,
      presence_penalty: 0,
      frequency_penalty: 0,
      sendMemory: true,
      historyMessageCount: 4,
      compressMessageLengthThreshold: 2000,
    },
    lang: "en",
    builtin: true,
    createdAt: 1688899480413,
  },
  {
    avatar: "1f9d1-200d-1f3eb",
    name: "構詞填空練習",
    context: [
      {
        id: "word-formation-0",
        role: "user",
        content:
          "I want you to generate a word formation cloze exercise, where students have to change the part of speech of a given word in brackets, for example, from 'happy' to 'happiness' or from 'beauty' to 'beautiful. The aim of the exercise is to help students learn how words are related and how to use them in different contexts. Provide the answers at the end of the exercise.",
        date: "",
      },
      {
        id: "word-formation-1",
        role: "assistant",
        content:
          "Sure! How many questions do you want for the exercise?",
        date: "",
      },
    ],
    modelConfig: {
      model: "gpt-3.5-turbo",
      temperature: 1,
      max_tokens: 3000,
      presence_penalty: 0,
      frequency_penalty: 0,
      sendMemory: true,
      historyMessageCount: 4,
      compressMessageLengthThreshold: 2000,
    },
    lang: "en",
    builtin: true,
    createdAt: 1688899480413,
  },
  {
    avatar: "1f9d1-200d-1f3eb",
    name: "閱讀理解練習",
    context: [
      {
        id: "reading-worksheet-0",
        role: "user",
        content:
          "I want you to act as a reading comprehension exercise generator. Write a passage on my requested topic and formulate MCQs to test students' understanding of the passage. One of the questions you set must be inference or analysis questions. Finally, provide the answers at the end.",
        date: "",
      },
      {
        id: "vocab-worksheet-1",
        role: "assistant",
        content:
          "Sure! Please provide me with a topic, the desired length of the passage, the level of difficulty of the words in the passage, and the number of MCQs to be set.",
        date: "",
      },
    ],
    modelConfig: {
      model: "gpt-3.5-turbo",
      temperature: 1,
      max_tokens: 3000,
      presence_penalty: 0,
      frequency_penalty: 0,
      sendMemory: true,
      historyMessageCount: 4,
      compressMessageLengthThreshold: 2000,
    },
    lang: "en",
    builtin: true,
    createdAt: 1688899480413,
  },
  {
    avatar: "1f9e9",
    name: "主題詞彙練習",
    context: [
      {
        id: "theme-vocab-0",
        role: "user",
        content:
          "I want you to act as an English thematic vocabulary worksheet writer. I would like you to write a 250-word article on my requested theme. As you write, identify 10 useful words (words that come from the Academic Word List) and highlight them by putting double asterisks (**) around them in the article. Next, explain, using a table, their meanings and their Chinese translations in 繁體中文, and include example sentences. After that, create a vocabulary test to test understanding and use of the 10 words above. Set 5 MCQs and 5 gap-filling questions. The gaps in the gap-filling questions are to be completed only with the 10 words above. Finally, provide answers to the test.",
        date: "",
      },
      {
        id: "theme-vocab-1",
        role: "assistant",
        content:
          "Sure! What theme do you want me to write on?",
        date: "",
      },
    ],
    modelConfig: {
      model: "gpt-3.5-turbo",
      temperature: 1,
      max_tokens: 3000,
      presence_penalty: 0,
      frequency_penalty: 0,
      sendMemory: false,
      historyMessageCount: 4,
      compressMessageLengthThreshold: 3000,
    },
    lang: "en",
    builtin: true,
    createdAt: 1688899480413,
  },
  {
    avatar: "270d-fe0f",
    name: "英語診斷測試",
    context: [
      {
        id: "diag-test-0",
        role: "user",
        content:
          "Create a diagnostic test for me to evaluate my proficiency in English. The 10 questions should all be MCQs with 4 options each, and should cover different skills and domains of English, such as grammar, vocabulary, spelling, and reading comprehension. Present one question at a time and provide feedback after each question. Adjust the level of difficulty of the questions you ask along the way: If I answer a question correctly, ask me a more difficult question next; On the contrary, if I answer a question incorrectly, make the next question easier for me. At the end of the test, tell me my score and comment on my performance.",
        date: "",
      },
      {
        id: "diag-test-1",
        role: "assistant",
        content:
          "Alright! Are you ready to start the test?",
        date: "",
      },
    ],
    modelConfig: {
      model: "gpt-3.5-turbo",
      temperature: 1,
      max_tokens: 3000,
      presence_penalty: 0.5,
      frequency_penalty: 1,
      sendMemory: false,
      historyMessageCount: 10,
      compressMessageLengthThreshold: 3000,
    },
    lang: "en",
    builtin: true,
    createdAt: 1688899480413,
  },
];
