import { useDispatch } from "react-redux"
import { removeItem, setEditItem } from "../actions/creators"

export default function Item({ element }: any) {
  const dispatch = useDispatch()

  return (
    <li>
      {element.name} {element.price} руб.
      <button onClick={() => dispatch(setEditItem(element.id))}>✎</button>
      <button onClick={() => dispatch(removeItem(element.id))}>x</button>
    </li>
  )
}