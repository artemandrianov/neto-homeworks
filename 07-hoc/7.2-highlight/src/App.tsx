import { useState } from 'react'
import type { ComponentType, PropsWithChildren } from 'react'

type BaseItem = {
  views: number
}

type VideoItem = BaseItem & {
  type: 'video'
  url: string
}

type ArticleItem = BaseItem & {
  type: 'article'
  title: string
}

type ListItem = VideoItem | ArticleItem

interface ListProps {
  list: ListItem[]
}

const New = ({ children }: PropsWithChildren) => {
  return (
    <div className="wrap-item wrap-item-new">
      <span className="label">New!</span>
      {children}
    </div>
  )
}

const Popular = ({ children }: PropsWithChildren) => {
  return (
    <div className="wrap-item wrap-item-popular">
      <span className="label">Popular!</span>
      {children}
    </div>
  )
}

interface WithViews {
  views: number
}

const withHighlight = <T extends WithViews>(
  Component: ComponentType<T>
) => {
  return (props: T) => {
    if (props.views >= 1000) {
      return (
        <Popular>
          <Component {...props} />
        </Popular>
      )
    }

    if (props.views < 100) {
      return (
        <New>
          <Component {...props} />
        </New>
      )
    }

    return <Component {...props} />
  }
}

const Article = ({ title, views }: ArticleItem) => {
  return (
    <div className="item item-article">
      <h3><a href="#">{title}</a></h3>
      <p className="views">Прочтений: {views}</p>
    </div>
  )
}

const Video = ({ url, views }: VideoItem) => {
  return (
    <div className="item item-video">
      <iframe
        src={url}
        style={{ border: 'none' }}
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
      <p className="views">Просмотров: {views}</p>
    </div>
  )
}

const ArticlePretty = withHighlight(Article)
const VideoPretty = withHighlight(Video)

const List = ({ list }: ListProps) => {
  return (
    <>
      {list.map((item, index) => {
        switch (item.type) {
          case 'video':
            return <VideoPretty key={index} {...item} />

          case 'article':
            return <ArticlePretty key={index} {...item} />

          default:
            return null
        }
      })}
    </>
  )
}

export const App = () => {
  const [list] = useState<ListItem[]>([
    {
      type: 'video',
      url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&controls=0&showinfo=0',
      views: 50,
    },
    {
      type: 'video',
      url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&controls=0&showinfo=0',
      views: 12,
    },
    {
      type: 'article',
      title: 'Невероятные события в неизвестном поселке...',
      views: 175,
    },
    {
      type: 'article',
      title: 'Секретные данные были раскрыты!',
      views: 1532,
    },
    {
      type: 'video',
      url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&controls=0&showinfo=0',
      views: 4253,
    },
    {
      type: 'article',
      title: 'Кот Бегемот обладает невероятной...',
      views: 12,
    },
  ])

  return <List list={list} />
}