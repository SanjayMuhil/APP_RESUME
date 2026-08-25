import { useState } from 'react';
import { Globe, Lock, ExternalLink } from 'lucide-react';

interface ProjectPreviewProps {
  image: string;
  alt: string;
  url?: string;
  title?: string;
  mode?: 'desktop' | 'mobile';
  className?: string;
}

export function ProjectPreview({
  image,
  alt,
  url,
  title,
  mode = 'desktop',
  className = '',
}: ProjectPreviewProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Clean hostname for browser address bar display
  const displayHost = url ? url.replace(/^https?:\/\//, '').replace(/\/$/, '') : 'localhost:3000';

  return (
    <div className={`relative w-full h-full bg-[#050505] overflow-hidden flex flex-col ${className}`}>
      {/* simulated browser bar for desktop mode */}
      {mode === 'desktop' && (
        <div className="h-7 bg-[#121212] border-b border-white/10 px-3 flex items-center justify-between text-xs text-zinc-400 select-none z-10 flex-shrink-0">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-700/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-700/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-700/80" />
          </div>

          <div className="flex-1 max-w-[280px] sm:max-w-[360px] mx-2 h-5 rounded-md bg-zinc-900 border border-white/10 px-2 flex items-center justify-center text-[10px] font-mono text-zinc-400 gap-1.5 truncate">
            <Lock className="w-2.5 h-2.5 text-zinc-400 flex-shrink-0" />
            <span className="truncate">{displayHost}</span>
          </div>

          <div className="flex items-center gap-1">
            <Globe className="w-3 h-3 text-zinc-400 opacity-60" />
          </div>
        </div>
      )}

      {/* simulated status bar for mobile mode */}
      {mode === 'mobile' && (
        <div className="h-6 bg-[#0c0c0c] border-b border-white/10 px-4 flex items-center justify-between text-[9px] font-mono text-zinc-400 select-none z-10 flex-shrink-0">
          <span>9:41</span>
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
            <span className="w-2 h-2 rounded-full border border-zinc-400" />
          </div>
        </div>
      )}

      {/* Live website preview screenshot container */}
      <div className="relative flex-1 w-full h-full overflow-hidden bg-[#0A0A0A] group">
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 flex items-center justify-center bg-zinc-950 text-zinc-400 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 border-2 border-white/20 border-t-white rounded-full animate-spin" />
              <span>Loading preview...</span>
            </div>
          </div>
        )}

        {imageError ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-950 p-4 text-center text-zinc-400 space-y-2">
            <Globe className="w-8 h-8 text-zinc-500" />
            <span className="text-xs font-mono font-bold text-white">{title || 'Live Project Preview'}</span>
            {url && (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded bg-zinc-900 border border-white/10 text-white text-[11px] font-bold flex items-center gap-1 hover:bg-zinc-800"
              >
                <span>Visit Site</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        ) : (
          <img
            src={image}
            alt={alt}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            className={`w-full h-full object-cover ${
              mode === 'mobile' ? 'object-top' : 'object-top'
            } transition-transform duration-700 ease-out group-hover:scale-[1.03]`}
          />
        )}

        {/* Subtle glass glare & gradient shadow overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.03] via-transparent to-transparent pointer-events-none" />
      </div>
    </div>
  );
}

export default ProjectPreview;
