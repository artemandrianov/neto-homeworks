import { useState, useEffect, type ChangeEvent, type FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, updateItem, cancelEdit } from "../actions/creators";

export default function AddItemForm() {
  const dispatch = useDispatch();
  const { items, editingId } = useSelector((state: any) => state.list);

  const [form, setForm] = useState({ name: "", price: "" });

  useEffect(() => {
    if (editingId !== null) {
      const target = items.find((el: any) => el.id === editingId);
      if (target) {
        setForm({ name: target.name, price: String(target.price) });
      }
    } else {
      setForm({ name: "", price: "" });
    }
  }, [editingId, items]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.price) return;

    if (editingId !== null) {
      dispatch(updateItem(editingId, form.name, Number(form.price)));
    } else {
      dispatch(addItem(form.name, Number(form.price)));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Услуга" />
      <input name="price" type="number" value={form.price} onChange={handleChange} placeholder="Цена" />
      <button type="submit">Save</button>
      {editingId !== null && (
        <button type="button" onClick={() => dispatch(cancelEdit())}>Cancel</button>
      )}
    </form>
  );
}