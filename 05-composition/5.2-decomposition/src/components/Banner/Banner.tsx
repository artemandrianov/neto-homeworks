interface BannerProps {
  imageUrl: string
  url: string
  altText?: string
}

/** Выводит широкий рекламный баннер (например, реклама кино) под блоком поиска. */
export const Banner = ({ imageUrl, url, altText = 'Advertisement' }: BannerProps) => {
  return (
    <div className="main-banner">
      <a href={url}>
        <img src={imageUrl} alt={altText} />
      </a>
    </div>
  )
}