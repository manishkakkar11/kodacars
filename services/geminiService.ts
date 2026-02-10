
import { GoogleGenAI } from "@google/genai";

// Fix: Initializing GoogleGenAI with a named parameter using process.env.API_KEY directly.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getYieldStrategy = async (industry: string, capacity: string, goals: string): Promise<string> => {
  if (!process.env.API_KEY) {
    console.warn("API Key is missing. Returning mock data.");
    return `KodaAI Insight: Based on your capacity of ${capacity} spaces in the ${industry} sector, implementing our Dynamic Yield engine could increase RevPAR by approximately 18% within Q1 through automated rate parity adjustments.`;
  }

  try {
    const prompt = `
      You are a Senior Revenue Management Consultant for KodaCars Enterprise. 
      KodaCars provides AI-driven yield management and distribution solutions for Near-Airport Parking operators and Hotels with parking assets.
      
      The user represents a "${industry}" facility with a capacity of "${capacity}" spaces.
      Their primary goal is: "${goals}".

      Provide a concise, 3-point strategic recommendation on how KodaCars can help them maximize Revenue Per Available Space (RevPAS) or operational efficiency.
      Focus on concepts like dynamic pricing, channel distribution, and inventory fencing.
      Adopt a professional, high-end consulting tone—authoritative, precise, and business-focused.
      Do not use markdown formatting like bolding or bullet points, just use plain text with line breaks.
      Limit response to 100 words.
    `;

    // Fix: Using correct model name for basic text tasks ('gemini-3-flash-preview') 
    // and calling generateContent directly from the client.
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });

    // Fix: Accessing .text as a property, not a method, as per SDK guidelines.
    return response.text || "Unable to generate strategy at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Our AI strategy consultant is currently offline. Please contact sales for a manual assessment.";
  }
};
