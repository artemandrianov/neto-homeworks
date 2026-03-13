export interface Author {
  name: string
}

export interface MessageItem {
  id: string
  from: Author
  type: 'response' | 'message' | 'typing'
  time: string
  text?: string
}

export interface MessageProps {
  from: Author
  message: MessageItem
}