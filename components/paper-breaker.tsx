"use client"

import { useState } from "react"
import {
  FileText,
  BookOpenCheck,
  MessageSquare,
  Calculator,
  BrainCircuit,
  ClipboardCheck,
  Layers,
} from "lucide-react"
import { FloatingAtom } from "@/components/decorations"

const capabilities = [
  { icon: BookOpenCheck, label: "Summarize clearly" },
  { icon: MessageSquare, label: "Explain in simple terms" },
  { icon: Calculator, label: "Break down complex equations" },
  { icon: BrainCircuit, label: "Generate conceptual diagrams" },
  { icon: ClipboardCheck, label: "Create quizzes for revision" },
  { icon: Layers, label: "Multiple explanation levels" },
]

const levels = [
  { label: "Like I'm 15" },
  { label: "Undergraduate" },
  { label: "Graduate" },
  { label: "PhD Level" },
]

export function PaperBreaker() {
  const [activeLevel, setActiveLevel] = useState(1)

  return (
    <section id="paperbreaker" className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Pastel blob */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-[#D1FAE5] blur-[120px] opacity-40" />
      <FloatingAtom className="pointer-events-none absolute top-16 right-6 w-24 opacity-30 md:w-32 md:opacity-40 lg:right-16" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left - Card Visual */}
          <div className="order-2 lg:order-1">
            <div className="rounded-2xl border border-border bg-[#F8FAFC] p-6 shadow-xl shadow-[#D1FAE5]/30">
              {/* Upload area */}
              <div className="flex items-center gap-3 border-b border-border pb-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#ECFDF5]">
                  <FileText className="h-4 w-4 text-[#10B981]" />
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">
                    quantum_computing_2024.pdf
                  </div>
                  <div className="text-xs text-muted-foreground">
                    12 pages uploaded
                  </div>
                </div>
              </div>

              {/* Level selector */}
              <div className="mt-4 flex gap-2 flex-wrap">
                {levels.map((level, i) => (
                  <button
                    key={level.label}
                    onClick={() => setActiveLevel(i)}
                    className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-all ${
                      activeLevel === i
                        ? "bg-[#1E3A8A] text-white shadow-md shadow-[#1E3A8A]/20"
                        : "bg-white border border-border text-muted-foreground hover:text-foreground hover:border-[#93C5FD]"
                    }`}
                  >
                    {level.label}
                  </button>
                ))}
              </div>

              {/* Output sections */}
              <div className="mt-4 space-y-3">
                <div className="rounded-xl bg-white border border-border p-4">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#1E3A8A]">
                    Summary
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    This paper explores quantum error correction using topological 
                    qubits, demonstrating a 47% improvement in coherence time 
                    compared to traditional surface codes...
                  </p>
                </div>

                <div className="rounded-xl bg-white border border-border p-4">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#10B981]">
                    Key Equation Breakdown
                  </div>
                  <div className="mt-2 rounded-xl bg-[#F0FDF4] border border-[#BBF7D0] p-3">
                    <code className="text-sm text-[#047857] font-mono">
                      {"H = -J \u03A3 \u03C3\u1D62\u03C3\u2C7C + h \u03A3 \u03C3\u1D62"}
                    </code>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    The Hamiltonian describes spin interactions where J represents 
                    coupling strength between neighboring qubits...
                  </p>
                </div>

                <div className="rounded-xl bg-[#EDE9FE] border border-[#C4B5FD] p-4">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#7C3AED]">
                    Quick Quiz
                  </div>
                  <div className="mt-2 text-sm text-[#5B21B6]">
                    Q: What advantage do topological qubits offer over surface codes?
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#ECFDF5] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#047857]">
              <FileText className="h-3.5 w-3.5" />
              PaperBreaker
            </span>

            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight text-foreground font-mono md:text-4xl">
              Research Papers,{" "}
              <span className="text-[#10B981]">Made Simple</span>
            </h2>

            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              Upload any research paper and BrightBridgeScholar will break it down 
              into understandable pieces — from summaries to equation explanations 
              to revision quizzes.
            </p>

            <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {capabilities.map((cap) => (
                <li key={cap.label} className="flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#ECFDF5]">
                    <cap.icon className="h-4 w-4 text-[#10B981]" />
                  </div>
                  <span className="text-sm text-muted-foreground">{cap.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
