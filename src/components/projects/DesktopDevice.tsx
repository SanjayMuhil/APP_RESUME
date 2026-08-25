import { ProjectPreview } from './ProjectPreview';

interface DesktopDeviceProps {
  image: string;
  title: string;
  url?: string;
  rotateX?: number;
  rotateY?: number;
  isHovered?: boolean;
  className?: string;
}

export function DesktopDevice({
  image,
  title,
  url,
  rotateX = 0,
  rotateY = 0,
  isHovered = false,
  className = '',
}: DesktopDeviceProps) {
  return (
    <div
      className={`relative group select-none transition-transform duration-500 ease-out ${className}`}
      style={{
        transformStyle: 'preserve-3d',
        transform: `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) ${
          isHovered ? 'scale(1.02) translateZ(15px)' : 'scale(1) translateZ(0px)'
        }`,
      }}
    >
      {/* ── LAPTOP/MONITOR SCREEN FRAME ── */}
      <div className="relative rounded-2xl bg-[#111113] p-2.5 sm:p-3 md:p-3.5 border border-zinc-700/60 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)]">
        {/* Top webcam dot */}
        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 flex items-center justify-center gap-1 z-20">
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-950 border border-zinc-700/80 inline-block" />
        </div>

        {/* Screen Bezel & Display Area */}
        <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden bg-black border border-zinc-800 shadow-inner">
          <ProjectPreview
            image={image}
            alt={`${title} Desktop Live Preview`}
            url={url}
            title={title}
            mode="desktop"
          />
        </div>
      </div>

      {/* ── LAPTOP BASE STAND & NOTCH CUTOUT ── */}
      <div className="relative -mt-0.5 mx-auto w-[105%] -left-[2.5%] h-3.5 sm:h-4.5 md:h-5 rounded-b-xl bg-gradient-to-b from-[#1c1c1f] via-[#151518] to-[#0c0c0e] border-t border-zinc-700/80 border-b border-zinc-900 shadow-2xl flex items-center justify-center">
        {/* Front thumb notch cutout */}
        <div className="w-14 sm:w-20 h-1 sm:h-1.5 rounded-b-md bg-[#09090b] border-t border-zinc-800" />
      </div>

      {/* Realistic 3D Ground Shadow */}
      <div
        className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[92%] h-8 bg-black/80 blur-xl rounded-full pointer-events-none transition-opacity duration-500"
        style={{
          opacity: isHovered ? 0.95 : 0.7,
        }}
      />
    </div>
  );
}

export default DesktopDevice;
