"use client"

import { useState } from "react"
import { Search, Sparkles, Send, Loader2, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { performDeepResearch } from "./actions"
import ReactMarkdown from "react-markdown"

export default function DeepResearchPage() {
    const [query, setQuery] = useState("")
    const [result, setResult] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!query.trim()) return

        setIsLoading(true)
        setError(null)
        try {
            const response = await performDeepResearch(query)
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
                <h1 className="text-3xl font-bold tracking-tight">Deep Research</h1>
                <p className="text-muted-foreground">
                    Synthesize academic papers and career data with high accuracy.
                </p>
            </div>

            <Card className="border-2 border-[#1E3A8A]/10 shadow-xl">
                <CardContent className="pt-6">
                    <form onSubmit={handleSearch} className="flex gap-2">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                                placeholder="Ask about scholarships, career paths, or academic terms..."
                                className="pl-10 h-12 text-base focus-visible:ring-[#1E3A8A]"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                disabled={isLoading}
                            />
                        </div>
                        <Button
                            type="submit"
                            className="h-12 px-6 bg-[#1E3A8A] hover:bg-[#1E3A8A]/90 transition-all font-semibold"
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <Loader2 className="h-5 w-5 animate-spin" />
                            ) : (
                                <>
                                    <Sparkles className="mr-2 h-4 w-4" />
                                    Research
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
                <div className="space-y-4 animate-pulse">
                    <div className="h-4 bg-muted rounded w-3/4" />
                    <div className="h-4 bg-muted rounded w-1/2" />
                    <div className="h-4 bg-muted rounded w-5/6" />
                </div>
            )}

            {result && !isLoading && (
                <Card className="border-[#1E3A8A]/5 shadow-lg bg-white overflow-hidden">
                    <CardHeader className="border-b bg-[#F8FAFC]">
                        <div className="flex items-center gap-2">
                            <BookOpen className="h-5 w-5 text-[#1E3A8A]" />
                            <CardTitle className="text-lg">Research Synthesis</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className="py-8 prose prose-slate max-w-none">
                        <ReactMarkdown>{result}</ReactMarkdown>
                    </CardContent>
                </Card>
            )}

            {!result && !isLoading && (
                <div className="grid gap-4 md:grid-cols-2">
                    <Button
                        variant="outline"
                        className="h-auto p-4 flex flex-col items-start gap-1 text-left hover:border-[#1E3A8A] transition-all"
                        onClick={() => setQuery("What is a Pell Grant and how do I apply?")}
                    >
                        <span className="font-semibold text-[#1E3A8A]">Pell Grant Basics</span>
                        <span className="text-xs text-muted-foreground">Understanding federal financial aid for beginners.</span>
                    </Button>
                    <Button
                        variant="outline"
                        className="h-auto p-4 flex flex-col items-start gap-1 text-left hover:border-[#1E3A8A] transition-all"
                        onClick={() => setQuery("How do I start a career in software engineering as a first-gen student?")}
                    >
                        <span className="font-semibold text-[#1E3A8A]">Career in Tech</span>
                        <span className="text-xs text-muted-foreground">Roadmap and networking tips for future developers.</span>
                    </Button>
                </div>
            )}
        </div>
    )
}
