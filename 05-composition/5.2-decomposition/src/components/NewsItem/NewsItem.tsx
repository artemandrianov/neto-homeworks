export interface NewsItemProps {
  iconUrl: string
  text: string
  url: string
}

/** Отображает отдельную новость со ссылкой, иконкой источника и текстом заголовка. */
export const NewsItem = ({ iconUrl, text, url }: NewsItemProps) => {
  return (
    <li>
      <img src={iconUrl} alt="" width={16} height={16} />
      <a href={url}>{text}</a>
    </li>
  )
}