import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from './hooks/useAuth'
import { Header } from './components/Header/Header'
import { LoginForm } from './components/LoginForm'
import { NewsFeed } from './components/News/NewsFeed'
import { NewsDetail } from './components/News/NewsDetail'
import './App.css'

const ProtectedRoute = ({ token, children }: { token: string | null; children: React.ReactNode }) => {
  if (!token) {
    return <Navigate to="/" replace />
  }
  return <>{children}</>
}

export const App = () => {
  const { token, profile, news, loading, login, logout } = useAuth()

  return (
    <div className="app">
      {token && <Header profile={profile} onLogout={logout} />}

      <main className="content">
        <Routes>
          <Route path="/" element={
            token ? <Navigate to="/news" replace /> : (
              <section className="landing">
                <div className="landing__info">
                  <h1>Neto Social</h1>
                  <p>Facebook and VK killer.</p>
                </div>
                <LoginForm onLogin={login} />
              </section>
            )
          } />

          <Route path="/news" element={
            <ProtectedRoute token={token}>
              {loading ? <div className="loader">Загрузка новостей...</div> : <NewsFeed news={news} />}
            </ProtectedRoute>
          } />

          <Route path="/news/:id" element={
            <ProtectedRoute token={token}>
              <NewsDetail news={news} loading={loading} />
            </ProtectedRoute>
          } />

          <Route path="*" element={
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
              <h1 style={{ fontSize: '3rem' }}>NOT FOUND</h1>
            </div>
          } />
        </Routes>
      </main>
    </div>
  )
}