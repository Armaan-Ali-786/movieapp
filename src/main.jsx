import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './pages/App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SearchMovie from './pages/SearchMovie'
import Navbar from './common/Navbar'
import DetailPage from './pages/DetailPage'
import FavoriteMovie from './pages/FavoriteMovie'

let router = createBrowserRouter([
  {
    path : '/',
    element : <App/>
  },
  {
    path : '/search',
    element : <SearchMovie/>
  },
  {
    path : '/detail/:id?',
    element : <DetailPage/>
  },
  {
    path : '/favmovies',
    element : <FavoriteMovie/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <RouterProvider router={router}/>
  </StrictMode>
)
