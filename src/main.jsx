import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import MainLayout from './Layout/MainLayout.jsx'
import Homepage from './pages/homepage/Homepage.jsx'
import Books from './pages/books/Books.jsx'
import { router } from './routes/router.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
