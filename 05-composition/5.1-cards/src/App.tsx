import { Card } from './components/Card'
import { cardsData } from './data/cardData'
import './App.css'

export default function App() {

  return (
    <div className="container">
      {cardsData.map((card) => (
        <Card
          img={card.img}
          title={card.title}
          text={card.text}
          link={card.link}
          btnText={card.btnText}
        />
      ))}
    </div>
  )
}
