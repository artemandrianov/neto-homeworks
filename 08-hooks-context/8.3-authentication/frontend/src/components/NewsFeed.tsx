import type { NewsItem } from '../types/types'
import './NewsFeed.css'

interface NewsFeedProps {
  news: NewsItem[]
}

export const NewsFeed = ({ news }: NewsFeedProps) => (
  <div className="news-feed">
    {news.map((item) => (
      <article key={item.id} className="news-card">
        <img src={item.image} alt="" />
        <h3>{item.title}</h3>
        <p>{item.content}</p>
      </article>
    ))}
  </div>
)