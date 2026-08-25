import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

// ─── Types ──────────────────────────────────────────────────────────────────

export interface TypingKeyboardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Text to auto-type in a loop */
  autoTypeText?: string;
  /** [min, max] ms delay between keystrokes */
  typingSpeed?: [number, number];
  /** Overall scale factor */
  scale?: number;
  /** Accent color (modifier keys + screen glow) */
  accentColor?: string;
  /** Secondary accent (enter key) */
  secondaryAccent?: string;
}

// ─── Key sub-component ──────────────────────────────────────────────────────

function Key({ size = "", accent = "" }: { size?: string; accent?: string }) {
  const s = size ? `--${size}` : "";
  const a1 = accent === "b" ? " tk-face--b" : accent === "o" ? " tk-face--o" : "";

  return (
    <div className={`tk-key tk-flex${size ? ` tk-key${s}` : ""}`}>
      <div className={`tk-key__front tk-face${size ? ` tk-key__front${s}` : ""}${a1 === " tk-face--b" ? " tk-face--b3" : a1 === " tk-face--o" ? " tk-face--o3" : ""}`} />
      <div className={`tk-key__back tk-face${size ? ` tk-key__back${s}` : ""}${a1 === " tk-face--b" ? " tk-face--b1" : a1 === " tk-face--o" ? " tk-face--o1" : ""}`} />
      <div className={`tk-key__right tk-face${size ? ` tk-key__right${s}` : ""}${a1 === " tk-face--b" ? " tk-face--b1" : a1 === " tk-face--o" ? " tk-face--o1" : ""}`} />
      <div className={`tk-key__left tk-face${size ? ` tk-key__left${s}` : ""}${a1 === " tk-face--b" ? " tk-face--b2" : a1 === " tk-face--o" ? " tk-face--o2" : ""}`} />
      <div className={`tk-key__top tk-face${size ? ` tk-key__top${s}` : ""}${a1 === " tk-face--b" ? " tk-face--b1" : a1 === " tk-face--o" ? " tk-face--o1" : ""}`} />
      <div className={`tk-key__bottom tk-face${size ? ` tk-key__bottom${s}` : ""}${a1 === " tk-face--b" ? " tk-face--b2" : a1 === " tk-face--o" ? " tk-face--o2" : ""}`} />
    </div>
  );
}

// ─── Keycode → DOM index map ────────────────────────────────────────────────

const KC_MAP: Record<number, number> = {
  81:15, 87:16, 69:17, 82:18, 84:19, 89:20, 85:21, 73:22, 79:23, 80:24,
  65:29, 83:30, 68:31, 70:32, 71:33, 72:34, 74:35, 75:36, 76:37,
  90:41, 88:42, 67:43, 86:44, 66:45, 78:46, 77:47,
  32:56, 13:39, 8:27,
};

// ─── Main Component ─────────────────────────────────────────────────────────

