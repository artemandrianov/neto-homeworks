import { type ReactNode, useEffect } from 'react';
import './Modal.css';

interface ModalProps {
  title: string;
  onClose: () => void;
  children: ReactNode;
  footer?: ReactNode;
}

export function Modal({ title, onClose, children, footer }: ModalProps) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <div className="modal__header">
          <div className="modal__tabs">
            <button className="modal__tab modal__tab--active">✏️ {title}</button>
            <button className="modal__tab">📷 Фото/видео</button>
            <button className="modal__tab">📡 Прямой эфир</button>
            <button className="modal__tab">··· Ещё</button>
          </div>
          <button className="modal__close" onClick={onClose} aria-label="Закрыть">✕</button>
        </div>
        <div className="modal__body">{children}</div>
        {footer && <div className="modal__footer">{footer}</div>}
      </div>
    </div>
  );
}
