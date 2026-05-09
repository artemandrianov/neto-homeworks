import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { RootLayout } from './layouts/RootLayout'
import { PostsListPage } from './pages/PostsListPage'
import { NewPostPage } from './pages/NewPostPage'
import { PostPage } from './pages/PostPage'

/**
 * /posts/new MUST be before /posts/:id
 * so the router doesn't try to match "new" as an id.
 */
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <PostsListPage /> },
      { path: 'posts/new', element: <NewPostPage /> },
      { path: 'posts/:id', element: <PostPage /> },
    ],
  },
])

export function App() {
  return <RouterProvider router={router} />
}
