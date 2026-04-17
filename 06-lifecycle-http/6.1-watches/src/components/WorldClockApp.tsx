import { useState } from 'react'
import { ClockForm } from './ClockForm'
import { Clock } from './Clock'
import './WorldClock.css'

interface ClockData {
  id: string
  name: string
  offset: number
}

export const WorldClockApp = () => {
  const [clocks, setClocks] = useState<ClockData[]>([])

  const handleAddClock = (name: string, offset: number) => {
    const newClock: ClockData = {
      id: crypto.randomUUID(),
      name,
      offset,
    }
    setClocks((prev) => [...prev, newClock])
  }

  const handleRemoveClock = (id: string) => {
    setClocks((prev) => prev.filter((clock) => clock.id !== id))
  }

  return (
    <div>
      <ClockForm onAdd={handleAddClock} />
      
      <div className="clock-list">
        {clocks.map((clock) => (
          <Clock
            key={clock.id}
            id={clock.id}
            name={clock.name}
            offset={clock.offset}
            onRemove={handleRemoveClock}
          />
        ))}
      </div>
    </div>
  )
}