export function formatDistance(timestamp: number): string {
  const diff = Date.now() - timestamp
  const minutes = Math.floor(diff / 60_000)
  if (minutes < 1) return 'только что'
  if (minutes < 60) return `${minutes} мин.`
  const hours = Math.floor(minutes / 60)
  if (hours < 24) return `${hours} ч.`
  const days = Math.floor(hours / 24)
  return `${days} д.`
}
