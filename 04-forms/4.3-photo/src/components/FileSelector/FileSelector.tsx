interface FileSelectorProps {
  onSelect: (files: File[]) => void
}

export default function FileSelector({ onSelect }: FileSelectorProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      onSelect(Array.from(e.target.files))
      e.target.value = ''
    }
  }

  return (
    <div className="file-selector-container">
      <input 
        type="file" 
        accept="image/*" 
        multiple 
        onChange={handleChange} 
        className="file-input"
      />
      <div className="file-overlay">
        <span>Click to select</span>
      </div>
    </div>
  )
}