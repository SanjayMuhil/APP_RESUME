import { ProjectPreview } from './ProjectPreview';

interface MobileDeviceProps {
  image: string;
  title: string;
  url?: string;
  rotateX?: number;
  rotateY?: number;
  isHovered?: boolean;
  className?: string;
}

export function MobileDevice({
  image,
  title,
  url,
  rotateX = 0,
  rotateY = 0,
  isHovered = false,
  className = '',
}: MobileDeviceProps) {
  return (
    <div
      className={`relative group select-none transition-transform duration-500 ease-out z-20 ${className}`}
      style={{
        transformStyle: 'preserve-3d',
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) ${
          isHovered ? 'scale(1.04) translateZ(30px)' : 'scale(1) translateZ(10px)'
        }`,
      }}
    >
      {/* ── MOBILE PHONE FRAME ── */}
      <div className="relative rounded-[28px] sm:rounded-[32px] md:rounded-[36px] bg-[#161619] p-2 sm:p-2.5 md:p-3 border-2 border-zinc-700/70 shadow-[0_20px_50px_rgba(0,0,0,0.95)]">
        {/* Dynamic Island / Notch at Top */}
        <div className="absolute top-2.5 sm:top-3 left-1/2 -translate-x-1/2 w-14 sm:w-18 md:w-20 h-3.5 sm:h-4 bg-black rounded-full border border-zinc-800 z-30 flex items-center justify-end px-2">
          <span className="w-2 h-2 rounded-full bg-[#0a0a0f] border border-zinc-700" />
        </div>

        {/* Side power button indicator */}
        <div className="absolute -right-1.5 top-16 w-1 h-8 rounded-r bg-zinc-700/80" />
        {/* Side volume button indicators */}
        <div className="absolute -left-1.5 top-14 w-1 h-6 rounded-l bg-zinc-700/80" />
        <div className="absolute -left-1.5 top-22 w-1 h-6 rounded-l bg-zinc-700/80" />

        {/* Screen Display Container */}
        <div className="relative aspect-[9/19.5] w-full rounded-[22px] sm:rounded-[24px] md:rounded-[28px] overflow-hidden bg-black border border-zinc-800 shadow-inner">
          <ProjectPreview
            image={image}
            alt={`${title} Mobile Live Preview`}
            url={url}
            title={title}
            mode="mobile"
          />
        </div>

        {/* Bottom home bar indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-16 sm:w-20 h-1 rounded-full bg-zinc-600/60 z-30" />
      </div>

      {/* Realistic 3D Mobile Shadow */}
      <div
        className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[85%] h-6 bg-black/90 blur-lg rounded-full pointer-events-none transition-opacity duration-500"
        style={{
          opacity: isHovered ? 0.9 : 0.65,
        }}
      />
    </div>
  );
}

export default MobileDevice;
