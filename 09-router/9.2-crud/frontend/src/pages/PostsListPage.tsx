import { useNavigate } from 'react-router-dom'
import { postsApi } from '../api/posts'
import { useAsync } from '../hooks/useAsync'
import { PostCard } from '../components/PostCard/PostCard'
import './PostsListPage.css'

export function PostsListPage() {
  const navigate = useNavigate()
  const { state } = useAsync(() => postsApi.list(), [])

  return (
    <div className="posts-list-page">
      <div className="posts-list-page__toolbar">
        <button
          className="btn btn--primary"
          onClick={() => navigate('/posts/new')}
        >
          Создать пост
        </button>
      </div>

      {state.status === 'loading' && (
        <div className="state-message">Загрузка…</div>
      )}

      {state.status === 'error' && (
        <div className="state-message state-message--error">
          Ошибка: {state.error}
        </div>
      )}

      {state.status === 'success' && state.data.length === 0 && (
        <div className="state-message">Постов пока нет. Создайте первый!</div>
      )}

      {state.status === 'success' && (
        <div className="posts-list">
          {[...state.data].reverse().map((post) => (
            <PostCard
              key={post.id}
              post={post}
              onClick={() => navigate(`/posts/${post.id}`)}
            />
          ))}
        </div>
      )}
    </div>
  )
}
