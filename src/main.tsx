import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
  createHashRouter,
} from 'react-router-dom'
import 'uno.css'
import App from '@/App'
import LoadApp from '@/components/LoadApp/LoadApp'

const router = createHashRouter([
  {
    path: '/',
    element: <App></App>,
  },
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
)
root.render(
  <React.StrictMode>
    <LoadApp>
      <RouterProvider router={router}></RouterProvider>
    </LoadApp>
  </React.StrictMode>,
)
