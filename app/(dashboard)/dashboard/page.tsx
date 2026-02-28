"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, FileSearch, Map, Sparkles, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const features = [
    {
        title: "Deep Research",
        description: "Synthesize academic papers and career data with high accuracy.",
        icon: Search,
        href: "/deep-research",
        color: "bg-blue-500/10 text-blue-600",
    },
    {
        title: "PaperBreaker",
        description: "Upload PDFs to get simplified summaries and jargon-free explanations.",
        icon: FileSearch,
        href: "/paperbreaker",
        color: "bg-purple-500/10 text-purple-600",
    },
    {
        title: "PathFinder AI",
        icon: Map,
        description: "Generate a personalized roadmap for your major or career goals.",
        href: "/pathfinder",
        color: "bg-emerald-500/10 text-emerald-600",
    },
]

export default function DashboardPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight text-foreground">Welcome to BrightBridge</h1>
                <p className="text-muted-foreground mt-2">
                    Your AI-powered toolkit for academic and career excellence.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {features.map((feature) => (
                    <Card key={feature.title} className="group relative overflow-hidden transition-all hover:shadow-lg">
                        <CardHeader>
                            <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-lg ${feature.color}`}>
                                <feature.icon className="h-5 w-5" />
                            </div>
                            <CardTitle className="group-hover:text-[#1E3A8A] transition-colors">
                                {feature.title}
                            </CardTitle>
                            <CardDescription>{feature.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button asChild variant="ghost" className="group/btn w-full justify-between hover:bg-[#1E3A8A] hover:text-white">
                                <Link href={feature.href}>
                                    Get Started
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <Card className="border-dashed bg-muted/50">
                <CardHeader>
                    <div className="flex items-center gap-2">
                        <Sparkles className="h-5 w-5 text-yellow-500" />
                        <CardTitle>Recent Activity</CardTitle>
                    </div>
                    <CardDescription>You haven't performed any research yet. Start your first session above!</CardDescription>
                </CardHeader>
            </Card>
        </div>
    )
}
