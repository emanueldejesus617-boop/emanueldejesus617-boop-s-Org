import React from 'react';

interface MonogramLogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const MonogramLogo: React.FC<MonogramLogoProps> = ({
  size = 'md',
  className = '',
}) => {
  const dimensions =
    size === 'sm'
      ? 'h-8 w-8'
      : size === 'lg'
        ? 'h-14 w-14'
        : 'h-9 w-9';

  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${dimensions} shrink-0 ${className}`}
      aria-hidden="true"
    >
      <rect
        x="1"
        y="1"
        width="38"
        height="38"
        rx="10"
        className="fill-[#0f172a] dark:fill-[#131c31] stroke-slate-300 dark:stroke-[#26334d]"
        strokeWidth="1.5"
      />
      {/* Letter E */}
      <path
        d="M10.5 13H19.5M10.5 13V27M10.5 20H18M10.5 27H19.5"
        className="stroke-white dark:stroke-[#dfe2f0]"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Letter J */}
      <path
        d="M27 13V23.2C27 25.5 25.4 27.2 23.1 27.2C21.8 27.2 20.8 26.6 20.2 25.7"
        className="stroke-[#38bdf8]"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Precision dot */}
      <circle cx="31.2" cy="26.5" r="1.6" className="fill-[#38bdf8]" />
    </svg>
  );
};
