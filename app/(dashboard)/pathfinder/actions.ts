"use server"

import { geminiModel } from "@/lib/gemini"
import { auth0 } from "@/lib/auth0"
import { supabase } from "@/lib/supabase"

export async function generateRoadmap(major: string, careerGoals: string) {
    const session = await auth0.getSession()
    if (!session) {
        throw new Error("Unauthorized")
    }

    try {
        const prompt = `
      You are an expert career and academic roadmap generator for first-generation students.
      User Profile:
      - Intended Major/Focus: ${major}
      - Career Goals: ${careerGoals}
      
      Generate a detailed roadmap with the following structure:
      1. Year 1-2: Fundamental academic steps and exploration.
      2. Year 3-4: Advanced coursework, internships, and networking.
      3. Post-Grad: Early career steps or grad school prep.
      4. First-Gen "Pro Tips": Advice specifically for students who don't have a family background in this field.
      
      Format with clear headings and bullet points.
    `

        const result = await geminiModel.generateContent(prompt)
        const response = await result.response
        const textResult = response.text()

        // Save to Supabase
        try {
            await supabase.from('research_history').insert({
                user_id: session.user.sub,
                type: 'pathfinder',
                query: `${major} | ${careerGoals}`,
                result: textResult,
                created_at: new Date().toISOString()
            })
        } catch (e) {
            console.warn("Supabase insert failed:", e)
        }

        return textResult
    } catch (error) {
        console.error("PathFinder Error:", error)
        throw new Error("Failed to generate roadmap. Please check your Gemini API key.")
    }
}
