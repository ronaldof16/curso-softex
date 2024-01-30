
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './componentes/Navbar'


function App() {
  

  return (
    <>
      <Navbar />
      <Outlet />
      <p>Footer</p>
    </>
  )
}

export default App
