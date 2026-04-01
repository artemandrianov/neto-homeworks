import { NewsItem, type NewsItemProps } from '../NewsItem/NewsItem'

interface NewsBlockProps {
  news: (NewsItemProps & { id: string })[];
  date: string;
}

/** Контейнер для навигации по новостям, списка актуальных новостей и текущей даты. */
export const NewsBlock = ({ news, date }: NewsBlockProps) => (
  <section className="news-block">
    <nav className="news-tabs">
      <a href="#now" className="active">Сейчас в СМИ</a>
      <a href="#germany">в Германии</a>
      <a href="#recommend">Рекомендуем</a>
      <span className="current-date">{date}</span>
    </nav>
    <ul className="news-list">
      {news.map(({ id, ...itemProps }) => (
        <NewsItem key={id} {...itemProps} />
      ))}
    </ul>
  </section>
)
