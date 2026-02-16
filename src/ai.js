
import { GoogleGenerativeAI } from "@google/generative-ai";

// Replace with your actual key from https://aistudio.google.com
const GEMINI_API_KEY = "AIzaSyAMZ02mPYTj07Bo9vEIrRCINZ9MvHCizIw";

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

const systemPrompt = `You are an assistant that receives a list of ingredients that a user has and suggests
 a recipe they could make with some or all of those ingredients. You don't need to use every ingredient 
 they mention in your recipe. The recipe can include additional ingredients they didn't mention,
  but try not to include too many extra ingredients. Format your response in markdown to make it easier
   to render to a web page`;

export default async function getRecipeFromGemini(ingredients) {
    const ingredientsString = ingredients.join(', ');
    
    try {
        // In Gemini, system instructions are passed during model initialization
        const model = genAI.getGenerativeModel({ 
            model: "gemini-2.5-flash",
            systemInstruction: systemPrompt 
        });

        const userPrompt = `I have ${ingredientsString}. Give me a recipe you would recommend I make!`;

        const result = await model.generateContent(userPrompt);
        const response = await result.response;
        
        return response.text();
    } catch (err) {
        console.error("Gemini Error:", err.message);
    }
}




