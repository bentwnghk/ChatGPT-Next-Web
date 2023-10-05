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
          "Do a grammar check on the text I provide. Highlight the revised words for me.",
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
      model: "gpt-4",
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
          "Give me 5 different versions of the text I provide.",
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
      model: "gpt-4",
      temperature: 1,
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
    name: "詞彙複習測驗",
    context: [
      {
        id: "vocab-review-0",
        role: "user",
        content:
          "Generate at random a 15-item vocabulary list from either Oxford 5000 or the Academic Word List, beginning with different letters, with the order of the entries in the list randomized, in the format '**English word** [繁體中文定義] <word class symbol>: example sentence 例句中文翻譯'. Next, generate a 15-item MCQ test for the list above. Finally, provide the correct answers at the end of the test.",
        date: "",
      },
      {
        id: "vocab-review-1",
        role: "assistant",
        content:
          "Sure! Please choose one: (1) Oxford 5000 or (2) the Academic Word List",
        date: "",
      },
    ],
    modelConfig: {
      model: "gpt-4",
      temperature: 1,
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
    avatar: "1f4d6",
    name: "語法重溫",
    context: [
      {
        id: "grammar-lesson-0",
        role: "user",
        content:
          "Generate a worksheet to help me learn and practice English grammar. Give me some lesson notes first and then generate 10 MCQs. Provide the correct answers at the end of the worksheet.",
        date: "",
      },
      {
        id: "grammar-lesson-1",
        role: "assistant",
        content:
          "Sure! Please start by telling me which grammar topic you want for the worksheet.",
        date: "",
      },
    ],
    modelConfig: {
      model: "gpt-4",
      temperature: 1,
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
    avatar: "270d-fe0f",
    name: "詞彙表產生器",
    context: [
      {
        id: "glossary-gen-0",
        role: "user",
        content:
          "Generate a glossary for the words I provide, in the format '**English word** [繁體中文定義] <word class symbol>: example sentence 例句中文翻譯'.",
        date: "",
      },
      {
        id: "glossary-gen-1",
        role: "assistant",
        content:
          "Sure, I can help you with that. Please provide me with the words you want, seperated by commas.",
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
      model: "gpt-4",
      temperature: 1,
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
      model: "gpt-4",
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
  {
    avatar: "1f9d1-200d-1f3eb",
    name: "詞彙練習",
    context: [
      {
        id: "vocab-worksheet-0",
        role: "user",
        content:
          "I want you to act as an English vocabulary worksheet generator. I want you to create a worksheet that tests students' understanding of my requested vocabulary items. As for the test items to be included in the worksheet, I want 5 questions of matching synonyms, 5 multiple-choice questions, and 5 fill-in-the-blank questions. The target vocabulary items can be repeated in the various test items. Finally, provide the answers at the end of the worksheet.",
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
      model: "gpt-4",
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
      model: "gpt-4",
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
          "I want you to act as a reading comprehension exercise generator. Write a passage on my requested topic and formulate MCQs to test students' understanding of the passage. The types of questions you ask must include literal, inference, evaluation, application, analysis, synthesis, vocabulary, summary, and reference questions. Finally, provide the correct answers at the end of the test.",
        date: "",
      },
      {
        id: "vocab-worksheet-1",
        role: "assistant",
        content:
          "Sure! Please provide me with a topic, the desired length of the passage, the level of difficulty of the words to be used in the passage, and the number of MCQs to be set.",
        date: "",
      },
    ],
    modelConfig: {
      model: "gpt-4",
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
      model: "gpt-4",
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
    avatar: "1f9e9",
    name: "摘要填空練習",
    context: [
      {
        id: "summary-cloze-0",
        role: "user",
        content:
          "I want you to act as a summary cloze exercise generator. Generate one English paragraph, and then rewrite it into another paragraph. The new paragraph has to be written using words and sentence structures that are different from the original paragraph. You must leave 5 blanks in the new paragraph, the choice of which depends on their lexical value, and ask students to fill in each blank with an English word that may or may not be found in the original paragraph. Provide the answers at the end of the exercise.",
        date: "",
      },
      {
        id: "summary-cloze-1",
        role: "assistant",
        content:
          "Sure! What theme do you want me to write a paragraph on?",
        date: "",
      },
    ],
    modelConfig: {
      model: "gpt-4",
      temperature: 1,
      max_tokens: 2000,
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
    avatar: "1f9e9",
    name: "隨機詞彙測驗",
    context: [
      {
        id: "random-vocab-quiz-0",
        role: "user",
        content:
          "Help me study vocabulary: write a sentence for me to fill in the blank, and I'll try to pick the correct option. Automatically give me more sentences until I tell you to stop.",
        date: "",
      },
      {
        id: "random-vocab-quiz-1",
        role: "assistant",
        content:
          "Sure! Are you ready to take on the challenge?",
        date: "",
      },
    ],
    modelConfig: {
      model: "gpt-4",
      temperature: 1,
      max_tokens: 2000,
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
];
