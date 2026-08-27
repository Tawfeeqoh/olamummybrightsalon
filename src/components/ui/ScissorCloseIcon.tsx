import React from 'react';

export const ScissorCloseIcon = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`relative flex items-center justify-center group ${className}`}>
      <svg 
        width="32" 
        height="32" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1.5"
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <style>{`
          .blade-left { transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1); transform-origin: 12px 12px; }
          .blade-right { transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1); transform-origin: 12px 12px; }
          .group:hover .blade-left { transform: rotate(18deg); }
          .group:hover .blade-right { transform: rotate(-18deg); }
        `}</style>
        
        {/* Pivot screw */}
        <circle cx="12" cy="12" r="1" fill="currentColor" />
        
        {/* Left blade + right finger hole (Bottom right to top left) */}
        <g className="blade-left">
          <circle cx="18" cy="18" r="2.5" />
          <path d="M16.5 16.5L4 4" />
          {/* Inner blade edge */}
          <path d="M12 12L5 7" opacity="0.5" />
        </g>
        
        {/* Right blade + left finger hole (Bottom left to top right) */}
        <g className="blade-right">
          <circle cx="6" cy="18" r="2.5" />
          <path d="M7.5 16.5L20 4" />
          {/* Inner blade edge */}
          <path d="M12 12L19 7" opacity="0.5" />
        </g>
      </svg>
    </div>
  );
};
