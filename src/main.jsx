import React from 'react'
import ReactDOM from 'react-dom/client'
/* import App from './App.jsx'
 */
import { Home } from './pages/home/Home'
import { Blog } from './pages/blog/Blog'
import { Projects } from './pages/projects/Projects'

import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <h1>Hubo un error! 🎅🏽</h1>
  },
  {
    path: "blog",
    element: <Blog/>,
    children: [
      {
        path: "blog/:blog",
        element: <p>Hola esto es un articulo</p>
      }
    ]
  },
  {
    path: "projects",
    element: <Projects/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
