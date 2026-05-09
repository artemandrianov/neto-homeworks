import type { UserProfile } from '../../types/types'
import './Header.css'

interface HeaderProps {
  profile: UserProfile | null
  onLogout: () => void
}

export const Header = ({ profile, onLogout }: HeaderProps) => {
  if (!profile) return null

  return (
    <header className="header">
      <span className="header__logo">Neto Social</span>
      <div className="header__content">
        <div className="header__user">
          <span>Hello, {profile.name}</span>
          <img src={profile.avatar} alt="avatar" className="header__avatar" />
          <button onClick={onLogout} className="btn-logout">Logout</button>
        </div>
      </div>
    </header>
  )
}