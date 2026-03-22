import { useState } from 'react'
import type { PhotoItem } from '../types/types'
import FileSelector from './FileSelector/FileSelector'
import PhotoList from './PhotoList/PhotoList'

export default function PhotoManager() {
	const [photos, setPhotos] = useState<PhotoItem[]>([])

	const fileToDataUrl = (file: File): Promise<string> => {
		return new Promise((resolve, reject) => {
			const fileReader = new FileReader()
			fileReader.addEventListener('load', () => {
				resolve(fileReader.result as string)
			})
			fileReader.addEventListener('error', () => {
				reject(new Error('Ошибка чтения файла'))
			})
			fileReader.readAsDataURL(file)
		})
	}
	const handleFilesSelect = async (files: File[]) => {
		const newUrls = await Promise.all(files.map(f => fileToDataUrl(f)))

		const newPhotos: PhotoItem[] = newUrls.map(url => ({
			id: crypto.randomUUID(),
			url
		}))

		setPhotos(prev => [...prev, ...newPhotos])
	}
	const handleDelete = (id: string) => {
		setPhotos(prev => prev.filter(p => p.id !== id))
	}

	return (
		<div className="photo-manager">
			<FileSelector onSelect={handleFilesSelect} />
			<PhotoList items={photos} onDelete={handleDelete} />
		</div>
	)
}