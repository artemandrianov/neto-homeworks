import type { IWorkout } from '../types/types'

interface SummaryTableProps {
  data: IWorkout[]
  onDelete: (id: string) => void
  onEdit: (id: string) => void
}

const formatDate = (date: string): string => {
  return date.split('-').reverse().join('.')
}

const sortByDate = (data: { id: string, date: string, distance: number }[]) => {
  return data.slice().sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export default function SummaryTable({ data, onDelete, onEdit }: SummaryTableProps) {
  const sortedData = sortByDate(data)

  return (
    <table>
      <thead>
        <tr>
          <th>Дата (ДД.ММ.ГГ)</th>
          <th>Пройдено км</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        {sortedData.map((row) => (
          <tr key={row.id}>
            <td>{formatDate(row.date)}</td>
            <td>{row.distance}</td>
            <td>
              <button onClick={() => onDelete(row.id)}>✘</button>
              <button onClick={() => onEdit(row.id)}>✎</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}