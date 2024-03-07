
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './componentes/Navbar'
import ChangeCounter from './componentes/ChangeCounter'

function App() {

  return (
    <>
      <div className='App'>
        <Navbar />
        <h1>Context API</h1>
        <Outlet />
        <ChangeCounter />
      </div>
    </>
  )
}

export default App
