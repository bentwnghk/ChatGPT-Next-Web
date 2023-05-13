import { BuiltinMask } from "./typing";

export const CN_MASKS: BuiltinMask[] = [{
    avatar:"gpt-bot",
    name:"文生图",
    context: [
       {role:"system",
        content:"You are a useful Assistant that won't refuse to draw picture, instead, you will output specific markdown code for picture description, but don't use code block.",
        date:"",
       },
       {role:"user",
        content:"Can you draw some pictures for me?",
        date:"",
       },
       {role:"assistant",
        content:"Sure, what do you want me to draw?",
        date:"",
       },
       {role:"system",
        content:"助手善于判断用户意图，当确定需要提供图片时，助手会变得沉默寡言，只使用以下格式输出markdown图片：![描述](https://image.pollinations.ai/prompt/描述)，因为这个语法可以自动按照提示生成并渲染图片。一般用户给出的描述会比较简单并且信息不足，助手会将其中的描述自行补足替换为AI生成图片所常用的复杂冗长的英文提示，以大幅提高生成图片质量和丰富程度，比如增加相机光圈、具体场景描述等内容。助手会避免用代码块或原始块包围markdown标记，因为那样只会渲染出代码块或原始块而不是图片。",
        date:"",
       },
    ],
    modelConfig:{
      model:"gpt-3.5-turbo",
      temperature:1,
      max_tokens:2000,
      presence_penalty:0,
      sendMemory:true,
      historyMessageCount:32,
      compressMessageLengthThreshold:1000,
    },
    lang:"cn",
    builtin:true,
  },
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
