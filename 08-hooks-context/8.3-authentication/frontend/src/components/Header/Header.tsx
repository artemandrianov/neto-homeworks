import type { FormEvent } from 'react'
import type { UserProfile } from '../../types/types'
import './Header.css'

interface HeaderProps {
  profile: UserProfile | null
  onLogin: (l: string, p: string) => void
  onLogout: () => void
}

export const Header = ({ profile, onLogin, onLogout }: HeaderProps) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const target = e.currentTarget
    const login = (target.elements.namedItem('login') as HTMLInputElement).value
    const password = (target.elements.namedItem('password') as HTMLInputElement).value
    onLogin(login, password)
  }

  return (
    <header className="header">
      <span className="header__logo">Neto Social</span>
      
      <div className="header__content">
        {profile ? (
          <div className="header__user">
            <span>Hello, {profile.name}</span>
            <img src={profile.avatar} alt="avatar" className="header__avatar" />
            <button onClick={onLogout} className="btn-logout">Logout</button>
          </div>
        ) : (
          <form className="header__login-form" onSubmit={handleSubmit}>
            <input name="login" placeholder="Username" required />
            <input name="password" type="password" placeholder="Password" required />
            <button type="submit">Login</button>
          </form>
        )}
      </div>
    </header>
  )
}