import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      {/* <h1 className='text-5xl font-bold text-indigo-700'>Hello Developer</h1> */}
      <Navbar/>
      <Outlet/>
    </>
  )
}

export default App
