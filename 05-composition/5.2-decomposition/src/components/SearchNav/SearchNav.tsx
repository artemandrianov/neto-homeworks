interface ServiceProp {
  id: string
  title: string
  url: string
}

/** Рендерит панель навигации над строкой поиска на основе переданного массива сервисов. */
export const SearchNav = ({ services }: { services: ServiceProp[] }) => (
  <nav className="search-nav">
    <ul className="search-nav-list">
      {services.map(({ id, title, url }) => (
        <li key={id}><a href={url}>{title}</a></li>
      ))}
      <li><a href="#more">ещё</a></li>
    </ul>
  </nav>
)