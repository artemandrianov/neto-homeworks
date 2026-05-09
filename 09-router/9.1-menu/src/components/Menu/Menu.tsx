import { NavLink } from 'react-router-dom'
import { NAV_ITEMS } from '../../types/routes'
import './Menu.css'

export function Menu() {
  return (
    <nav className="menu">
      {NAV_ITEMS.map(({ label, path }) => (
        <NavLink
          key={path}
          to={path}
          end={path === '/'}
          className={({ isActive }) =>
            ['menu__item', isActive && 'menu__item-active']
              .filter(Boolean)
              .join(' ')
          }
        >
          {label}
        </NavLink>
      ))}
    </nav>
  )
}