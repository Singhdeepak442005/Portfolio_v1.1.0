import React from "react";
import styled from "styled-components";

type Props = {
  onOpen?: () => void;
  href?: string;
  target?: string;
  label: string;
  icon?: React.ReactNode;
  style?: React.CSSProperties;
  active?: boolean;
};

const ShortcutWrap = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;
  color: #ECEFF4;
  font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
  z-index: 5; /* below windows */
`;

const IconTile = styled.div<{ active?: boolean }>`
  width: 56px;
  height: 56px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  background: rgba(10, 10, 10, 0.8);
  backdrop-filter: blur(8px);
  box-shadow: ${({ active }) => active
    ? '0 0 0 2px rgba(0, 180, 255, 0.7), 0 4px 12px rgba(0, 0, 0, 0.25), 0 0 25px rgba(0, 180, 255, 0.3)'
    : '0 0 0 1px rgba(255, 255, 255, 0.08), 0 6px 18px rgba(0, 0, 0, 0.3)'};
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.05);

  svg {
    filter: drop-shadow(0 0 4px rgba(255, 255, 255, 0.2));
    transition: filter 0.3s ease;
  }

  ${ShortcutWrap}:hover & {
    background: rgba(10, 10, 10, 0.9);
    transform: translateY(-3px) scale(1.08);
    box-shadow: 0 0 0 2px rgba(0, 180, 255, 0.6), 0 8px 24px rgba(0, 0, 0, 0.4), 0 0 35px rgba(0, 180, 255, 0.4);

    svg {
      filter: drop-shadow(0 0 8px rgba(0, 180, 255, 0.6)) drop-shadow(0 0 12px rgba(0, 180, 255, 0.3));
    }
  }
`;

const Label = styled.div`
  font-size: 12px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
`;

export const Icons = {
  Terminal: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="4" width="18" height="14" rx="4" stroke="#00FF88" strokeWidth="1.8" />
      <path d="M7 9l3 3-3 3" stroke="#00FF88" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 15h5" stroke="#00FF88" strokeWidth="1.8" strokeLinecap="round" />
      <defs>
        <filter id="terminal-glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
    </svg>
  ),
  LinkedIn: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="#2196F3" aria-hidden>
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.07c.67-1.2 2.3-2.47 4.73-2.47 5.06 0 6 3.33 6 7.66V24h-5v-7.58c0-1.81-.03-4.14-2.52-4.14-2.52 0-2.9 1.97-2.9 4v7.72h-5V8z" />
      <defs>
        <filter id="linkedin-glow">
          <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
    </svg>
  ),
  GitHub: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="#F8F9FA" aria-hidden>
      <path d="M12 .5a12 12 0 00-3.79 23.4c.6.11.82-.26.82-.58v-2.17c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.75.08-.74.08-.74 1.22.09 1.86 1.26 1.86 1.26 1.08 1.85 2.83 1.31 3.52 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.46-1.33-5.46-5.92 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.29-1.55 3.29-1.23 3.29-1.23.67 1.66.25 2.88.13 3.18.77.84 1.23 1.91 1.23 3.22 0 4.6-2.81 5.61-5.48 5.91.43.37.81 1.1.81 2.22v3.29c0 .32.21.69.82.58A12 12 0 0012 .5z"/>
      <defs>
        <filter id="github-glow">
          <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
    </svg>
  ),
  TryHackMe: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="#FF3B30" aria-hidden>
      <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.18l6.36 3.54L12 11.26 5.64 7.72 12 4.18zM5 9.14l7 3.88v6.78L5 15.92V9.14zm8 10.66v-6.78l7-3.88v6.78l-7 3.88z" />
      <defs>
        <filter id="tryhackme-glow">
          <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
    </svg>
  ),
  Blog: (
    <img 
      src="https://d2fltix0v2e0sb.cloudfront.net/dev-black.png" 
      alt="dev.to logo" 
      width="28" 
      height="28" 
    />
  ),
  PDF: (
    <img 
      src="https://cdn-icons-png.flaticon.com/512/337/337946.png" 
      alt="PDF icon" 
      width="28" 
      height="28"
    />
  ),
  Browser: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="7" cy="8" r="1" fill="currentColor"/>
      <circle cx="10" cy="8" r="1" fill="currentColor"/>
      <circle cx="13" cy="8" r="1" fill="currentColor"/>
      <rect x="5" y="11" width="14" height="1" fill="currentColor"/>
      <rect x="5" y="13" width="10" height="1" fill="currentColor"/>
    </svg>
  ),
  TorBrowser: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="10" fill="#7D4698" stroke="#7D4698" strokeWidth="1"/>
      <circle cx="12" cy="12" r="7" fill="#FFFFFF" stroke="#7D4698" strokeWidth="1"/>
      <circle cx="12" cy="12" r="4" fill="#7D4698"/>
      <path d="M8 8 L10 10 L8 12" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 8 L14 10 L16 12" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 6 L12 8" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 16 L12 18" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  Fullscreen: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  FullscreenExit: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M9 3H3v6M15 3h6v6M9 21H3v-6M15 21h6v-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 8l3 3M16 16l-3-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  ),
};

const DesktopShortcut: React.FC<Props> = ({ onOpen, href, target = "_blank", label, icon, style, active }) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onOpen ? onOpen() : href && window.open(href, target);
    }
  };

  const handleClick = () => {
    onOpen ? onOpen() : href && window.open(href, target);
  };

  return (
    <ShortcutWrap role="button" tabIndex={0} aria-label={`Open ${label}`} onClick={handleClick} onKeyDown={handleKeyDown} style={style}>
      <IconTile active={active}>{icon}</IconTile>
      <Label>{label}</Label>
    </ShortcutWrap>
  );
};

export default DesktopShortcut;

