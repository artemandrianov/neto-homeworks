import { useState, type ReactNode } from 'react'
import './Collapse.css'

interface CollapseProps {
  collapsedLabel?: string
  expandedLabel?: string
  children: ReactNode
  title: string
}

export const Collapse = (
  {
    collapsedLabel = 'Развернуть',
    expandedLabel = 'Свернуть',
    children,
    title,
  }: CollapseProps
) => {

  const [isOpen, setIsOpen] = useState(false)

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="collapse">
      <button
        className="collapse__header"
        onClick={toggleCollapse}
        aria-expanded={isOpen}
      >
        <span className="collapse__title">{title}</span>
        <span className="collapse__label">
          {isOpen ? expandedLabel : collapsedLabel}
        </span>
        <span className={`collapse__icon ${isOpen ? 'collapse__icon--open' : ''}`}>
          ▼
        </span>
      </button>
      <div className={`collapse__content ${isOpen ? 'collapse__content--open' : ''}`}>
        <div className="collapse__body">
          {children}
        </div>
      </div>
    </div>
  )
}
