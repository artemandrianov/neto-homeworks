import type { MessageProps } from '../types/models'

export function Typing({ from, message }: MessageProps) {
  return (
    <li>
      <div className="message-data">
        <span className="message-data-name">
          <i className="fa fa-circle online"></i> {from.name}
        </span>
        <span className="message-data-time">{message.time}</span>
      </div>
      <div className="typing-indicator">
        <i className="fa fa-circle online"></i>
        <i className="fa fa-circle online" style={{ opacity: 0.5 }}></i>
        <i className="fa fa-circle online" style={{ opacity: 0.2 }}></i>
      </div>
    </li>
  )

}