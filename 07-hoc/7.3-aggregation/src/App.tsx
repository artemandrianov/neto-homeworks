import { useEffect, useState } from 'react'
import type { ComponentType } from 'react'
import type { RawItem, MonthItem, YearItem, SortItem } from './types/types'
import { MonthTable } from './components/MonthTable'
import { YearTable } from './components/YearTable'
import { SortTable } from './components/SortTable'

const monthNames = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
]

const parseDate = (date: string) => new Date(date)

const withSort = <T extends { list: SortItem[] }>(
  Component: ComponentType<T>
) => {
  return (props: T) => {
    const sorted = [...props.list].sort(
      (a, b) => +parseDate(b.date) - +parseDate(a.date)
    )

    return <Component {...props} list={sorted} />
  }
}

const withYear = (
  Component: ComponentType<{ list: YearItem[] }>
) => {
  return ({ list }: { list: RawItem[] }) => {
    const map = new Map<number, number>()

    list.forEach(({ date, amount }) => {
      const year = new Date(date).getFullYear()
      map.set(year, (map.get(year) || 0) + amount)
    })

    const result: YearItem[] = Array.from(map.entries())
      .map(([year, amount]) => ({ year, amount }))
      .sort((a, b) => b.year - a.year)

    return <Component list={result} />
  }
}

const withMonth = (
  Component: ComponentType<{ list: MonthItem[] }>
) => {
  return ({ list }: { list: RawItem[] }) => {
    const map = new Map<number, number>()

    list.forEach(({ date, amount }) => {
      const d = new Date(date)
      const month = d.getMonth()
      map.set(month, (map.get(month) || 0) + amount)
    })

    const result: MonthItem[] = Array.from(map.entries())
      .sort((a, b) => b[0] - a[0])
      .map(([month, amount]) => ({
        month: monthNames[month],
        amount,
      }))

    return <Component list={result} />
  }
}

const MonthTablePretty = withMonth(MonthTable)
const YearTablePretty = withYear(YearTable)
const SortTablePretty = withSort(SortTable)

export const App = () => {
  const [list, setList] = useState<RawItem[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        import.meta.env.VITE_API_URL
      )
      const data = await res.json()
      setList(data.list)
    }

    fetchData()
  }, [])

  return (
    <div id="app">
      <MonthTablePretty list={list} />
      <YearTablePretty list={list} />
      <SortTablePretty list={list} />
    </div>
  )
}