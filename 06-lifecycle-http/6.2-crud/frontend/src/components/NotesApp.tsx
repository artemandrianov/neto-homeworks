import { useState, useEffect, type SubmitEvent } from 'react'
import './Notes.css'

interface Note {
  id: number
  content: string
}

const API_URL = 'http://localhost:7070/notes'

export const NotesApp = () => {
  const [notes, setNotes] = useState<Note[]>([])
  const [newNote, setNewNote] = useState('')

  const fetchNotes = async () => {
    try {
      const response = await fetch(API_URL)
      if (!response.ok) throw new Error('Ошибка загрузки')
      const data = await response.json()
      setNotes(data)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    fetchNotes()
  }, [])

  const handleAddNote = async (e: SubmitEvent) => {
    e.preventDefault()
    if (!newNote.trim()) return

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: 0, content: newNote }),
      })

      if (response.ok) {
        setNewNote('')
        fetchNotes()
      }
    } catch (e) {
      console.error(e)
    }
  }

  const handleDeleteNote = async (id: number) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      })
      if (response.ok) {
        fetchNotes()
      }
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div className="notes-container">
      <div className="notes-header">
        <h1>Notes</h1>
        <button 
          className="refresh-btn" 
          onClick={fetchNotes} 
          title="Обновить данные"
        >
          ↻
        </button>
      </div>

      <div className="notes-list">
        {notes.map((note) => (
          <div key={note.id} className="note-card">
            <button 
              className="delete-btn" 
              onClick={() => handleDeleteNote(note.id)}
            >
              ✕
            </button>
            <div className="note-content">{note.content}</div>
          </div>
        ))}
      </div>

      <form className="note-form" onSubmit={handleAddNote}>
        <label htmlFor="content">New Note</label>
        <textarea
          id="content"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          required
        />
        <button type="submit" className="add-btn">➤</button>
      </form>
    </div>
  )
}