import { StrictMode } from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import './index.css'
import { createRoot } from 'react-dom/client'
import MainLayout from './layouts/MainLayout.tsx'
import Home from './pages/Home.tsx'
import Trending from './pages/Trending.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    children: [
      {
        index: true,
        element:<Home/>
      },
      {
        path: 'home',
        element:<Home/>
      },
      {
        path: 'trending',
        element:<Trending/>
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
