import { useAuth } from './hooks/useAuth'
import { Header } from './components/Header/Header'
import { NewsFeed } from './components/NewsFeed'
import './App.css'

export const App = () => {
  const { token, profile, news, loading, login, logout } = useAuth()

  return (
    <div className="app">
      <Header 
        profile={profile} 
        onLogin={login} 
        onLogout={logout} 
      />
      
      <main className="content">
        {!token ? (
          <section className="landing">
            <h1>Neto Social</h1>
            <p>Facebook and VK killer.</p>
          </section>
        ) : (
          <>
            {loading ? (
              <div className="loader">Загрузка новостей...</div>
            ) : (
              <NewsFeed news={news} />
            )}
          </>
        )}
      </main>
    </div>
  )
}