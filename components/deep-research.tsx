import {
  Search,
  FileSearch,
  BookOpen,
  Scale,
  FileOutput,
  Quote,
  Layers,
} from "lucide-react"
import { FloatingGear, DottedGrid } from "@/components/decorations"

const capabilities = [
  { icon: FileSearch, label: "Analyze academic papers, news & industry reports" },
  { icon: BookOpen, label: "Generate structured literature reviews" },
  { icon: Scale, label: "Identify key arguments and contradictions" },
  { icon: FileOutput, label: "Create fully drafted research reports" },
  { icon: Quote, label: "Provide citation-ready formatting" },
  { icon: Layers, label: "Explain topics from beginner to PhD level" },
]

export function DeepResearch() {
  return (
    <section id="deep-research" className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Pastel blob */}
      <div className="pointer-events-none absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-[#DBEAFE] blur-[120px] opacity-40" />
      <FloatingGear className="pointer-events-none absolute bottom-10 left-4 w-20 opacity-30 md:w-28 md:opacity-40 lg:left-12" />
      <DottedGrid className="pointer-events-none absolute top-10 right-0 w-48 opacity-15" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left - Content */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#EFF6FF] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#1E3A8A]">
              <Search className="h-3.5 w-3.5" />
              Deep Research
            </span>

            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight text-foreground font-mono md:text-4xl">
              Hours of Research,{" "}
              <span className="text-[#10B981]">Distilled in Minutes</span>
            </h2>

            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              BrightBridgeScholar performs comprehensive, multi-source research 
              across the web, transforming scattered information into clear, 
              structured, ready-to-use research drafts.
            </p>

            <ul className="mt-8 space-y-4">
              {capabilities.map((cap) => (
                <li key={cap.label} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#EFF6FF]">
                    <cap.icon className="h-4 w-4 text-[#1E3A8A]" />
                  </div>
                  <span className="text-muted-foreground leading-relaxed">{cap.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right - Card Visual */}
          <div className="relative">
            <div className="rounded-2xl border border-border bg-white p-6 shadow-xl shadow-[#DBEAFE]/30">
              {/* Mock research interface */}
              <div className="flex items-center gap-3 border-b border-border pb-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#EFF6FF]">
                  <Search className="h-4 w-4 text-[#1E3A8A]" />
                </div>
                <div className="flex-1 rounded-xl bg-[#F8FAFC] border border-border px-4 py-2.5">
                  <span className="text-sm text-muted-foreground">
                    {"Impact of climate change on marine biodiversity..."}
                  </span>
                </div>
              </div>

              <div className="mt-4 space-y-3">
                <div className="rounded-xl bg-[#F8FAFC] border border-border p-4">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#1E3A8A]">
                    Literature Review
                  </div>
                  <div className="mt-3 space-y-2">
                    <div className="h-2.5 w-full rounded-full bg-[#DBEAFE]" />
                    <div className="h-2.5 w-5/6 rounded-full bg-[#DBEAFE]" />
                    <div className="h-2.5 w-4/6 rounded-full bg-[#DBEAFE]" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-[#ECFDF5] border border-[#A7F3D0] p-4">
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#047857]">
                      Key Arguments
                    </div>
                    <div className="mt-3 space-y-2">
                      <div className="h-2 w-full rounded-full bg-[#A7F3D0]" />
                      <div className="h-2 w-3/4 rounded-full bg-[#A7F3D0]" />
                    </div>
                  </div>
                  <div className="rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] p-4">
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#1E3A8A]">
                      Citations
                    </div>
                    <div className="mt-3 space-y-2">
                      <div className="h-2 w-full rounded-full bg-[#BFDBFE]" />
                      <div className="h-2 w-2/3 rounded-full bg-[#BFDBFE]" />
                    </div>
                  </div>
                </div>

                <div className="rounded-xl bg-[#FFF7ED] border border-[#FED7AA] p-4">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#C2410C]">
                    Contradictions Found
                  </div>
                  <div className="mt-3 space-y-2">
                    <div className="h-2.5 w-full rounded-full bg-[#FED7AA]" />
                    <div className="h-2.5 w-5/6 rounded-full bg-[#FED7AA]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
