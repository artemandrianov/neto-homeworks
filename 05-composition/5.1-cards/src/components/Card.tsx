import type { CardItems } from '../types/types'
import './Card.css'

export const Card = ({ img, title, text, link, btnText }: CardItems) => {


  return (
    <div className="card">
      {img ? (
        <img src={img} className="card-img" alt="..."></img>
      ) : (
        <></>
      )}
      <div className="card-container">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href={link} className="btn btn-primary">{btnText}</a>
      </div>
    </div>
  )
}