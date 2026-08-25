import { useState } from 'react';
import { Terminal, Check, Copy, Play, Cpu, ShieldAlert } from 'lucide-react';

export default function DeveloperTerminal() {
  const [activeTab, setActiveTab] = useState<'terminal' | 'system' | 'stack'>('terminal');
  const [copied, setCopied] = useState(false);

  const terminalLines = [
    { type: 'cmd', text: 'systemctl status sanjay-cloud-cluster.service' },
    { type: 'success', text: '● sanjay-cloud-cluster.service - High-Performance AWS & Frontend Stack' },
    { type: 'info', text: '   Loaded: loaded (/etc/systemd/system/cloud.service; enabled)' },
    { type: 'info', text: '   Active: active (running) since Mon 2026-08-24 09:00:00 UTC' },
    { type: 'cmd', text: 'docker ps --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"' },
    { type: 'out', text: 'CONTAINER ID   NAME                 STATUS         PORTS' },
    { type: 'out', text: 'a1b2c3d4e5f6   fastapi-proctor-ai   Up 48 hours    0.0.0.0:8000->8000/tcp' },
    { type: 'out', text: 'f6e5d4c3b2a1   react-next-frontend  Up 48 hours    0.0.0.0:3000->3000/tcp' },
    { type: 'cmd', text: 'aws ec2 describe-instances --filters "Name=tag:Role,Values=DevOps-Node"' },
    { type: 'success', text: '✔ AWS EC2 t3.medium [us-east-1] Status: HEALTHY | Security Groups: VERIFIED' },
  ];

  const handleCopy = () => {
    const textToCopy = terminalLines.map((l) => l.text).join('\n');
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full rounded-2xl bg-gray-950 border border-gray-800 shadow-2xl overflow-hidden font-mono text-xs text-gray-300">
      {/* Terminal Titlebar */}
      <div className="bg-gray-900 px-4 py-3 border-b border-gray-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-xs text-gray-400 font-semibold flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-blue-400" />
            sanjay@devops-workstation:~ (bash)
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-1 bg-gray-950 px-2.5 py-1 rounded-md border border-gray-800 text-[11px]">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-emerald-400 font-bold">AWS ONLINE</span>
          </div>

          <button
            onClick={handleCopy}
            className="p-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 transition-colors"
            title="Copy Command Logs"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Terminal Tabs */}
      <div className="flex border-b border-gray-800 bg-gray-900/50">
        <button
          onClick={() => setActiveTab('terminal')}
          className={`px-4 py-2 text-xs font-semibold flex items-center gap-1.5 border-b-2 transition-colors ${
            activeTab === 'terminal'
              ? 'border-blue-500 text-white bg-gray-900/80'
              : 'border-transparent text-gray-400 hover:text-gray-200'
          }`}
        >
          <Play className="w-3 h-3 text-blue-400" /> CLI Logs
        </button>
        <button
          onClick={() => setActiveTab('system')}
          className={`px-4 py-2 text-xs font-semibold flex items-center gap-1.5 border-b-2 transition-colors ${
            activeTab === 'system'
              ? 'border-purple-500 text-white bg-gray-900/80'
              : 'border-transparent text-gray-400 hover:text-gray-200'
          }`}
        >
          <Cpu className="w-3 h-3 text-purple-400" /> AWS System
        </button>
        <button
          onClick={() => setActiveTab('stack')}
          className={`px-4 py-2 text-xs font-semibold flex items-center gap-1.5 border-b-2 transition-colors ${
            activeTab === 'stack'
              ? 'border-emerald-500 text-white bg-gray-900/80'
              : 'border-transparent text-gray-400 hover:text-gray-200'
          }`}
        >
          <ShieldAlert className="w-3.5 h-3.5 text-emerald-400" /> Tech Config
        </button>
      </div>

      {/* Terminal Content Body */}
      <div className="p-4 md:p-5 space-y-2 min-h-[220px] max-h-[300px] overflow-y-auto leading-relaxed">
        {activeTab === 'terminal' && (
          <div>
            {terminalLines.map((line, idx) => (
              <div key={idx} className="flex items-start gap-2 py-0.5">
                {line.type === 'cmd' ? (
                  <span className="text-emerald-400 font-bold">$</span>
                ) : (
                  <span className="text-gray-600 font-bold">›</span>
                )}
                <span
                  className={
                    line.type === 'cmd'
                      ? 'text-white font-bold'
                      : line.type === 'success'
                      ? 'text-emerald-400'
                      : line.type === 'info'
                      ? 'text-blue-300'
                      : 'text-gray-400'
                  }
                >
                  {line.text}
                </span>
              </div>
            ))}
            <div className="flex items-center gap-2 pt-2 text-emerald-400 font-bold">
              <span>$</span>
              <span className="animate-pulse">_</span>
            </div>
          </div>
        )}

        {activeTab === 'system' && (
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3 text-[11px]">
              <div className="bg-gray-900 p-3 rounded-xl border border-gray-800">
                <span className="text-gray-400 block mb-1">Cloud Provider</span>
                <span className="text-blue-400 font-bold text-sm">Amazon Web Services (AWS)</span>
              </div>
              <div className="bg-gray-900 p-3 rounded-xl border border-gray-800">
                <span className="text-gray-400 block mb-1">Compute Instance</span>
                <span className="text-purple-400 font-bold text-sm">AWS EC2 (Ubuntu Linux)</span>
              </div>
              <div className="bg-gray-900 p-3 rounded-xl border border-gray-800">
                <span className="text-gray-400 block mb-1">Container Runtime</span>
                <span className="text-emerald-400 font-bold text-sm">Docker & Compose</span>
              </div>
              <div className="bg-gray-900 p-3 rounded-xl border border-gray-800">
                <span className="text-gray-400 block mb-1">Deployment Pipeline</span>
                <span className="text-amber-400 font-bold text-sm">Git & CI/CD Workflows</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'stack' && (
          <div className="space-y-2 text-[11px]">
            <p className="text-gray-400">
              // Core Development & Infrastructure Environment:
            </p>
            <div className="bg-gray-900 p-3 rounded-xl border border-gray-800 space-y-1">
              <div><span className="text-blue-400 font-bold">Frontend:</span> React.js, Next.js, Tailwind CSS, Bootstrap, HTML5, CSS3, JS</div>
              <div><span className="text-purple-400 font-bold">Backend & DB:</span> Python (FastAPI), MySQL, RESTful APIs</div>
              <div><span className="text-emerald-400 font-bold">DevOps & Cloud:</span> Linux (Ubuntu), AWS EC2, Docker, Git, GitHub Actions</div>
              <div><span className="text-amber-400 font-bold">Digital Growth:</span> SEO Optimization, PPC Ads, Social Media Marketing</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
