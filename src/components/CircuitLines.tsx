import { useEffect, useState } from 'react';

interface CircuitLinesProps {
  className?: string;
}

const CircuitLines = ({ className = '' }: CircuitLinesProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="traceGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(210 95% 55% / 0)" />
          <stop offset="50%" stopColor="hsl(210 95% 55% / 0.3)" />
          <stop offset="100%" stopColor="hsl(210 95% 55% / 0)" />
        </linearGradient>
        <linearGradient id="verticalTraceGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="hsl(210 95% 55% / 0)" />
          <stop offset="50%" stopColor="hsl(210 95% 55% / 0.2)" />
          <stop offset="100%" stopColor="hsl(210 95% 55% / 0)" />
        </linearGradient>
      </defs>
      
      {/* Horizontal traces */}
      <path
        d="M0,20 L30,20 L35,25 L65,25 L70,20 L100,20"
        fill="none"
        stroke="url(#traceGradient)"
        strokeWidth="0.75"
        opacity={mounted ? 0.9 : 0}
        style={{
          strokeDasharray: 1000,
          strokeDashoffset: mounted ? 0 : 1000,
          transition: 'stroke-dashoffset 2s ease-out, opacity 0.5s ease',
        }}
      />
      
      <path
        d="M0,80 L20,80 L25,75 L75,75 L80,80 L100,80"
        fill="none"
        stroke="url(#traceGradient)"
        strokeWidth="0.75"
        opacity={mounted ? 0.9 : 0}
        style={{
          strokeDasharray: 1000,
          strokeDashoffset: mounted ? 0 : 1000,
          transition: 'stroke-dashoffset 2.5s ease-out 0.3s, opacity 0.5s ease 0.3s',
        }}
      />

      {/* Vertical traces */}
      <path
        d="M15,0 L15,30 L20,35 L20,65 L15,70 L15,100"
        fill="none"
        stroke="url(#verticalTraceGradient)"
        strokeWidth="0.75"
        opacity={mounted ? 0.4 : 0}
        style={{
          strokeDasharray: 1000,
          strokeDashoffset: mounted ? 0 : 1000,
          transition: 'stroke-dashoffset 3s ease-out 0.5s, opacity 0.5s ease 0.5s',
        }}
      />

      <path
        d="M85,0 L85,40 L80,45 L80,55 L85,60 L85,100"
        fill="none"
        stroke="url(#verticalTraceGradient)"
        strokeWidth="0.75"
        opacity={mounted ? 0.4 : 0}
        style={{
          strokeDasharray: 1000,
          strokeDashoffset: mounted ? 0 : 1000,
          transition: 'stroke-dashoffset 3s ease-out 0.7s, opacity 0.5s ease 0.7s',
        }}
      />
    </svg>
  );
};

export default CircuitLines;
