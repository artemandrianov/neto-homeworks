import type { MessageItem } from "../types/models"
import { Message } from "./Message"
import { Typing } from "./Typing"
import { Response } from "./Response"

interface MessageProps {
  list?: MessageItem[]
}

export function MessageHistory({ list = [] }: MessageProps) {
  if (list.length === 0) {
    return null
  }

  return (
    <ul>
      {list.map((item) => {
        const commonProps = { from: item.from, message: item };

        if (item.type === 'message') {
          return <Message key={item.id} {...commonProps} />
        }
        
        if (item.type === 'response') {
          return <Response key={item.id} {...commonProps} />
        }
        
        if (item.type === 'typing') {
          return <Typing key={item.id} {...commonProps} />
        }
        return null
      })}
    </ul>
  )
}