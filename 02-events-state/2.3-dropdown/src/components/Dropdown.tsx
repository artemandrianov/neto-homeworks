import { useState } from "react"
import DropdownList from "./DropdownList"

export default function Dropdown() {
  const [isOpen, setOpen] = useState<boolean>(false)

  const toggleMenu = () => {
    setOpen((prev) => !prev);
  }

  return (
    <div className="container">
      <div className={`dropdown-wrapper ${isOpen ? "open" : ""}`} data-id="wrapper">
        <button className="btn" onClick={toggleMenu} data-id="toggle">
          <span>Account Settings</span>
          <i className="material-icons">public</i>
        </button>
        <DropdownList />
      </div>
    </div>
  )
}