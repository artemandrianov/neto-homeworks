interface AdsBlockProps {
  imageUrl: string
  title: string
  description: string
  url: string
}

/** Отвечает за вывод рекламы (например, "Работа над ошибками") в правой верхней части страницы. */
export const AdsBlock = ({ imageUrl, title, description, url }: AdsBlockProps) => {
  return (
    <aside className="ads-block">
      <img src={imageUrl} alt={title} className="ads-image" />
      <h3 className="ads-title"><a href={url}>{title}</a></h3>
      <p className="ads-description">{description}</p>
    </aside>
  )
}