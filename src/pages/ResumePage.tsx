import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Download, FileText } from 'lucide-react';
import { resumeDownloadPath, resumeFilename } from '@/data';

export default function ResumePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#050816] text-white pt-20 sm:pt-24 pb-12 px-3 sm:px-6">
      <div className="max-w-5xl mx-auto space-y-4">
        {/* Top Control Bar */}
        <div className="flex items-center justify-between gap-3 p-3 sm:p-4 rounded-xl bg-[#0B0F28] border border-white/15 shadow-lg">
          <button
            onClick={() => navigate(-1)}
            className="font-gageda px-3.5 sm:px-5 py-2 rounded-lg bg-[#050816] border border-white/15 hover:border-[#0894FF] text-zinc-200 hover:text-white font-bold text-xs sm:text-sm transition-all flex items-center gap-2 uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4 text-[#0894FF]" />
            <span>Back</span>
          </button>

          <div className="hidden sm:flex items-center gap-2 text-xs font-mono font-semibold text-zinc-300 truncate px-2">
            <FileText className="w-4 h-4 text-[#C959DD] flex-shrink-0" />
            <span className="truncate">sanjay.muhilarasu.pdf</span>
          </div>

          <a
            href={resumeDownloadPath}
            download={resumeFilename}
            className="font-gageda px-4 sm:px-6 py-2 rounded-lg bg-gradient-to-r from-[#0894FF] via-[#C959DD] to-[#FF2E54] hover:shadow-[0_0_20px_rgba(8,148,255,0.4)] text-white font-bold text-xs sm:text-sm flex items-center gap-2 uppercase tracking-wider transition-all"
          >
            <Download className="w-4 h-4 text-white" />
            <span>Download Resume</span>
          </a>
        </div>

        {/* PDF Viewer Container */}
        <div className="w-full h-[75vh] sm:h-[82vh] rounded-xl overflow-hidden bg-[#0B0F28] border border-white/15 shadow-2xl relative">
          <iframe
            src={`${resumeDownloadPath}#toolbar=1&navpanes=0`}
            className="w-full h-full border-0"
            title="Sanjay Muhilarasu Portfolio Resume PDF Viewer"
          />
        </div>
      </div>
    </div>
  );
}
