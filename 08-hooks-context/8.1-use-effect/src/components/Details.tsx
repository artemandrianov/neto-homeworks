import { useState, useEffect } from 'react'
import type { User, UserDetailsData } from '../types/types'

interface DetailsProps {
  info: User
}

export const Details = ({ info }: DetailsProps) => {
  const [details, setDetails] = useState<UserDetailsData | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    const baseUrl = import.meta.env.VITE_DATA_URL
    const fullUrl = `${baseUrl}${info.id}.json`

    console.log("Пытаюсь загрузить данные по ссылке:", fullUrl)

    fetch(fullUrl)
      .then((response) => {
        if (!response.ok) throw new Error('Network response was not ok')
        return response.json()
      })
      .then((data) => setDetails(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false))

  }, [info.id])

  if (loading) return <div className="details-loading">Загрузка деталей...</div>
  if (!details) return null

  return (
    <div className="user-details-card">
      <img src={details.avatar} alt={details.name} className="user-avatar" />
      <div className="user-info">
        <h2>{details.name}</h2>
        <p><strong>City:</strong> {details.details.city}</p>
        <p><strong>Company:</strong> {details.details.company}</p>
        <p><strong>Position:</strong> {details.details.position}</p>
      </div>
    </div>
  )
}