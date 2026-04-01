interface SearchBarProps {
  logoUrl: string
  exampleText: string
}

/** Главный поисковый блок: логотип, поле ввода, кнопка "Найти" и текстовая подсказка под ними. */
export const SearchBar = ({ logoUrl, exampleText }: SearchBarProps) => {
  return (
    <div className="search-bar-container">
      <img src={logoUrl} alt="Logo" className="logo" />
      <form className="search-form" action="/search" method="GET">
        <input type="text" name="q" className="search-input" />
        <button type="submit" className="search-button">Найти</button>
      </form>
      <p className="search-hint">Найдется всё. Например, <span>{exampleText}</span></p>
    </div>
  )
}