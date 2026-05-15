import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeFilter } from '../actions/creators'

export default function Filter() {
  const dispatch = useDispatch()
  const filterValue = useSelector((state: any) => state.list.filter)

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeFilter(e.target.value))
  }

  return (
    <div style={{ marginBottom: '15px' }}>
      <label htmlFor="filter">Фильтр по названию: </label>
      <input
        id="filter"
        name="filter"
        value={filterValue}
        onChange={handleFilterChange}
        placeholder="Введите для поиска..."
      />
    </div>
  )
}