import React, { useState } from "react"

export const Hex2Rgb = () => {
  const [hex, setHex] = useState<string>("#")
  
  const [rgb, setRgb] = useState<string>("")
  const [bgColor, setBgColor] = useState<string>("#ffffff")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setHex(value)

    if (value.length === 7) {
      const result = /^#?([A-Fa-f\d]{2})([A-Fa-f\d]{2})([A-Fa-f\d]{2})$/i.exec(value)
      
      if (result) {
        const r = parseInt(result[1], 16)
        const g = parseInt(result[2], 16)
        const b = parseInt(result[3], 16)
        
        setRgb(`rgb(${r}, ${g}, ${b})`)
        setBgColor(value)
      } else {
        setRgb("Ошибка!")
        setBgColor("#e94b35")
      }
    } else {
      setRgb("")
    }
  }

  return (
    <div 
      className="container" 
      style={{ 
        backgroundColor: bgColor,
        transition: 'background-color 0.3s ease'
      }}
    >
      <form className="hex2rgbForm" onSubmit={(e) => e.preventDefault()}>
        <input
          className="hexInput"
          maxLength={7}
          type="text"
          name="hexColor"
          value={hex}
          onChange={handleChange}
        />
        <div className="hexOutput">{rgb}</div>
      </form>
    </div>
  );
};