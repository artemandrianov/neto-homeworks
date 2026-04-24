import { type ComponentType, useState } from 'react'

interface VideoItem {
  id: string
  url: string
  date: string
}

interface DateTimeProps {
  date: string
}

interface VideoProps {
  url: string
  date: string
}

interface VideoListProps {
  list: VideoItem[]
}

const formatDate = (date: string): string => {
  const now = new Date()
  const past = new Date(date)
  const diffMs = now.getTime() - past.getTime()

  const minutes = Math.floor(diffMs / (1000 * 60))
  const hours = Math.floor(diffMs / (1000 * 60 * 60))
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24))

  if (minutes < 60) {
    return `${minutes} минут назад`
  }

  if (hours < 24) {
    return `${hours} часов назад`
  }

  return `${days} дней назад`
}

const withDateTimePretty = <T extends DateTimeProps>(
  Component: ComponentType<T>
) => {
  return (props: T) => {
    const formattedDate = formatDate(props.date)
    return <Component {...props} date={formattedDate} />
  }
}

const DateTime = ({ date }: DateTimeProps) => {
  return <p className="date">{date}</p>
}

const DateTimePretty = withDateTimePretty(DateTime)

const Video = ({ url, date }: VideoProps) => {
  return (
    <div className="video">
      <iframe
        src={url}
        style={{ border: 'none' }}
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
      <DateTimePretty date={date} />
    </div>
  )
}

const VideoList = ({ list }: VideoListProps) => {
  return (
    <>
      {list.map((item) => (
        <Video key={item.id} url={item.url} date={item.date} />
      ))}
    </>
  )
}

export const App = () => {
  const [list] = useState<VideoItem[]>([
    {
      id: crypto.randomUUID(),
      url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&controls=0&showinfo=0',
      date: '2017-07-31 13:24:00',
    },
    {
      id: crypto.randomUUID(),
      url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&controls=0&showinfo=0',
      date: '2018-03-03 12:10:00',
    },
    {
      id: crypto.randomUUID(),
      url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&controls=0&showinfo=0',
      date: '2018-02-03 23:16:00',
    },
    {
      id: crypto.randomUUID(),
      url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&controls=0&showinfo=0',
      date: '2018-01-03 12:10:00',
    },
    {
      id: crypto.randomUUID(),
      url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&controls=0&showinfo=0',
      date: '2018-01-01 16:17:00',
    },
    {
      id: crypto.randomUUID(),
      url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&controls=0&showinfo=0',
      date: '2017-12-02 05:24:00',
    },
  ])

  return <VideoList list={list} />
}