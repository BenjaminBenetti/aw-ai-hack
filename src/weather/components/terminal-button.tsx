import React from 'react';

export interface TerminalButtonProps {
  id: string;
  label: string;
  isActive?: boolean;
  onClick: () => void;
  disabled?: boolean;
}

export interface TerminalButtonGroupProps {
  prompt?: string;
  buttons: TerminalButtonProps[];
  className?: string;
}

export const TerminalButton: React.FC<TerminalButtonProps> = ({ 
  label, 
  isActive = false, 
  onClick, 
  disabled = false 
}) => {
  return (
    <button
      type="button"
      className={`terminal-button ${isActive ? 'active' : ''} ${disabled ? 'disabled' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      [{label}]
    </button>
  );
};

export const TerminalButtonGroup: React.FC<TerminalButtonGroupProps> = ({ 
  prompt, 
  buttons, 
  className = '' 
}) => {
  return (
    <div className={`terminal-button-group ${className}`}>
      {prompt && (
        <div className="terminal-prompt">
          <span className="prompt-symbol">$</span> {prompt}
        </div>
      )}
      <div className="button-group">
        {buttons.map((button) => (
          <TerminalButton
            key={button.id}
            id={button.id}
            label={button.label}
            isActive={button.isActive}
            onClick={button.onClick}
            disabled={button.disabled}
          />
        ))}
      </div>
    </div>
  );
};