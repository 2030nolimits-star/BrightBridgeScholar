"use client"

import { useState } from "react"
import { Map, Sparkles, Loader2, Compass, GraduationCap, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { generateRoadmap } from "./actions"
import ReactMarkdown from "react-markdown"

export default function PathFinderPage() {
    const [major, setMajor] = useState("")
    const [goals, setGoals] = useState("")
    const [result, setResult] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const handleGenerate = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!major.trim() || !goals.trim()) return

        setIsLoading(true)
        setError(null)
        try {
            const response = await generateRoadmap(major, goals)
            setResult(response)
        } catch (err: any) {
            setError(err.message || "Something went wrong")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="space-y-8 max-w-4xl mx-auto">
            <div className="text-center space-y-2">
                <h1 className="text-3xl font-bold tracking-tight">PathFinder AI</h1>
                <p className="text-muted-foreground">
                    Generate a personalized roadmap for your academic major or career goals.
                </p>
            </div>

            <Card className="border-2 border-emerald-500/10 shadow-xl overflow-hidden">
                <CardHeader className="bg-emerald-500/5 border-b border-emerald-500/10">
                    <div className="flex items-center gap-2">
                        <Compass className="h-5 w-5 text-emerald-600" />
                        <CardTitle>Your Background & Ambitions</CardTitle>
                    </div>
                </CardHeader>
                <CardContent className="pt-6">
                    <form onSubmit={handleGenerate} className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="major" className="text-sm font-semibold">What is your intended major or field of study?</Label>
                            <div className="relative">
                                <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input
                                    id="major"
                                    placeholder="e.g. Computer Science, Public Health, Psychology..."
                                    className="pl-10 focus-visible:ring-emerald-500"
                                    value={major}
                                    onChange={(e) => setMajor(e.target.value)}
                                    disabled={isLoading}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="goals" className="text-sm font-semibold">What are your career goals? (Be as specific as you like)</Label>
                            <div className="relative">
                                <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input
                                    id="goals"
                                    placeholder="e.g. Become a software engineer at a startup, work in hospital administration..."
                                    className="pl-10 focus-visible:ring-emerald-500"
                                    value={goals}
                                    onChange={(e) => setGoals(e.target.value)}
                                    disabled={isLoading}
                                />
                            </div>
                        </div>

                        <Button
                            type="submit"
                            className="w-full h-12 bg-emerald-600 hover:bg-emerald-700 transition-all font-semibold"
                            disabled={isLoading || !major.trim() || !goals.trim()}
                        >
                            {isLoading ? (
                                <Loader2 className="h-5 w-5 animate-spin" />
                            ) : (
                                <>
                                    <Sparkles className="mr-2 h-4 w-4" />
                                    Generate Roadmap
                                </>
                            )}
                        </Button>
                    </form>
                </CardContent>
            </Card>

            {error && (
                <Card className="border-destructive bg-destructive/10">
                    <CardContent className="py-4 text-destructive text-sm font-medium">
                        {error}
                    </CardContent>
                </Card>
            )}

            {isLoading && (
                <div className="space-y-4">
                    <div className="h-4 bg-muted rounded w-full animate-pulse" />
                    <div className="h-4 bg-muted rounded w-5/6 animate-pulse" />
                    <div className="h-4 bg-muted rounded w-4/5 animate-pulse" />
                </div>
            )}

            {result && !isLoading && (
                <Card className="border-emerald-500/5 shadow-2xl bg-white overflow-hidden animate-in zoom-in duration-500">
                    <CardHeader className="border-b bg-[#F8FAFC]">
                        <div className="flex items-center gap-2">
                            <Map className="h-5 w-5 text-emerald-600" />
                            <CardTitle className="text-lg">Your Success Roadmap</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className="py-8 prose prose-slate max-w-none prose-headings:text-emerald-900 prose-strong:text-emerald-700">
                        <ReactMarkdown>{result}</ReactMarkdown>
                    </CardContent>
                </Card>
            )}
        </div>
    )
}
