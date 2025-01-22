import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Login from './components/Login'
import { Route, Routes } from 'react-router-dom'
import Sign from './components/Sign'
import Addblogs from './components/Addblogs'
import Navbar from './components/Navbar'
import Main from './components/Main'
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Routes>
        
        <Route path='/' element={<Login/>}></Route>
        <Route path='/sign' element={<Sign/>}></Route>
        <Route path='/blogs' element={<Main child={<Home/>}/>} ></Route>
        <Route path='/addblogs' element={<Main child={<Addblogs/>}/>}></Route>
      </Routes>


    </>
  )
}
export default App








//https://react4-b73tt8wgh-gokul-santhoshs-projects.vercel.app/