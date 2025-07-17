import React from 'react';

interface TerminalHeaderProps {
  title?: string;
  status?: string;
  showError?: boolean;
}

export const TerminalHeader: React.FC<TerminalHeaderProps> = ({ 
  title = "WEATHER TERMINAL v2.1", 
  status = "READY",
  showError = false 
}) => {
  const centeredTitle = title.length > 38 ? title.substring(0, 38) : title.padStart(Math.floor((38 + title.length) / 2)).padEnd(38);
  const centeredStatus = status.length > 71 ? status.substring(0, 71) : status.padEnd(71);

  const weatherArt = [
    "██╗    ██╗███████╗ █████╗ ████████╗██╗  ██╗███████╗██████╗                   ",
    "██║    ██║██╔════╝██╔══██╗╚══██╔══╝██║  ██║██╔════╝██╔══██╗                  ",
    "██║ █╗ ██║█████╗  ███████║   ██║   ███████║█████╗  ██████╔╝                  ",
    "██║███╗██║██╔══╝  ██╔══██║   ██║   ██╔══██║██╔══╝  ██╔══██╗                  ",
    "╚███╔███╔╝███████╗██║  ██║   ██║   ██║  ██║███████╗██║  ██║                  ",
    " ╚══╝╚══╝ ╚══════╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝                  "
  ];

  const errorArt = [
    "███████╗██████╗ ██████╗  ██████╗ ██████╗                                      ",
    "██╔════╝██╔══██╗██╔══██╗██╔═══██╗██╔══██╗                                     ",
    "█████╗  ██████╔╝██████╔╝██║   ██║██████╔╝                                     ",
    "██╔══╝  ██╔══██╗██╔══██╗██║   ██║██╔══██╗                                     ",
    "███████╗██║  ██║██║  ██║╚██████╔╝██║  ██║                                     ",
    "╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝                                     "
  ];

  const artLines = showError ? errorArt : weatherArt;

  return (
    <div className="terminal-header">
      <pre className="ascii-art">
{`┌─────────────────────────────────────────────────────────────────────────────────┐
│                              ${centeredTitle}                             │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│  ${artLines[0]}│
│  ${artLines[1]}│
│  ${artLines[2]}│
│  ${artLines[3]}│
│  ${artLines[4]}│
│  ${artLines[5]}│
│                                                                                 │
├─────────────────────────────────────────────────────────────────────────────────┤
│ STATUS: ${centeredStatus} │
│ CURSOR: █                                                                       │
└─────────────────────────────────────────────────────────────────────────────────┘`}
      </pre>
    </div>
  );
};