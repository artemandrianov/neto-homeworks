import { Star } from "./Star"

interface StarsProps {
  count?: number
}

export const Stars = ({ count = 0 }: StarsProps) => {
  if (typeof count !== 'number' || Number.isNaN(count) || count < 1 || count > 5) {
    return null
  }

  return (
    <ul className="card-body-stars u-clearfix">
      {Array.from({ length: count }).map((_, index) => (
        <li key={index}>
          <Star />
        </li>
      ))}
    </ul>
  )
}

