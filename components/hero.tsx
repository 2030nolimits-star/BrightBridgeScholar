import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FloatingBooks, FloatingAtom, FloatingRocket, DottedGrid } from "@/components/decorations"

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-32 bg-background">
      {/* Pastel gradient blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-100px] left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#DBEAFE] blur-[120px] opacity-60" />
        <div className="absolute bottom-[-50px] right-[-50px] h-[400px] w-[400px] rounded-full bg-[#D1FAE5] blur-[100px] opacity-50" />
        <div className="absolute top-1/3 left-[-50px] h-[300px] w-[300px] rounded-full bg-[#EDE9FE] blur-[100px] opacity-40" />
      </div>

      {/* Decorative graphics */}
      <FloatingBooks className="pointer-events-none absolute top-28 left-8 w-28 opacity-40 md:w-36 md:opacity-60 lg:left-16" />
      <FloatingAtom className="pointer-events-none absolute top-40 right-8 w-24 opacity-40 md:w-32 md:opacity-60 lg:right-20" />
      <FloatingRocket className="pointer-events-none absolute bottom-10 left-1/4 w-20 opacity-30 md:w-24 md:opacity-50" />
      <DottedGrid className="pointer-events-none absolute bottom-0 right-0 w-48 opacity-20 md:w-64" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#BFDBFE] bg-[#EFF6FF] px-4 py-1.5">
            <Sparkles className="h-4 w-4 text-[#1E3A8A]" />
            <span className="text-sm font-medium text-[#1E3A8A]">
              Powered by Google Gemini
            </span>
          </div>

          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground font-mono md:text-6xl lg:text-7xl">
            Your Intelligent Academic{" "}
            <span className="text-[#10B981]">{"&"} Career</span> Co-Pilot
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            BrightBridgeScholar bridges the gap between ambition and opportunity —
            empowering first-generation students with AI-driven research, paper
            simplification, and career pathway planning.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="bg-[#1E3A8A] text-white font-semibold hover:bg-[#1E3A8A]/90 gap-2 px-8 text-base shadow-lg shadow-[#1E3A8A]/20" asChild>
              <Link href="/dashboard">
                Go to Dashboard
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 border-[#CBD5E1] text-foreground hover:bg-[#EFF6FF] hover:border-[#93C5FD] px-8 text-base">
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { value: "50K+", label: "Students Helped" },
              { value: "1M+", label: "Papers Analyzed" },
              { value: "200+", label: "Career Paths" },
              { value: "98%", label: "Satisfaction" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-border bg-white p-5 shadow-sm">
                <div className="text-3xl font-bold text-[#1E3A8A] font-mono md:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
