import { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { apiRequest } from '../utils/api'
import type { UserProfile, NewsItem, AuthResponse } from '../types/types'

export const useAuth = () => {
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'))
  const [profile, setProfile] = useState<UserProfile | null>(() => {
    const saved = localStorage.getItem('profile')
    return saved ? JSON.parse(saved) : null
  })
  const [news, setNews] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const logout = useCallback(() => {
    localStorage.removeItem('token')
    localStorage.removeItem('profile')
    setToken(null)
    setProfile(null)
    setNews([])
    navigate('/')
  }, [navigate])

  const login = async (loginVal: string, passVal: string) => {
    try {
      const data = await apiRequest<AuthResponse>('/auth', 'POST', { login: loginVal, password: passVal })
      localStorage.setItem('token', data.token)
      setToken(data.token)
      navigate('/news')
    } catch (e) {
      alert('Auth failed')
    }
  }

  useEffect(() => {
    if (!token) return

    const fetchData = async () => {
      setLoading(true)
      try {
        const [userData, newsData] = await Promise.all([
          apiRequest<UserProfile>('/private/me', 'GET', null, token),
          apiRequest<NewsItem[]>('/private/news', 'GET', null, token)
        ])
        
        setProfile(userData)
        setNews(newsData)
        localStorage.setItem('profile', JSON.stringify(userData))
      } catch (e) {
        if ((e as Error).message === 'Unauthorized') {
          logout()
        }
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [token, logout])

  return { token, profile, news, loading, login, logout }
}