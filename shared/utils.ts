export function relativeTime(timestamp: string | number) {
  if (!timestamp) return undefined
  const date = new Date(timestamp)
  if (Number.isNaN(date.getDay())) return undefined

  const now = new Date()
  const diffInSeconds = (now.getTime() - date.getTime()) / 1000
  const diffInMinutes = diffInSeconds / 60
  const diffInHours = diffInMinutes / 60

  if (diffInSeconds < 60) {
    return "刚刚"
  } else if (diffInMinutes < 60) {
    const minutes = Math.floor(diffInMinutes)
    return `${minutes}分钟前`
  } else if (diffInHours < 24) {
    const hours = Math.floor(diffInHours)
    return `${hours}小时前`
  } else {
    const month = date.getMonth() + 1
    const day = date.getDate()
    return `${month}月${day}日`
  }
}
