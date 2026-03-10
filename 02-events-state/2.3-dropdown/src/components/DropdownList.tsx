import { useState } from "react"
import DropdownItem from "./DropdownItem"
import { menuItems } from "../types/types"

function DropdownList() {
  const [selected, setSelected] = useState<string>(menuItems[0])

  return (
    <ul data-id="dropdown" className="dropdown">
      {menuItems.map((item) => (
        <DropdownItem 
          key={item} 
          item={item} 
          isActive={item === selected} 
          onSelect={() => setSelected(item)} 
        />
      ))}
    </ul>
  )
}

export default DropdownList