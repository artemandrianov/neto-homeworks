import { useState } from 'react'
import type { IWorkout } from '../../types/types'
import InputForm from '../Input/Input'
import SummaryTable from '../SummaryTable'
import './Tracking.css'

export default function Tracking() {
  const [data, setData] = useState<IWorkout[]>([])
  const [editingItem, setEditingItem] = useState<IWorkout | null>(null)

  const handleSubmit = (date: string, distance: number) => {
    if (editingItem) {
      const updatedData = data.map((item) =>
        item.id === editingItem.id ? { ...item, date, distance } : item
      )
      setData(updatedData)
      setEditingItem(null)
    } else {
      const existingItem = data.find((item) => item.date === date)
      if (existingItem) {
        const newData = data.map((item) =>
          item.date === date ? { ...item, distance: item.distance + distance } : item
        )
        setData(newData)
      } else {
        const newItem: IWorkout = {
          id: Date.now().toString(),
          date,
          distance
        }
        setData([...data, newItem])
      }
    }

  }

  const handleDelete = (id: string) => {
    const newData = data.filter((item) => item.id !== id)
    setData(newData)
  }

  const handleEdit = (id: string) => {
    const itemToEdit = data.find((item) => item.id === id)
    if (itemToEdit) {
      setEditingItem(itemToEdit)
    }
  }

  return (
    <div className="container">
      <h1>Учёт тренировок</h1>
      <InputForm data={editingItem} onSubmit={handleSubmit} />
      <SummaryTable data={data} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  )
}