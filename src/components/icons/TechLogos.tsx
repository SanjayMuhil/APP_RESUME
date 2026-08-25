export const ReactLogo = ({ className = 'w-7 h-7' }: { className?: string }) => (
  <svg
    viewBox="-11.5 -10.23174 23 20.46348"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
    <g stroke="#61DAFB" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

export const NextLogo = ({ className = 'w-7 h-7' }: { className?: string }) => (
  <svg
    viewBox="0 0 180 180"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    <mask
      id="mask0_next_logo"
      style={{ maskType: 'alpha' }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="180"
      height="180"
    >
      <circle cx="90" cy="90" r="90" fill="#000000" />
    </mask>
    <g mask="url(#mask0_next_logo)">
      <circle cx="90" cy="90" r="90" fill="#000000" />
      <path
        d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
        fill="url(#paint0_linear_next_logo)"
      />
      <rect x="115" y="54" width="12" height="72" fill="url(#paint1_linear_next_logo)" />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_next_logo"
        x1="109"
        y1="116.5"
        x2="144.5"
        y2="160.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_next_logo"
        x1="121"
        y1="54"
        x2="121"
        y2="106"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

export const AWSLogo = ({ className = 'w-7 h-7' }: { className?: string }) => (
  <svg
    viewBox="0 0 100 60"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    {/* AWS Text Representation */}
    <path
      d="M18.8 28.5c-.8 0-1.6.1-2.3.2l.4-2.4c.6-.1 1.3-.2 2.1-.2 2.7 0 4.1 1.2 4.1 3.5v7.8h-2.9v-1.8c-.7 1.3-2 2-3.6 2-2.4 0-4.1-1.6-4.1-3.9 0-2.6 2-4 5.9-4.1l2.7-.1v-.4c0-1-.6-1.6-2.3-1.6zm2.7 3.3l-2.2.1c-2.3.1-3.4.8-3.4 2.1 0 1.2.9 2 2.3 2 1.9 0 3.3-1.2 3.3-2.9v-1.3zM34.8 37.4h-3l-3.3-11.8h3.3l1.8 7.9 1.9-7.9h3l1.9 7.9 1.8-7.9h3.3l-3.3 11.8h-3.1l-1.8-7.1-1.5 7.1zm22.4-7.2c-1.8-.4-2.8-.8-2.8-1.7 0-.9.9-1.4 2.3-1.4 1.3 0 2.5.3 3.5.8l1.1-2.4c-1.2-.6-2.8-.9-4.7-.9-3.8 0-5.6 1.9-5.6 4.3 0 2.3 1.5 3.5 4.3 4.1 2 .4 2.7.9 2.7 1.8 0 1-.9 1.6-2.5 1.6-1.7 0-3.3-.5-4.4-1.2l-1.1 2.5c1.4.9 3.3 1.3 5.4 1.3 4.1 0 6.1-1.9 6.1-4.5 0-2.3-1.5-3.5-4.3-4.3z"
      fill="#FFFFFF"
    />
    {/* Amazon Smile Curve */}
    <path
      d="M13.5 44.8c18.5 11.2 45.8 11.4 64.6-1.4.8-.5 1.7.3 1.2 1.1-19.7 13.9-48.4 13.6-67.7 1.7-.6-.4-.1-1.2.6-.9l1.3-.5z"
      fill="#FF9900"
    />
    {/* Smile Arrow Head */}
    <path
      d="M79.8 40.7c1.4 1.8 4.2 5.1 4.7 6.1.4.9.1 1.4-.7 1.5-1.5.2-5.4-1.1-7.8-2.7-.6-.4-.5-1.1.1-1.2 1.8-.3 3.1-.2 3.7-.7z"
      fill="#FF9900"
    />
  </svg>
);

export const DockerLogo = ({ className = 'w-7 h-7' }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path
      fill="#2496ED"
      d="M22.8 10.4c-.4-.3-1.5-.5-2.6-.2-.3-.6-.8-1.2-1.3-1.7l-.6.5c.5.5.9 1.1 1.1 1.7-.8.4-1.7.6-2.6.7-.1-.3-.2-.5-.4-.8l-.8.4c.2.3.4.6.5.9-.6.2-1.3.4-2 .5V9.4h-2.1v2.5H9.8V9.4H7.7v2.5H5.6V9.4H3.5v2.5H1.4v2.1h13.7c0 .4-.1.8-.3 1.2-.4.7-1 1.2-1.8 1.6-1.1.5-2.5.7-4.1.7-.8 0-1.6-.1-2.4-.2-.5-.1-1-.3-1.5-.5l-.6 1.8c.7.3 1.4.5 2.1.6 1 .2 2 .3 3 .3 2 0 3.7-.3 5.1-1 1.2-.6 2.1-1.4 2.7-2.5.6-1.1.8-2.3.8-3.6 1.4-.2 2.7-.8 3.5-1.7l-.7-.4z"
    />
    <path
      fill="#2496ED"
      d="M3.5 6.7h2.1v2.1H3.5V6.7zm2.7 0h2.1v2.1H6.2V6.7zm2.7 0H11v2.1H8.9V6.7zm2.7 0h2.1v2.1h-2.1V6.7zm-2.7-2.7H11v2.1H8.9V4zm2.7 0h2.1v2.1h-2.1V4zm2.7 2.7h2.1v2.1H14.3V6.7z"
    />
  </svg>
);

export const LinuxLogo = ({ className = 'w-7 h-7' }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    {/* Body */}
    <path
      d="M12 2C9.2 2 7.5 4 7.5 7c0 1.5.3 3.2.1 4.5-.3 1.8-1.6 3.2-2.6 4.5-.6.8-1 1.8-1 2.8 0 1.8 1.8 3.2 5 3.2.8 0 1.6-.1 2.5-.3.4.2.8.3 1.5.3.7 0 1.1-.1 1.5-.3.9.2 1.7.3 2.5.3 3.2 0 5-1.4 5-3.2 0-1-.4-2-1-2.8-1-1.3-2.3-2.7-2.6-4.5-.2-1.3.1-3 .1-4.5 0-3-1.7-5-4.5-5z"
      fill="#F8FAFC"
    />
    {/* Wings */}
    <path
      d="M12 2C9.5 2 8 4 8 7c0 1.8.3 3.5 0 5.2-.4 2.2-1.8 3.8-2.8 5.4-.5.8-.7 1.6-.7 2.4 0 1.3 1.2 2.3 3.5 2.7-.4-.8-.5-1.7-.3-2.5.3-1.5 1.5-2.8 2.3-4.2.5-.9.8-1.9.9-3 0-1.5-.1-3-.1-4.5 0-2 1-3.5 2.5-4 0-.2-.7-.5-1.3-.5z"
      fill="#1E293B"
    />
    <path
      d="M12 2c2.5 0 4 2 4 5 0 1.8-.3 3.5 0 5.2.4 2.2 1.8 3.8 2.8 5.4.5.8.7 1.6.7 2.4 0 1.3-1.2 2.3-3.5 2.7.4-.8.5-1.7.3-2.5-.3-1.5-1.5-2.8-2.3-4.2-.5-.9-.8-1.9-.9-3 0-1.5.1-3 .1-4.5 0-2-1-3.5-2.5-4 0-.2.7-.5 1.3-.5z"
      fill="#0F172A"
    />
    {/* Beak & Feet */}
    <path
      d="M10.2 8.5c0-.8.8-1.5 1.8-1.5s1.8.7 1.8 1.5c0 .6-.8 1.5-1.8 1.5s-1.8-.9-1.8-1.5z"
      fill="#F59E0B"
    />
    <path
      d="M6 19.5c.5-.8 1.8-1.2 3.2-.8.8.2 1.5.8 2.1 1.3-.8.6-2 .8-3.2.5-.9-.2-1.7-.6-2.1-1zM18 19.5c-.5-.8-1.8-1.2-3.2-.8-.8.2-1.5.8-2.1 1.3.8.6 2 .8 3.2.5.9-.2 1.7-.6 2.1-1z"
      fill="#FBBF24"
    />
    {/* Eyes */}
    <circle cx="10.5" cy="5.8" r="0.7" fill="#000000" />
    <circle cx="13.5" cy="5.8" r="0.7" fill="#000000" />
  </svg>
);

export const TailwindLogo = ({ className = 'w-7 h-7' }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path
      fill="#06B6D4"
      d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z"
    />
  </svg>
);

export const FastAPILogo = ({ className = 'w-7 h-7' }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" fill="#009688" />
    <path
      d="M13.2 4.5L7.5 12.5H12L10.8 19.5L16.5 11.5H12L13.2 4.5Z"
      fill="#FFFFFF"
      stroke="#FFFFFF"
      strokeWidth="0.5"
      strokeLinejoin="round"
    />
  </svg>
);

export const PythonLogo = ({ className = 'w-7 h-7' }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path
      fill="#3776AB"
      d="M11.9 1.5c-4.4 0-4.1 1.9-4.1 1.9v2h4.2v.6H6.1s-2.8-.3-2.8 4.1 2.5 4.3 2.5 4.3h1.5v-2.1s-.1-2.5 2.5-2.5h4.2s2.4.1 2.4-2.4V4s.4-2.5-4.5-2.5zm-2.3 1.3a.8.8 0 1 1 0 1.6.8.8 0 0 1 0-1.6z"
    />
    <path
      fill="#FFD438"
      d="M12.1 22.5c4.4 0 4.1-1.9 4.1-1.9v-2H12v-.6h5.9s2.8.3 2.8-4.1-2.5-4.3-2.5-4.3h-1.5v2.1s.1 2.5-2.5 2.5H10s-2.4-.1-2.4 2.4V20s-.4 2.5 4.5 2.5zm2.3-1.3a.8.8 0 1 1 0-1.6.8.8 0 0 1 0 1.6z"
    />
  </svg>
);

export const SEOPPCLogo = ({ className = 'w-7 h-7' }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    <circle
      cx="10.5"
      cy="10.5"
      r="6.5"
      stroke="#0894FF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.5 15.5L20.5 20.5"
      stroke="#FF9004"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M8 12.5V11" stroke="#0894FF" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M10.5 12.5V9" stroke="#C959DD" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M13 12.5V7.5" stroke="#FF2E54" strokeWidth="1.8" strokeLinecap="round" />
    <path
      d="M7 9.5L10 7.5L13.5 6"
      stroke="#22D3EE"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
