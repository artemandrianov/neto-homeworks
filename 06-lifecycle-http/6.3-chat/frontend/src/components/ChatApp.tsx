import { useState, useEffect, useRef, type SubmitEvent } from 'react'
import './Chat.css'

interface Message {
  id: number
  userId: string
  content: string
}

const API_URL = 'http://localhost:7070/messages'

const getUserId = (): string => {
  let id = localStorage.getItem('chatUserId')
  if (!id) {
    id = crypto.randomUUID()
    localStorage.setItem('chatUserId', id)
  }
  return id
}

const getUserColor = (userId: string): string => {
  let hash = 0
  for (let i = 0; i < userId.length; i++) {
    hash = userId.charCodeAt(i) + ((hash << 5) - hash)
  }
  return `hsl(${Math.abs(hash) % 360}, 65%, 40%)`
}

export const ChatApp = () => {
  const [messages, setMessages] = useState<Message[]>([])
  const [pendingMessages, setPendingMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  
  const userId = useRef(getUserId()).current
  const lastMessageId = useRef(0)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, pendingMessages])

  const fetchMessages = async () => {
    try {
      const response = await fetch(`${API_URL}?from=${lastMessageId.current}`)
      if (!response.ok) return
      
      const newMessages: Message[] = await response.json()
      
      if (newMessages.length > 0) {
        setMessages((prev) => {
          const existingIds = new Set(prev.map(m => m.id))
          const filteredNew = newMessages.filter(m => !existingIds.has(m.id))
          return [...prev, ...filteredNew]
        })
        
        const maxId = Math.max(...newMessages.map((m) => m.id))
        if (maxId > lastMessageId.current) {
          lastMessageId.current = maxId
        }

        setPendingMessages([])
      }
    } catch (error) {
      console.error('Ошибка при получении сообщений:', error)
    }
  }

  useEffect(() => {
    fetchMessages()
    const intervalId = setInterval(fetchMessages, 2000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  const handleSendMessage = async (e: SubmitEvent) => {
    e.preventDefault()
    const text = inputValue.trim()
    if (!text) return

    const optimisticMsg: Message = {
      id: Date.now(),
      userId,
      content: text,
    }
    
    setPendingMessages((prev) => [...prev, optimisticMsg])
    setInputValue('')

    try {
      await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: 0, userId, content: text }),
      })
    } catch (error) {
      console.error('Ошибка отправки:', error)
    }
  }

  const renderMessage = (msg: Message, isPending = false) => {
    const isMine = msg.userId === userId
    
    return (
      <div 
        key={`${msg.id}-${isPending}`} 
        className={`chat-message-wrapper ${isMine ? 'chat-message-wrapper--mine' : 'chat-message-wrapper--others'}`}
      >
        <div 
          className={`chat-message ${isMine ? 'chat-message--mine' : 'chat-message--others'} ${isPending ? 'chat-message--pending' : ''}`}
        >
          {!isMine && (
            <div className="chat-user-indicator" style={{ color: getUserColor(msg.userId) }}>
              Аноним {msg.userId.substring(0, 4)}
            </div>
          )}
          <div className="chat-message-content">{msg.content}</div>
        </div>
      </div>
    )
  }

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((msg) => renderMessage(msg))}
        {pendingMessages.map((msg) => renderMessage(msg, true))}
        <div ref={messagesEndRef} />
      </div>

      <form className="chat-form" onSubmit={handleSendMessage}>
        <input
          type="text"
          className="chat-input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Написать сообщение..."
          autoComplete="off"
        />
        <button 
          type="submit" 
          className="chat-submit"
          disabled={!inputValue.trim()}
          aria-label="Отправить"
        >
          ➤
        </button>
      </form>
    </div>
  )
}