import { useParams } from 'react-router-dom'
import type { NewsItem } from '../../types/types'

interface NewsDetailProps {
  news: NewsItem[]
  loading: boolean
}

export const NewsDetail = ({ news, loading }: NewsDetailProps) => {
  const { id } = useParams<{ id: string }>()

  if (loading) return <div className="loader">Загрузка новости...</div>

  const item = news.find((n) => n.id === id)

  if (!item) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1 style={{ fontSize: '3rem' }}>NOT FOUND</h1>
      </div>
    )
  }

  return (
    <article className="news-card news-card--single" style={{ maxWidth: '600px', margin: '0 auto' }}>
      <img src={item.image} alt={item.title} style={{ width: '100%' }} />
      <h2>{item.title}</h2>
      <p>{item.content}</p>
    </article>
  )
}