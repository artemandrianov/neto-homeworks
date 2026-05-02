import { useState } from 'react'
import { List } from './components/List'
import { Details } from './components/Details'
import type { User } from './types/types'
import './App.css'

export default function App() {
  const [selectedUser, setSelectedUser] = useState<User | null>(null)

  return (
    <div className="app-container">
      <div className="list-column">
        <List
          activeUserId={selectedUser?.id ?? null}
          onSelect={setSelectedUser}
        />
      </div>
      <div className="details-column">
        {selectedUser && <Details info={selectedUser} />}
      </div>
    </div>
  )
}