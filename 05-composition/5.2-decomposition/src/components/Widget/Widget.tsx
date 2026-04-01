import type { ReactNode } from 'react'

interface WidgetProps {
  title: string
  titleUrl?: string
  children: ReactNode
}

/** Обертка для контентных блоков (погода, карты, списки), предоставляющая стандартизированный заголовок. */
export const Widget = ({ title, titleUrl = '#', children }: WidgetProps) => (
  <article className="widget-card">
    <h3 className="widget-title">
      <a href={titleUrl}>{title}</a>
    </h3>
    <div className="widget-body">
      {children}
    </div>
  </article>
)