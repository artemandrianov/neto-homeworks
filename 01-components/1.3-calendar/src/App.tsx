import Calendar from './components/Calendar/Calendar'
import './App.css'

function App() {

  const now = new Date(2026, 2, 8)

  return (
    <>
      <Calendar date={now} />
    </>
  )
}

export default App
