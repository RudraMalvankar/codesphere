import { GoogleGenerativeAI } from "generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const generateContent = async (prompt) => {

const result = await model.generateContent(prompt);
return result.response.text();


};