import { useState, useEffect } from 'react'
import './WorldClock.css'

interface ClockProps {
  id: string
  name: string
  offset: number
  onRemove: (id: string) => void
}

export const Clock = ({ id, name, offset, onRemove }: ClockProps) => {
  const [time, setTime] = useState(() => new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  const utcTime = time.getTime() + time.getTimezoneOffset() * 60000
  const localTime = new Date(utcTime + 3600000 * offset)

  const seconds = localTime.getSeconds()
  const minutes = localTime.getMinutes()
  const hours = localTime.getHours()

  const secondAngle = seconds * 6
  const minuteAngle = minutes * 6 + seconds * 0.1 
  const hourAngle = (hours % 12) * 30 + minutes * 0.5

  return (
    <div className="clock-item">
      <div className="clock-item__header">
        <span className="clock-item__title">{name}</span>
        <button 
          className="clock-item__remove" 
          onClick={() => onRemove(id)} 
          aria-label="Удалить часы"
        >
          ✕
        </button>
      </div>
      
      <div className="clock-face">
        <div
          className="clock-hand clock-hand--hour"
          style={{ transform: `rotate(${hourAngle}deg)` }}
        />
        <div
          className="clock-hand clock-hand--minute"
          style={{ transform: `rotate(${minuteAngle}deg)` }}
        />
        <div
          className="clock-hand clock-hand--second"
          style={{ transform: `rotate(${secondAngle}deg)` }}
        />
        <div className="clock-center" />
      </div>
    </div>
  )
}