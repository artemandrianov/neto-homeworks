import type { Post } from '../../types/post';
import { formatDistance } from '../../utils/date';
import './PostCard.css';

interface PostCardProps {
  post: Post;
  onClick?: () => void;
}

export function PostCard({ post, onClick }: PostCardProps) {
  return (
    <article className="post-card" onClick={onClick} role={onClick ? 'button' : undefined} tabIndex={onClick ? 0 : undefined}>
      <div className="post-card__header">
        <div className="post-card__avatar">
          <span>IG</span>
        </div>
        <div className="post-card__meta">
          <span className="post-card__author">Artem Andrianov</span>
          <span className="post-card__time">
            🏅 Основатель группы · {formatDistance(post.created)}
          </span>
        </div>
      </div>
      <p className="post-card__content">{post.content}</p>
      <div className="post-card__actions">
        <button className="post-card__action-btn">👍 Нравится</button>
        <button className="post-card__action-btn">💬 Комментировать</button>
      </div>
    </article>
  );
}
