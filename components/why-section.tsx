import { Heart, Lightbulb, Users, Shield, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FloatingRocket, WavyLine } from "@/components/decorations"

const reasons = [
  {
    icon: Heart,
    title: "Built for First-Gen Students",
    description:
      "Designed specifically for students who lack access to traditional mentorship, structured guidance, and career planning support.",
    bg: "bg-[#FFF1F2]",
    iconColor: "text-[#E11D48]",
    border: "border-[#FECDD3]",
  },
  {
    icon: Lightbulb,
    title: "AI-Powered Intelligence",
    description:
      "Powered by Google Gemini for deep research capabilities, paper comprehension, and personalized career analysis.",
    bg: "bg-[#EFF6FF]",
    iconColor: "text-[#1E3A8A]",
    border: "border-[#BFDBFE]",
  },
  {
    icon: Users,
    title: "Democratizing Access",
    description:
      "BrightBridgeScholar levels the playing field \u2014 giving every student access to the academic intelligence and career insights they deserve.",
    bg: "bg-[#ECFDF5]",
    iconColor: "text-[#10B981]",
    border: "border-[#A7F3D0]",
  },
  {
    icon: Shield,
    title: "An Equalizer, Not Just a Tool",
    description:
      "Many struggle not from lack of talent, but lack of guidance. BrightBridgeScholar is an equalizer that bridges the gap between ambition and opportunity.",
    bg: "bg-[#EDE9FE]",
    iconColor: "text-[#7C3AED]",
    border: "border-[#C4B5FD]",
  },
]

export function WhySection() {
  return (
    <section id="why-us" className="relative py-24 md:py-32 bg-white overflow-hidden">
      <WavyLine className="absolute top-0 left-0 w-full h-8 -translate-y-4" />
      <FloatingRocket className="pointer-events-none absolute top-20 right-6 w-20 opacity-30 md:w-24 md:opacity-40" />

      {/* Pastel blob */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#DBEAFE] blur-[150px] opacity-30" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-[#EFF6FF] px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-[#1E3A8A]">
            Why BrightBridgeScholar
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground font-mono md:text-5xl">
            Not Just a Tool.{" "}
            <span className="text-[#10B981]">An Equalizer.</span>
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Many first-generation students struggle not because of lack of talent —
            but because of lack of guidance. BrightBridgeScholar changes that.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className={`rounded-2xl border ${reason.border} bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg`}
            >
              <div className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${reason.bg}`}>
                <reason.icon className={`h-7 w-7 ${reason.iconColor}`} />
              </div>
              <h3 className="text-xl font-bold text-foreground font-mono">
                {reason.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 relative rounded-3xl bg-[#1E3A8A] p-10 text-center md:p-16 overflow-hidden shadow-2xl shadow-[#1E3A8A]/20">
          {/* Decorative circles inside CTA */}
          <div className="pointer-events-none absolute top-[-40px] right-[-40px] h-[200px] w-[200px] rounded-full bg-[#3B82F6] opacity-20 blur-[40px]" />
          <div className="pointer-events-none absolute bottom-[-30px] left-[-30px] h-[150px] w-[150px] rounded-full bg-[#10B981] opacity-20 blur-[40px]" />

          <div className="relative">
            <h3 className="text-balance text-3xl font-bold tracking-tight text-white font-mono md:text-4xl">
              Ready to Bridge the Gap?
            </h3>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-lg leading-relaxed text-blue-200">
              Join thousands of students already using BrightBridgeScholar to research
              smarter, understand deeper, and plan their futures with confidence.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="bg-[#10B981] text-white font-semibold hover:bg-[#10B981]/90 gap-2 px-8 text-base shadow-lg shadow-[#10B981]/30" asChild>
                <Link href="/api/auth/login?screen_hint=signup">
                  Get Started for Free
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 border-blue-400/40 text-white hover:bg-white/10 hover:border-white/40 px-8 text-base">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
