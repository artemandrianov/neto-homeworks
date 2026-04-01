import { NewsBlock } from './components/NewsBlock/NewsBlock'
import { ExchangeRates } from './components/ExchangeRates/ExchangeRates'
import { AdsBlock } from './components/AdsBlock/AdsBlock'
import { SearchNav } from './components/SearchNav/SearchNav'
import { SearchBar } from './components/SearchBar/SearchBar'
import { Banner } from './components/Banner/Banner'
import { Widget } from './components/Widget/Widget'
import { ListItem } from './components/Widget/ListItem'

// Mock-данные (в реальном проекте придут из API)
const mockNews = [
  { id: '1', iconUrl: '/icons/ria.png', text: 'Путин упростил получение автомобильных номеров', url: '#' },
  { id: '2', iconUrl: '/icons/vedomosti.png', text: 'В команде Зеленского раскрыли план реформ', url: '#' },
]
const mockRates = [
  { id: '1', currency: 'USD MOEX', rate: '63,52', change: '+0,09' },
  { id: '2', currency: 'EUR MOEX', rate: '70,86', change: '+0,14' },
]
const mockServices = [
  { id: '1', title: 'Видео', url: '#' },
  { id: '2', title: 'Картинки', url: '#' },
  { id: '3', title: 'Новости', url: '#' },
]

/** Корневой компонент главной страницы, объеденяющий в себе хедер, поиск и сетку виджетов. */
export const App = () => {
  return (
    <main className="portal-layout">
      {/* Верхний блок: Новости и Рекламный блок */}
      <header className="top-section">
        <div className="top-left">
          <NewsBlock news={mockNews} date="31 июля, среда 02:32" />
          <ExchangeRates rates={mockRates} />
        </div>
        <div className="top-right">
          <AdsBlock
            imageUrl="/promo.png"
            title="Работа над ошибками"
            description="Смотрите на Яндексе и запоминайте"
            url="#"
          />
        </div>
      </header>

      {/* Поисковый блок и навигация */}
      <section className="search-section">
        <SearchNav services={mockServices} />
        <SearchBar logoUrl="/yandex-logo.png" exampleText="фаза луны сегодня" />
      </section>

      {/* Рекламный баннер */}
      <Banner imageUrl="/fast-and-furious-banner.jpg" url="#" />

      {/* Нижняя сетка виджетов */}
      <section className="widgets-grid">
        <Widget title="Телепрограмма" titleUrl="#tv">
          <ul className="tv-list">
            <ListItem time="02:00" title="THT. Best" subtitle="ТНТ International" />
            <ListItem time="02:15" title="Джинглики" subtitle="Карусель INT" />
            <ListItem time="02:25" title="Наедине со всеми" subtitle="Первый" />
          </ul>
        </Widget>

        <Widget title="Эфир" titleUrl="#live">
          <ul className="live-list">
            <ListItem icon="/play.svg" title="Управление как искусство" subtitle="Успех" />
            <ListItem icon="/play.svg" title="Ночь. Мир в это время" subtitle="earthTV" />
          </ul>
        </Widget>
      </section>
    </main>
  )
}