
import './App.css'
import { createBrowserRouter, createRoutesFromElements,Navigate,Route,RouterProvider } from 'react-router-dom'
import Home from './Pages/Home/Home/Home'
import Manu from './Pages/Manu/Manu/Manu'
import Root from './Layouts/Root/Root'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" >
        <Route path='' element={<Root />} >
        <Route path='' element={<Navigate to='/home' />} />
        <Route path="home" element={<Home />} />
        <Route path="menu" element={<Manu />} />
        </Route>
      </Route>
    )
  )


  return (
  <RouterProvider router={router} />
  )
}

export default App
