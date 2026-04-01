interface RateItem {
  id: string
  currency: string
  rate: string
  change: string
}

interface ExchangeRatesProps {
  rates: RateItem[]
}

/** Отображает список актуальных биржевых котировок (валюта, нефть) и их изменения. */
export const ExchangeRates = ({ rates }: ExchangeRatesProps) => {
  return (
    <ul className="exchange-rates">
      {rates.map(({ id, currency, rate, change }) => (
        <li key={id} className="rate-item">
          <strong>{currency}</strong> {rate} <span className="rate-change">{change}</span>
        </li>
      ))}
      <li><a href="#more">...</a></li>
    </ul>
  )
}