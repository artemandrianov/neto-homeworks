import { useState, useEffect } from 'react'
import type { User } from '../types/types'

interface ListProps {
  activeUserId: number | null
  onSelect: (user: User) => void
}

export const List = ({ activeUserId, onSelect }: ListProps) => {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setLoading(true)
    fetch(import.meta.env.VITE_DATA_USERS_URL)
      .then((response) => {
        if (!response.ok) throw new Error('Ошибка загрузки списка')
        return response.json()
      })
      .then((data) => setUsers(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <div>Загрузка списка пользователей...</div>
  if (error) return <div>Ошибка: {error}</div>

  return (
    <ul className="user-list">
      {users.map((user) => (
        <li
          key={user.id}
          className={`user-list-item ${user.id === activeUserId ? 'active' : ''}`}
          onClick={() => onSelect(user)}
        >
          {user.name}
        </li>
      ))}
    </ul>
  )
}