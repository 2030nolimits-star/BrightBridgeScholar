import {
  GraduationCap,
  TrendingUp,
  BookMarked,
  Award,
  Building2,
  Map,
  ArrowRight,
} from "lucide-react"
import { FloatingGradCap, FloatingChart } from "@/components/decorations"

const inputs = [
  "Grades",
  "Interests",
  "Skills",
  "Financial Constraints",
]

const outputs = [
  { icon: TrendingUp, label: "Identifies high-demand career paths" },
  { icon: BookMarked, label: "Analyzes trending skills" },
  { icon: GraduationCap, label: "Recommends relevant courses" },
  { icon: Award, label: "Suggests scholarships" },
  { icon: Building2, label: "Finds top companies hiring" },
  { icon: Map, label: "Generates a 6-month preparation roadmap" },
]

export function PathFinder() {
  return (
    <section id="pathfinder" className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Pastel blobs */}
      <div className="pointer-events-none absolute top-0 left-0 h-[400px] w-[400px] rounded-full bg-[#EDE9FE] blur-[120px] opacity-40" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-[#DBEAFE] blur-[100px] opacity-40" />
      <FloatingGradCap className="pointer-events-none absolute top-20 left-4 w-20 opacity-30 md:w-28 md:opacity-40 lg:left-10" />
      <FloatingChart className="pointer-events-none absolute bottom-16 right-4 w-24 opacity-25 md:w-32 md:opacity-35 lg:right-10" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left - Content */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#EDE9FE] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#7C3AED]">
              <GraduationCap className="h-3.5 w-3.5" />
              PathFinder AI
            </span>

            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight text-foreground font-mono md:text-4xl">
              Career Navigation for{" "}
              <span className="text-[#7C3AED]">First-Gen Students</span>
            </h2>

            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              PathFinder AI empowers students with personalized, data-driven 
              career direction — replacing the mentorship many never had access to.
            </p>

            <div className="mt-8">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                What You Enter
              </h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {inputs.map((input) => (
                  <span
                    key={input}
                    className="rounded-full border border-border bg-white px-4 py-1.5 text-sm text-foreground shadow-sm"
                  >
                    {input}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                What You Receive
              </h4>
              <ul className="mt-4 space-y-3">
                {outputs.map((item) => (
                  <li key={item.label} className="flex items-center gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#EDE9FE]">
                      <item.icon className="h-4 w-4 text-[#7C3AED]" />
                    </div>
                    <span className="text-muted-foreground">{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right - Card Visual */}
          <div className="relative">
            <div className="rounded-2xl border border-border bg-white p-6 shadow-xl shadow-[#EDE9FE]/30">
              {/* Mock career dashboard */}
              <div className="flex items-center gap-3 border-b border-border pb-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#EDE9FE]">
                  <GraduationCap className="h-4 w-4 text-[#7C3AED]" />
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">
                    Your Career Roadmap
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Based on your profile
                  </div>
                </div>
              </div>

              {/* Career paths */}
              <div className="mt-4 space-y-3">
                {[
                  { role: "Data Scientist", match: "94%", demand: "High", color: "bg-[#ECFDF5] border-[#A7F3D0] text-[#047857]" },
                  { role: "ML Engineer", match: "89%", demand: "Very High", color: "bg-[#EFF6FF] border-[#BFDBFE] text-[#1E3A8A]" },
                  { role: "Research Analyst", match: "85%", demand: "Medium", color: "bg-[#EDE9FE] border-[#C4B5FD] text-[#7C3AED]" },
                ].map((path) => (
                  <div key={path.role} className={`flex items-center justify-between rounded-xl border p-4 ${path.color}`}>
                    <div>
                      <div className="text-sm font-medium text-foreground">{path.role}</div>
                      <div className="text-xs text-muted-foreground">
                        Demand: {path.demand}
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm font-bold text-[#10B981]">{path.match}</span>
                      <span className="text-xs text-muted-foreground">match</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Roadmap preview */}
              <div className="mt-4 rounded-xl bg-[#F8FAFC] border border-border p-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#1E3A8A]">
                  6-Month Roadmap
                </div>
                <div className="mt-3 space-y-3">
                  {[
                    { month: "Month 1-2", task: "Python & Statistics Foundations" },
                    { month: "Month 3-4", task: "Machine Learning Specialization" },
                    { month: "Month 5-6", task: "Portfolio Projects & Applications" },
                  ].map((step) => (
                    <div key={step.month} className="flex items-center gap-3">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#ECFDF5] border border-[#A7F3D0]">
                        <ArrowRight className="h-3 w-3 text-[#10B981]" />
                      </div>
                      <div>
                        <div className="text-xs font-medium text-[#1E3A8A]">{step.month}</div>
                        <div className="text-sm text-muted-foreground">{step.task}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Scholarships */}
              <div className="mt-4 rounded-xl bg-[#FFF7ED] border border-[#FED7AA] p-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#C2410C]">
                  Recommended Scholarships
                </div>
                <div className="mt-2 space-y-2">
                  {[
                    "Google CSSI - $10,000",
                    "NSF Graduate Fellowship",
                    "Gates Millennium Scholars",
                  ].map((scholarship) => (
                    <div key={scholarship} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Award className="h-3.5 w-3.5 text-[#EA580C]" />
                      {scholarship}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
