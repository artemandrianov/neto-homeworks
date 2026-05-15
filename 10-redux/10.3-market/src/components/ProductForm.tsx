import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../actions/creators'

export const ProductForm = () => {
  const dispatch = useDispatch()
  const [form, setForm] = useState({ title: '', price: '', oldPrice: '', imageUrl: '' })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!form.title || !form.price) return

    dispatch(addProduct({
      title: form.title,
      price: Number(form.price),
      oldPrice: form.oldPrice ? Number(form.oldPrice) : undefined,
      imageUrl: form.imageUrl || 'https://via.placeholder.com/200'
    }))

    setForm({ title: '', price: '', oldPrice: '', imageUrl: '' })
  }

  return (
    <form className="catalog-form" onSubmit={handleSubmit}>
      <input name="title" value={form.title} onChange={e => setForm({...form, title: e.target.value})} placeholder="Название" required />
      <input name="price" type="number" value={form.price} onChange={e => setForm({...form, price: e.target.value})} placeholder="Цена" required />
      <input name="oldPrice" type="number" value={form.oldPrice} onChange={e => setForm({...form, oldPrice: e.target.value})} placeholder="Старая цена" />
      <input name="imageUrl" value={form.imageUrl} onChange={e => setForm({...form, imageUrl: e.target.value})} placeholder="URL картинки" />
      <button type="submit">Добавить</button>
    </form>
  )
}