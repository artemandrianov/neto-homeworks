export interface ListItemProps {
  time?: string
  icon?: string
  title: string
  subtitle?: string
  url?: string
}

/** Универсальный элемент списка для виджетов, поддерживающий опциональные иконки, время и подзаголовки. */
export const ListItem = ({ time, icon, title, subtitle, url = '#' }: ListItemProps) => (
  <li className="widget-list-item">
    {time && <span className="item-time">{time}</span>}
    {icon && <img src={icon} alt="" className="item-icon" />}
    <a href={url} className="item-title">{title}</a>
    {subtitle && <span className="item-subtitle"> {subtitle}</span>}
  </li>
)