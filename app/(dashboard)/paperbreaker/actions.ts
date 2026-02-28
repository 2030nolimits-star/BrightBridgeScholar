"use server"

import { geminiModel } from "@/lib/gemini"
import { auth0 } from "@/lib/auth0"
import { supabase } from "@/lib/supabase"

export async function simplifyText(text: string) {
    const session = await auth0.getSession()
    if (!session) {
        throw new Error("Unauthorized")
    }

    try {
        const prompt = `
      You are an expert at simplifying complex language for first-generation students.
      The following text is from a professional or academic document:
      
      "${text}"
      
      Please provide:
      1. TL;DR: A one-sentence summary.
      2. Plain English Version: Explain the most important parts as if you are talking to a friend.
      3. Key Definitions: If there are technical terms, list and define them simply.
      
      Keep the tone helpful and accessible. Avoid academic elitism.
    `

        const result = await geminiModel.generateContent(prompt)
        const response = await result.response
        const textResult = response.text()

        // Save to Supabase
        try {
            await supabase.from('research_history').insert({
                user_id: session.user.sub,
                type: 'paperbreaker',
                query: text.substring(0, 500),
                result: textResult,
                created_at: new Date().toISOString()
            })
        } catch (e) {
            console.warn("Supabase insert failed:", e)
        }

        return textResult
    } catch (error) {
        console.error("PaperBreaker Error:", error)
        throw new Error("Failed to simplify text. Please check your Gemini API key.")
    }
}
