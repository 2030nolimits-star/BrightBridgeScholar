"use client"

import { useState } from "react"
import { FileSearch, Sparkles, Loader2, FileText, Eraser } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { simplifyText } from "./actions"
import ReactMarkdown from "react-markdown"

export default function PaperBreakerPage() {
    const [text, setText] = useState("")
    const [result, setResult] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const handleSimplify = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!text.trim()) return

        setIsLoading(true)
        setError(null)
        try {
            const response = await simplifyText(text)
            setResult(response)
        } catch (err: any) {
            setError(err.message || "Something went wrong")
        } finally {
            setIsLoading(false)
        }
    }

    const clearAll = () => {
        setText("")
        setResult(null)
        setError(null)
    }

    return (
        <div className="space-y-8 max-w-4xl mx-auto">
            <div className="text-center space-y-2">
                <h1 className="text-3xl font-bold tracking-tight">PaperBreaker</h1>
                <p className="text-muted-foreground">
                    Break down complex documents into simple, jargon-free explanations.
                </p>
            </div>

            <Card className="border-2 border-purple-500/10 shadow-xl overflow-hidden">
                <CardHeader className="bg-purple-500/5 border-b border-purple-500/10">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <FileSearch className="h-5 w-5 text-purple-600" />
                            <CardTitle>Input Document Text</CardTitle>
                        </div>
                        <Button variant="ghost" size="sm" onClick={clearAll} className="text-muted-foreground hover:text-purple-600">
                            <Eraser className="h-4 w-4 mr-2" />
                            Clear
                        </Button>
                    </div>
                </CardHeader>
                <CardContent className="pt-6">
                    <form onSubmit={handleSimplify} className="space-y-4">
                        <Textarea
                            placeholder="Paste the abstract, scholarship requirements, or academic text here..."
                            className="min-h-[200px] text-base focus-visible:ring-purple-500 resize-none"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            disabled={isLoading}
                        />
                        <Button
                            type="submit"
                            className="w-full h-12 bg-purple-600 hover:bg-purple-700 transition-all font-semibold"
                            disabled={isLoading || !text.trim()}
                        >
                            {isLoading ? (
                                <Loader2 className="h-5 w-5 animate-spin" />
                            ) : (
                                <>
                                    <Sparkles className="mr-2 h-4 w-4" />
                                    Simplify Document
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
                    <div className="flex items-center gap-2 text-purple-600 animate-pulse">
                        <Sparkles className="h-4 w-4 animate-bounce" />
                        <span className="text-sm font-medium">Gemini is breaking it down...</span>
                    </div>
                    <div className="space-y-3 animate-pulse">
                        <div className="h-4 bg-muted rounded w-full" />
                        <div className="h-4 bg-muted rounded w-11/12" />
                        <div className="h-4 bg-muted rounded w-4/5" />
                    </div>
                </div>
            )}

            {result && !isLoading && (
                <Card className="border-purple-500/5 shadow-2xl bg-white overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <CardHeader className="border-b bg-[#F8FAFC]">
                        <div className="flex items-center gap-2">
                            <FileText className="h-5 w-5 text-purple-600" />
                            <CardTitle className="text-lg">Simplified Explanation</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className="py-8 prose prose-slate max-w-none prose-headings:text-purple-900 prose-strong:text-purple-700 prose-a:text-purple-600">
                        <ReactMarkdown>{result}</ReactMarkdown>
                    </CardContent>
                </Card>
            )}

            {!result && !isLoading && (
                <div className="text-center text-sm text-muted-foreground italic">
                    Tip: Paste a scholarship's "Eligibility Requirements" to understand them instantly.
                </div>
            )}
        </div>
    )
}
