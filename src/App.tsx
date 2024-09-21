
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import DashboardPage from './pages/DashboardPage'

function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/dashboard",
      element:<DashboardPage/>
    },
  ])


  return (
    <RouterProvider router={router}/>
  )
}

export default App
