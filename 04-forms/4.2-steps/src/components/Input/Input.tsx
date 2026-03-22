import { useState, useEffect } from 'react'
import './Input.css'

interface DataItem {
  date: string
  distance: number
}

interface InputFormProps {
  data: DataItem | null
  onSubmit: (date: string, distance: number) => void
}

export default function InputForm({ data, onSubmit }: InputFormProps) {
  const [date, setDate] = useState('')
  const [distance, setDistance] = useState('')

  useEffect(() => {

    if (data) {
      setDate(data.date)
      setDistance(data.distance.toString())
    }
  }, [data])

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value)
  }

  const handleDistanceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (Number(value) >= 0) {
      setDistance(value)
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (date && distance) {
      onSubmit(date, parseFloat(distance))
      setDate('')
      setDistance('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-inputs">
        <label>
          Дата (ДД.ММ.ГГ):
          <input type="date" value={date} onChange={handleDateChange} />
        </label>
        <label>
          Пройдено км:
          <input type="number" value={distance} onChange={handleDistanceChange} />
        </label>
      </div>
      <button type="submit">Ок</button>
    </form>
  )
}