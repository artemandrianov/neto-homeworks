import type { MouseEventHandler } from 'react';

interface IconSwitchProps {
  icon: string
  onSwitch: MouseEventHandler<HTMLSpanElement>
}

export function IconSwitch({ icon, onSwitch }: IconSwitchProps) {
  return (
    <div className="icon-switch-container">
      <span className="material-icons" onClick={onSwitch}>
        {icon}
      </span>
    </div>
  )
}