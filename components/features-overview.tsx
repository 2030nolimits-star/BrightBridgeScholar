import { Search, FileText, GraduationCap } from "lucide-react"
import { WavyLine } from "@/components/decorations"

const features = [
  {
    icon: Search,
    title: "Deep Research Engine",
    description:
      "Performs comprehensive, multi-source research across the web. Analyzes papers, news, and reports to generate structured literature reviews in minutes.",
    href: "#deep-research",
    iconBg: "bg-[#EFF6FF]",
    iconColor: "text-[#1E3A8A]",
    borderHover: "hover:border-[#93C5FD]",
    shadowHover: "hover:shadow-lg hover:shadow-[#DBEAFE]/50",
    tag: "bg-[#DBEAFE] text-[#1E3A8A]",
  },
  {
    icon: FileText,
    title: "PaperBreaker",
    description:
      "Upload any research paper and get clear summaries, simplified explanations, equation breakdowns, and revision quizzes at multiple complexity levels.",
    href: "#paperbreaker",
    iconBg: "bg-[#ECFDF5]",
    iconColor: "text-[#10B981]",
    borderHover: "hover:border-[#6EE7B7]",
    shadowHover: "hover:shadow-lg hover:shadow-[#D1FAE5]/50",
    tag: "bg-[#D1FAE5] text-[#047857]",
  },
  {
    icon: GraduationCap,
    title: "PathFinder AI",
    description:
      "Enter your grades, interests, skills, and constraints. Receive personalized career paths, scholarship recommendations, and a 6-month preparation roadmap.",
    href: "#pathfinder",
    iconBg: "bg-[#EDE9FE]",
    iconColor: "text-[#7C3AED]",
    borderHover: "hover:border-[#C4B5FD]",
    shadowHover: "hover:shadow-lg hover:shadow-[#EDE9FE]/50",
    tag: "bg-[#EDE9FE] text-[#7C3AED]",
  },
]

export function FeaturesOverview() {
  return (
    <section id="features" className="relative py-24 md:py-32 bg-white">
      {/* Top wave divider */}
      <WavyLine className="absolute top-0 left-0 w-full h-8 -translate-y-4" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-[#EFF6FF] px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-[#1E3A8A]">
            Core Features
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground font-mono md:text-5xl">
            Three Engines, One Platform
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Everything you need to research smarter, understand deeper, and plan your future with confidence.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <a
              key={feature.title}
              href={feature.href}
              className={`group relative rounded-2xl border border-border bg-white p-8 transition-all duration-300 ${feature.borderHover} ${feature.shadowHover}`}
            >
              <span className={`mb-4 inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${feature.tag}`}>
                {"Feature"}
              </span>
              <div className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${feature.iconBg} ${feature.iconColor}`}>
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-foreground font-mono">
                {feature.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
              <div className={`mt-5 text-sm font-medium ${feature.iconColor} opacity-0 transition-opacity group-hover:opacity-100`}>
                {"Learn more \u2192"}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
