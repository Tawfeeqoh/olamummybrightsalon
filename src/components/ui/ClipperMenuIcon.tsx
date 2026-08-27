import React from 'react';

export const ClipperMenuIcon = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`relative flex items-center justify-center group ${className}`}>
      <svg 
        width="28" 
        height="28" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1.5"
        strokeLinecap="round" 
        strokeLinejoin="round"
        className="transition-all duration-300 group-hover:-rotate-[15deg] group-hover:origin-bottom"
      >
        <style>{`
          @keyframes buzz {
            0% { transform: rotate(-15deg) translate(0, 0); }
            20% { transform: rotate(-15deg) translate(0.5px, -0.5px); }
            40% { transform: rotate(-15deg) translate(-0.5px, 0.5px); }
            60% { transform: rotate(-15deg) translate(0.5px, 0.5px); }
            80% { transform: rotate(-15deg) translate(-0.5px, -0.5px); }
            100% { transform: rotate(-15deg) translate(0, 0); }
          }
          .group:hover .clipper-svg {
            animation: buzz 0.1s linear infinite;
          }
          .clipper-power {
            transition: fill 0.3s ease;
          }
          .group:hover .clipper-power {
            fill: #25D366; /* Subtle green glow when "on" */
            stroke: #25D366;
          }
        `}</style>
        
        <g className="clipper-svg origin-bottom">
          {/* Blade Teeth */}
          <path d="M7 3h10" />
          <path d="M7 3v3" />
          <path d="M9 3v3" />
          <path d="M11 3v3" />
          <path d="M13 3v3" />
          <path d="M15 3v3" />
          <path d="M17 3v3" />
          
          {/* Blade Guard / Base */}
          <path d="M7 6l1 3h8l1-3z" />
          
          {/* Body */}
          <rect x="7.5" y="9" width="9" height="11" rx="2" />
          
          {/* Power Switch */}
          <circle cx="12" cy="14" r="1.5" className="clipper-power" />
          
          {/* Cord */}
          <path d="M12 20v3" />
          <path d="M12 23c0 1 1 1 2 1" />
        </g>
      </svg>
    </div>
  );
};
