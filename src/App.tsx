
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import DashboardPage from './pages/DashboardPage'
import Players from './components/Dashboard/players/Players'
import DashHome from './components/Dashboard/DashHome'

function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/dashboard",
      element:<DashboardPage/>,
      children:[
        {
          path:"/dashboard",
          element:<DashHome/>
        },
        {
          path:"/dashboard/players",
          element:<Players/>
        },
      ]
    },
  ])


  return (
    <RouterProvider router={router}/>
  )
}

export default App
