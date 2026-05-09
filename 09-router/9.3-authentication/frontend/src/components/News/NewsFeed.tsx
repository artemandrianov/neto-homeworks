import { Link } from 'react-router-dom'
import type { NewsItem } from '../../types/types'
import './NewsFeed.css'

interface NewsFeedProps {
  news: NewsItem[]
}

export const NewsFeed = ({ news }: NewsFeedProps) => (
  <div className="news-feed">
    {news.map((item) => (
      <Link to={`/news/${item.id}`} key={item.id} className="news-link-wrapper" style={{ textDecoration: 'none', color: 'inherit' }}>
        <article className="news-card">
          <img src={item.image} alt="" />
          <h3>{item.title}</h3>
          <p>{item.content}</p>
        </article>
      </Link>
    ))}
  </div>
)