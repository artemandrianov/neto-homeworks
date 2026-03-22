import type { PhotoItem } from '../../types/types'
import './PhotoList.css'

interface PhotoListProps {
	items: PhotoItem[]
	onDelete: (id: string) => void
}

export default function PhotoList({ items, onDelete }: PhotoListProps) {
	return (
		<div className="photo-grid">
			{items.map((photo) => (
				<div key={photo.id} className="photo-card">
					<img src={photo.url} alt="Preview" />
					<button
						className="delete-btn"
						onClick={() => onDelete(photo.id)}
					>
						✘
					</button>
				</div>
			))}
		</div>
	)
}