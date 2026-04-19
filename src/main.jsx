import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import MainLayout from './Layout/MainLayout.jsx'
import Homepage from './pages/homepage/Homepage.jsx'
import Books from './pages/books/Books.jsx'
import { router } from './routes/router.jsx'
import BookProvider from './context/BookContext.jsx'
import { ToastContainer } from 'react-toastify'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookProvider>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
    </BookProvider>
  </StrictMode>,

)
