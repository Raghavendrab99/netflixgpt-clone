import { GeminiAI_Key } from "./constants";

const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(GeminiAI_Key);


export default genAI;