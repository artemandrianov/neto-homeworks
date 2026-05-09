import { useState, useRef, type ChangeEvent, type KeyboardEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { postsApi } from '../api/posts'
import { Modal } from '../components/Modal/Modal'
import './NewPostPage.css'

export function NewPostPage() {
  const navigate = useNavigate()
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const handleClose = () => navigate('/')

  const handleSubmit = async () => {
    if (!content.trim() || loading) return
    setLoading(true)
    try {
      await postsApi.create(content.trim())
      navigate('/')
    } catch {
      setLoading(false)
    }
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) handleSubmit()
  }

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value)
  }

  return (
    <Modal
      title="Публикация"
      onClose={handleClose}
      footer={
        <button
          className="btn btn--primary"
          onClick={handleSubmit}
          disabled={!content.trim() || loading}
        >
          {loading ? 'Публикуем…' : 'Опубликовать'}
        </button>
      }
    >
      <div className="new-post__avatar">IG</div>
      <textarea
        ref={textareaRef}
        className="new-post__textarea"
        placeholder="Напишите что-нибудь…"
        value={content}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        autoFocus
        rows={3}
      />
    </Modal>
  )
}
