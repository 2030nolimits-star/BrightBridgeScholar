"use server"

import { geminiModel } from "@/lib/gemini"
import { supabase } from "@/lib/supabase"

export async function performDeepResearch(query: string) {
    // Auth0 session check removed
    const user = { sub: "mock-user-id" }

    try {
        const prompt = `
      You are an expert academic and career advisor for first-generation college students.
      The user is asking: "${query}"
      
      Provide a comprehensive, encouraging, and highly structured response.
      1. Summary: A quick overview.
      2. Key Insights: Break down complex concepts.
      3. Actionable Steps: Specific things the student can do now.
      4. Resources: Types of resources they should look for (e.g., Pell Grant info, specific networking platforms).
      
      Use clear, jargon-free language. If you use technical terms, explain them.
    `

        const result = await geminiModel.generateContent(prompt)
        const response = await result.response
        const text = response.text()

        // Save to Supabase (Optional: will fail gracefully if table not found)
        try {
            await supabase.from('research_history').insert({
                user_id: user.sub,
                type: 'deep-research',
                query: query,
                result: text,
                created_at: new Date().toISOString()
            })
        } catch (e) {
            console.warn("Supabase insert failed, check if 'research_history' table exists:", e)
        }

        return text
    } catch (error) {
        console.error("Deep Research Error:", error)
        throw new Error("API Error: " + (error instanceof Error ? error.message : String(error)))
    }
}