export function TypingKeyboard({
  className,
  autoTypeText = "Sanjay Muhilarasu | Full Stack Developer & DevOps Specialist | React • Next.js • FastAPI • Docker • AWS EC2       ",
  typingSpeed = [40, 120],
  scale = 0.7,
  accentColor = "#0894FF",
  secondaryAccent = "#C959DD",
  ...props
}: TypingKeyboardProps) {
  const mainRef = useRef<HTMLDivElement>(null);
  const kbRef = useRef<HTMLDivElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const kb = kbRef.current;
    const screen = screenRef.current;
    if (!kb || !screen) return;

    // Set fixed isometric perspective
    kb.style.transform = "perspective(10000px) rotateX(50deg) rotateZ(-25deg)";

    const allKeys = kb.querySelectorAll<HTMLDivElement>(".tk-key");
    let alive = true;
    let idx = 0;
    let timer: ReturnType<typeof setTimeout>;

    const pressKey = (kc: number) => {
      const domIdx = KC_MAP[kc];
      const el = allKeys[domIdx];
      if (el) {
        el.classList.add("tk-key--down");
        setTimeout(() => el.classList.remove("tk-key--down"), 80);
      }
    };

    const typeNext = () => {
      if (!alive || !screen) return;
      const char = autoTypeText[idx];
      const kc = char === " " ? 32 : char.toUpperCase().charCodeAt(0);

      pressKey(kc);
      screen.innerHTML += char === " " ? " " : char;

      idx++;
      if (idx >= autoTypeText.length) {
        timer = setTimeout(() => {
          if (!alive) return;
          screen.innerHTML = "";
          idx = 0;
          timer = setTimeout(typeNext, 1000);
        }, 2000);
      } else {
        const delay = typingSpeed[0] + Math.random() * (typingSpeed[1] - typingSpeed[0]);
        timer = setTimeout(typeNext, delay);
      }
    };

    timer = setTimeout(typeNext, 1500);
    return () => { alive = false; clearTimeout(timer); };
  }, [autoTypeText, typingSpeed]);

  return (
    <div className={cn("tk-container w-full h-[240px] xs:h-[280px] sm:h-[340px] md:h-[400px] lg:h-[440px] overflow-hidden flex justify-center items-center relative select-none", className)} {...props}>
      <style>{`
        .tk-container * { transform-style: preserve-3d; }
        .tk-container {
          width: 100%;
          max-width: 100%;
          display: flex; justify-content: center; align-items: center;
          font-family: sans-serif; font-weight: bolder;
          color: rgba(255,255,251,0.7);
          text-transform: uppercase; letter-spacing: 2px;
        }
        .tk-main {
          width: 600px; height: 420px;
          position: relative; cursor: pointer;
          transform: scale(${scale});
          transform-origin: center center;
          display: flex; justify-content: center; align-items: center;
        }
        @media (max-width: 1280px) {
          .tk-main { transform: scale(0.62); }
        }
        @media (max-width: 1024px) {
          .tk-main { transform: scale(0.54); }
        }
        @media (max-width: 768px) {
          .tk-main { transform: scale(0.44); }
        }
        @media (max-width: 480px) {
          .tk-main { transform: scale(0.33); }
        }
        @media (max-width: 360px) {
          .tk-main { transform: scale(0.27); }
        }
        .tk-flex { display: flex; justify-content: center; align-items: center; }
        .tk-face { position: absolute; }

        /* Keyboard body */
        .tk-keyboard {
          width: 500px; height: 160px;
          position: absolute;
          left: 50%; top: 55%;
          margin-left: -270px; margin-top: -50px;
          transform: perspective(10000px) rotateX(50deg) rotateZ(-25deg);
        }
        .tk-keyboard__front { width: 500px; height: 25px; transform: rotateX(-90deg) translateZ(80px); background-color: #9C9C9C; }
        .tk-keyboard__back  { width: 500px; height: 25px; transform: rotateX(90deg) translateZ(80px); background-color: #FFFFFB; }
        .tk-keyboard__top   {
          display: flex; flex-direction: column; justify-content: space-around;
          width: 500px; height: 160px;
          transform: rotateY(0deg) translateZ(12.5px);
          background-image: linear-gradient(to bottom, color-mix(in srgb, ${accentColor} 40%, white), color-mix(in srgb, #1a1919 80%, white));
        }
        .tk-keyboard__bottom {
          width: 500px; height: 160px;
          transform: rotateY(180deg) translateZ(12.5px);
          background-color: #EAE7E5;
        }
        .tk-keyboard__right { width: 25px; height: 160px; transform: rotateY(90deg) translateZ(250px); background-color: #FFFFFB; }
        .tk-keyboard__left  { width: 25px; height: 160px; transform: rotateY(90deg) translateZ(-250px); background-color: #EAE7E5; }

        /* Screen */
        .tk-screen {
          width: 303px; height: 240px;
          transform: translateZ(100px) translateY(-200px) translateZ(50px) rotateX(270deg);
          background-color: ${accentColor};
          border-radius: 10px; padding: 12px;
          font-size: 11px; line-height: 1.4;
          word-wrap: break-word; white-space: pre-wrap; overflow: hidden;
          text-transform: none; letter-spacing: 0.5px; color: #fff;
          font-family: monospace, monospace;
          align-items: flex-start !important;
          justify-content: flex-start !important;
          box-shadow:
            0 0 5px color-mix(in srgb, ${accentColor} 80%, transparent),
            0 0 10px color-mix(in srgb, ${accentColor} 70%, transparent),
            0 0 15px color-mix(in srgb, ${accentColor} 60%, transparent),
            0 0 20px color-mix(in srgb, ${accentColor} 50%, transparent),
            0 0 40px color-mix(in srgb, ${accentColor} 40%, transparent),
            0 0 60px color-mix(in srgb, ${accentColor} 30%, transparent);
          animation: tk-screen-flicker 1s ease-in alternate infinite;
        }
        @keyframes tk-screen-flicker {
          0%, 90%, 96% { background-color: ${accentColor}; }
          93%, 100%    { background-color: color-mix(in srgb, ${accentColor} 80%, black); }
        }

        /* Keys container */
        .tk-keys {
          display: flex; justify-content: space-between;
          width: 100%;
          transform: translateZ(4px);
          padding: 0 2px;
        }

        /* Individual key */
        .tk-key {
          width: 25px; height: 25px; position: relative;
          cursor: pointer;
          transform: translateZ(10px);
          transition: transform 0.05s ease-out;
        }
        .tk-key--down { transform: translateZ(2px) !important; }
        .tk-key--w1   { width: 37px; }
        .tk-key--w2   { width: 45px; }
        .tk-key--w3   { width: 55px; }
        .tk-key--w4   { width: 62px; }
        .tk-key--w5   { width: 70px; }
        .tk-key--space{ width: 170px; }

        .tk-key__front  { width: 25px; height: 10px; transform: rotateX(-90deg) translateZ(12.5px); background-color: #0A0A0A; }
        .tk-key__back   { width: 25px; height: 10px; transform: rotateX(90deg)  translateZ(12.5px); background-color: #2E2E2E; }
        .tk-key__top    { width: 25px; height: 25px; transform: rotateY(0deg)   translateZ(5px);    background-color: #383838; }
        .tk-key__bottom { width: 25px; height: 25px; transform: rotateY(180deg) translateZ(5px);    background-color: #0A0A0A; }
        .tk-key__right  { width: 10px; height: 25px; transform: rotateY(90deg)  translateZ(12.5px); background-color: #1A1A1A; }
        .tk-key__left   { width: 10px; height: 25px; transform: rotateY(90deg)  translateZ(-12.5px);background-color: #1A1A1A; }

        .tk-key__front--w1 { width: 37px; } .tk-key__back--w1 { width: 37px; } .tk-key__top--w1 { width: 37px; } .tk-key__bottom--w1 { width: 37px; }
        .tk-key__right--w1 { translateZ: 18.5px; } .tk-key__left--w1 { translateZ: -18.5px; }

        .tk-key__front--w2 { width: 45px; } .tk-key__back--w2 { width: 45px; } .tk-key__top--w2 { width: 45px; } .tk-key__bottom--w2 { width: 45px; }
        .tk-key__right--w2 { translateZ: 22.5px; } .tk-key__left--w2 { translateZ: -22.5px; }

        .tk-key__front--w3 { width: 55px; } .tk-key__back--w3 { width: 55px; } .tk-key__top--w3 { width: 55px; } .tk-key__bottom--w3 { width: 55px; }
        .tk-key__right--w3 { translateZ: 27.5px; } .tk-key__left--w3 { translateZ: -27.5px; }

        .tk-key__front--w4 { width: 62px; } .tk-key__back--w4 { width: 62px; } .tk-key__top--w4 { width: 62px; } .tk-key__bottom--w4 { width: 62px; }
        .tk-key__right--w4 { translateZ: 31px; }   .tk-key__left--w4 { translateZ: -31px; }

        .tk-key__front--w5 { width: 70px; } .tk-key__back--w5 { width: 70px; } .tk-key__top--w5 { width: 70px; } .tk-key__bottom--w5 { width: 70px; }
        .tk-key__right--w5 { translateZ: 35px; }   .tk-key__left--w5 { translateZ: -35px; }

        .tk-key__front--space { width: 170px; } .tk-key__back--space { width: 170px; } .tk-key__top--space { width: 170px; } .tk-key__bottom--space { width: 170px; }
        .tk-key__right--space { translateZ: 85px; } .tk-key__left--space { translateZ: -85px; }

        /* Accent key colors */
        .tk-face--b1 { background-color: color-mix(in srgb, ${accentColor} 50%, #1A1A1A) !important; }
        .tk-face--b2 { background-color: color-mix(in srgb, ${accentColor} 30%, #0A0A0A) !important; }
        .tk-face--b3 { background-color: ${accentColor} !important; }

        .tk-face--o1 { background-color: color-mix(in srgb, ${secondaryAccent} 50%, #1A1A1A) !important; }
        .tk-face--o2 { background-color: color-mix(in srgb, ${secondaryAccent} 30%, #0A0A0A) !important; }
        .tk-face--o3 { background-color: ${secondaryAccent} !important; }
      `}</style>

      <div ref={mainRef} className="tk-main">
        {/* Isometric Keyboard */}
        <div ref={kbRef} className="tk-keyboard">
          <div className="tk-keyboard__front tk-face" />
          <div className="tk-keyboard__back tk-face" />
          <div className="tk-keyboard__right tk-face" />
          <div className="tk-keyboard__left tk-face" />
          <div className="tk-keyboard__top tk-face">
            {/* Row 1 */}
            <div className="tk-keys">
              <Key size="w1" accent="b" /><Key /><Key /><Key /><Key /><Key /><Key /><Key /><Key /><Key /><Key /><Key /><Key size="w4" accent="b" />
            </div>
            {/* Row 2 */}
            <div className="tk-keys">
              <Key size="w2" accent="b" /><Key /><Key /><Key /><Key /><Key /><Key /><Key /><Key /><Key /><Key /><Key /><Key size="w2" />
            </div>
            {/* Row 3 */}
            <div className="tk-keys">
              <Key size="w3" accent="b" /><Key /><Key /><Key /><Key /><Key /><Key /><Key /><Key /><Key /><Key /><Key size="w5" accent="o" />
            </div>
            {/* Row 4 */}
            <div className="tk-keys">
              <Key size="w5" accent="b" /><Key /><Key /><Key /><Key /><Key /><Key /><Key /><Key /><Key /><Key size="w3" accent="b" />
            </div>
            {/* Row 5 */}
            <div className="tk-keys">
              <Key size="w1" accent="b" /><Key size="w1" /><Key size="w1" /><Key size="space" /><Key size="w1" /><Key size="w1" /><Key size="w1" accent="b" />
            </div>
          </div>
          <div className="tk-keyboard__bottom tk-face" />
        </div>

        {/* 3D CRT Screen */}
        <div ref={screenRef} className="tk-screen tk-face" />
      </div>
    </div>
  );
}

export default TypingKeyboard;
