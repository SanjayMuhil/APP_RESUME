import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Layers,
  Code2,
  Server,
  Database,
  Cloud,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  Download,
} from 'lucide-react';
import { developmentWorkflow, fullStackCategories, resumeDownloadPath, resumeFilename } from '@/data';
import { ProfessionalCard } from '@/components/ui/ProfessionalCard';

export default function FullStackPage() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const currentStage = developmentWorkflow.find((s) => s.step === activeStep) || developmentWorkflow[0];

  const categoryGlows = ['blue', 'purple', 'pink', 'orange'] as const;

  return (
    <div className="container-custom py-24 md:py-28 space-y-16 text-white">
      {/* ── PAGE TITLE ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4 text-center max-w-3xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B0F28] border border-[#0894FF]/40 text-[#22D3EE] text-xs font-mono font-bold shadow-[0_0_15px_rgba(8,148,255,0.25)]">
          <Layers className="w-3.5 h-3.5 text-[#0894FF]" />
          <span>FULL STACK ARCHITECTURE</span>
        </div>

        <h1 className="heading-hero font-gageda font-extrabold tracking-tight text-white leading-tight">
          Full Stack Development & <br className="hidden sm:inline" />
          <span className="gradient-text">
            Application Lifecycle
          </span>
        </h1>

        <p className="text-sm md:text-base text-zinc-300 leading-relaxed">
          End-to-end software engineering capabilities spanning responsive client interfaces, FastAPI backend services, relational MySQL data models, Docker containers, and AWS EC2 cloud deployment.
        </p>
      </motion.div>

      {/* ── DEVELOPMENT LIFECYCLE WORKFLOW DIAGRAM ── */}
      <div className="space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#0B0F28] text-[#C959DD] border border-[#C959DD]/30">
            INTERACTIVE WORKFLOW PIPELINE
          </span>
          <h2 className="heading-section font-gageda font-extrabold text-white tracking-tight">
            10-Stage Software Engineering Lifecycle
          </h2>
          <p className="text-xs text-zinc-400 max-w-xl mx-auto">
            Click any stage in the flow sequence below to inspect the engineering execution strategy and tools.
          </p>
        </div>

        {/* Workflow Stage Horizontal Stepper */}
        <div className="overflow-x-auto pb-4 scrollbar-thin">
          <div className="flex items-center gap-2 min-w-[900px] p-2.5 bg-[#050816] rounded-xl border border-white/12">
            {developmentWorkflow.map((stage) => (
              <button
                key={stage.step}
                onClick={() => setActiveStep(stage.step)}
                className={`flex-1 py-3 px-2 rounded-lg text-xs font-mono font-bold transition-all flex flex-col items-center gap-1.5 ${
                  activeStep === stage.step
                    ? 'bg-gradient-to-r from-[#0894FF] via-[#C959DD] to-[#FF2E54] text-white shadow-[0_0_15px_rgba(8,148,255,0.4)] font-bold'
                    : 'bg-[#0B0F28] text-zinc-300 hover:text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                <span className="text-[10px] opacity-80">{stage.badge}</span>
                <span className="truncate max-w-[80px] text-center font-gageda">{stage.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Stage Detail Card */}
        <div className="max-w-4xl mx-auto">
          <ProfessionalCard glowColor="rainbow">
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="font-gageda w-12 h-12 rounded-xl bg-gradient-to-br from-[#0894FF] to-[#C959DD] flex items-center justify-center text-white font-extrabold text-lg shadow-md">
                    0{currentStage.step}
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-[#0894FF] uppercase tracking-wider">
                      {currentStage.badge} — WORKFLOW STAGE
                    </span>
                    <h3 className="font-gageda text-xl md:text-2xl font-bold text-white tracking-tight">
                      {currentStage.title}
                    </h3>
                    <h4 className="text-xs font-semibold text-zinc-300">{currentStage.subtitle}</h4>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    disabled={activeStep === 1}
                    onClick={() => setActiveStep((prev) => Math.max(1, prev - 1))}
                    className="font-gageda px-3.5 py-2 rounded-lg bg-[#0B0F28] border border-white/15 text-xs font-semibold text-zinc-300 disabled:opacity-40 hover:bg-white/10 uppercase tracking-wider"
                  >
                    Previous Stage
                  </button>
                  <button
                    disabled={activeStep === developmentWorkflow.length}
                    onClick={() => setActiveStep((prev) => Math.min(developmentWorkflow.length, prev + 1))}
                    className="font-gageda px-3.5 py-2 rounded-lg bg-gradient-to-r from-[#0894FF] via-[#C959DD] to-[#FF2E54] text-white text-xs font-bold disabled:opacity-40 hover:shadow-[0_0_15px_rgba(201,89,221,0.4)] flex items-center gap-1 uppercase tracking-wider"
                  >
                    Next Stage <ChevronRight className="w-3.5 h-3.5 text-white" />
                  </button>
                </div>
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed">{currentStage.description}</p>

              <div className="space-y-2 pt-2">
                <h5 className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider">
                  Engineering Tools & Deliverables:
                </h5>
                <div className="flex flex-wrap gap-2">
                  {currentStage.techTags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-lg bg-[#050816] text-xs font-mono text-zinc-200 border border-[#0894FF]/30 flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0894FF]" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ProfessionalCard>
        </div>
      </div>

      {/* SECTION DIVIDER */}
      <div className="gradient-divider" />

      {/* ── FULL STACK CATEGORY CARDS ── */}
      <div className="space-y-8 pt-2">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#0B0F28] text-[#FF2E54] border border-[#FF2E54]/30">
            TECHNOLOGY CAPABILITIES
          </span>
          <h2 className="heading-section font-gageda font-extrabold text-white tracking-tight">
            Full Stack <span className="gradient-text">Layer Breakdown</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {fullStackCategories.map((cat, idx) => (
            <ProfessionalCard key={idx} glowColor={categoryGlows[idx % 4]} hover>
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-[#050816] border border-white/15 text-white shadow-sm">
                    {idx === 0 && <Code2 className="w-6 h-6 text-[#0894FF]" />}
                    {idx === 1 && <Server className="w-6 h-6 text-[#C959DD]" />}
                    {idx === 2 && <Database className="w-6 h-6 text-[#FF2E54]" />}
                    {idx === 3 && <Cloud className="w-6 h-6 text-[#FF9004]" />}
                  </div>
                  <div>
                    <h3 className="font-gageda text-xl font-bold text-white uppercase tracking-tight">{cat.title}</h3>
                    <p className="text-xs text-zinc-300">{cat.description}</p>
                  </div>
                </div>

                <div className="space-y-2.5 pt-3">
                  {cat.techList.map((item) => (
                    <div
                      key={item.name}
                      className="p-3.5 rounded-lg bg-[#050816] border border-white/10 hover:border-[#0894FF]/40 transition-colors space-y-0.5"
                    >
                      <div className="flex items-center gap-2">
                        <span className="font-gageda text-xs font-bold text-white tracking-wide">{item.name}</span>
                        <Sparkles className="w-3 h-3 text-[#C959DD]" />
                      </div>
                      <p className="text-[11px] text-zinc-300 leading-snug">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ProfessionalCard>
          ))}
        </div>
      </div>

      {/* ── RESUME CTA CARD ── */}
      <div className="max-w-4xl mx-auto">
        <ProfessionalCard glowColor="rainbow" className="text-center space-y-4">
          <h3 className="font-gageda text-xl md:text-2xl font-bold text-white tracking-tight">
            Ready to review my full tech stack & qualifications?
          </h3>
          <p className="text-xs text-zinc-300 max-w-xl mx-auto">
            Download the latest PDF resume to review my work history, verified accomplishments, and tech capabilities.
          </p>

          <div className="flex justify-center pt-2">
            <a
              href={resumeDownloadPath}
              target="_blank"
              rel="noopener noreferrer"
              download={resumeFilename}
              className="font-gageda px-6 py-3.5 rounded-lg bg-gradient-to-r from-[#0894FF] via-[#C959DD] to-[#FF2E54] text-white font-bold text-xs shadow-md hover:shadow-[0_0_20px_rgba(8,148,255,0.4)] transition-all flex items-center gap-2 uppercase tracking-wider"
            >
              <Download className="w-4 h-4 text-white" />
              <span>Download Official PDF Resume</span>
            </a>
          </div>
        </ProfessionalCard>
      </div>
    </div>
  );
}
