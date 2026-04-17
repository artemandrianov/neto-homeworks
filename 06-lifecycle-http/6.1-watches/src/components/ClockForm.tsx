import { useState, type SubmitEvent } from 'react'
import './WorldClock.css'

interface ClockFormProps {
  onAdd: (name: string, offset: number) => void
}

export const ClockForm = ({ onAdd }: ClockFormProps) => {
  const [name, setName] = useState('')
  const [offset, setOffset] = useState('')

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    const parsedOffset = parseFloat(offset)

    if (name.trim() && !isNaN(parsedOffset)) {
      onAdd(name.trim(), parsedOffset)
      setName('')
      setOffset('')
    }
  }

  return (
    <form className="clock-form" onSubmit={handleSubmit}>
      <div className="clock-form__field">
        <label htmlFor="name">Название</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="clock-form__field">
        <label htmlFor="offset">Временная зона</label>
        <input
          id="offset"
          type="number"
          step="any"
          value={offset}
          onChange={(e) => setOffset(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="clock-form__submit">
        Добавить
      </button>
    </form>
  )
}