import React from 'react';

interface NagadLogoProps {
  size?: number;
  showText?: boolean;
  textColor?: string;
  className?: string;
}

export const NagadLogo: React.FC<NagadLogoProps> = ({
  size = 40,
  showText = false,
  textColor = '#EC1C24',
  className = '',
}) => {
  return (
    <div className={`inline-flex items-center gap-2 select-none ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform hover:scale-105"
      >
        <defs>
          <linearGradient id="nagadGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F97316" />
            <stop offset="50%" stopColor="#EA580C" />
            <stop offset="100%" stopColor="#DC2626" />
          </linearGradient>
          <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* Outer vibrant badge */}
        <circle cx="50" cy="50" r="48" fill="url(#nagadGrad)" filter="url(#shadow)" />
        
        {/* Inner subtle decorative ring */}
        <circle cx="50" cy="50" r="43" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.4" />

        {/* Dynamic Stylized Bengali 'ন' mark */}
        <path
          d="M32 34C32 29 36 25 41 25C47 25 50 28 53 33L67 58C69 61 72 63 76 63C79 63 81 61 81 58V34C81 30.7 83.7 28 87 28C90.3 28 93 30.7 93 34V58C93 69 84 76 73 76C65 76 58 72 54 65L40 40C39 38 38 37 36 37C34 37 33 38 33 40V68C33 71.3 30.3 74 27 74C23.7 74 21 71.3 21 68V42C21 37.6 25.6 34 32 34Z"
          fill="#FFFFFF"
        />

        {/* Small floating coin/dot spark representing digital currency */}
        <circle cx="34" cy="22" r="5" fill="#FEF08A" />
      </svg>

      {showText && (
        <span
          className="font-bold tracking-tight text-xl leading-none"
          style={{ color: textColor }}
        >
          নগদ
        </span>
      )}
    </div>
  );
};
