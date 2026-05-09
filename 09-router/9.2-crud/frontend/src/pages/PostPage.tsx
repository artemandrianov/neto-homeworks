import { useState, type ChangeEvent } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { postsApi } from '../api/posts'
import { useAsync } from '../hooks/useAsync'
import { PostCard } from '../components/PostCard/PostCard'
import { Modal } from '../components/Modal/Modal'
import type { Post } from '../types/post'
import './PostPage.css'

export function PostPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const postId = Number(id)

  const { state, refetch } = useAsync(() => postsApi.get(postId), [postId])

  const [editing, setEditing] = useState(false)
  const [editContent, setEditContent] = useState('')
  const [saving, setSaving] = useState(false)
  const [deleting, setDeleting] = useState(false)

  const post: Post | undefined =
    state.status === 'success' ? state.data.post : undefined

  const handleEditOpen = () => {
    setEditContent(post?.content ?? '')
    setEditing(true)
  }

  const handleEditClose = () => setEditing(false)

  const handleSave = async () => {
    if (!editContent.trim() || saving) return
    setSaving(true)
    try {
      await postsApi.update(postId, editContent.trim())
      await refetch()
      setEditing(false)
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async () => {
    if (deleting) return
    setDeleting(true)
    try {
      await postsApi.remove(postId)
      navigate('/')
    } finally {
      setDeleting(false)
    }
  }

  if (state.status === 'loading') {
    return <div className="state-message">Загрузка…</div>
  }

  if (state.status === 'error') {
    return (
      <div className="state-message state-message--error">
        Ошибка: {state.error}
      </div>
    )
  }

  if (!post) {
    return <div className="state-message">Пост не найден</div>
  }

  return (
    <>
      <div className="post-page">
        <PostCard post={post} />
        <div className="post-page__controls">
          <button
            className="btn btn--primary"
            onClick={handleEditOpen}
          >
            Изменить
          </button>
          <button
            className="btn btn--danger"
            onClick={handleDelete}
            disabled={deleting}
          >
            {deleting ? 'Удаляем…' : 'Удалить'}
          </button>
        </div>
      </div>

      {editing && (
        <Modal
          title="Редактировать публикацию"
          onClose={handleEditClose}
          footer={
            <button
              className="btn btn--primary"
              onClick={handleSave}
              disabled={!editContent.trim() || saving}
            >
              {saving ? 'Сохраняем…' : 'Сохранить'}
            </button>
          }
        >
          <div className="edit-post__avatar">IG</div>
          <textarea
            className="edit-post__textarea"
            value={editContent}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              setEditContent(e.target.value)
            }
            autoFocus
            rows={3}
          />
        </Modal>
      )}
    </>
  )
}
