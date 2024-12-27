import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import History from './Components/History'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* to put style for the message  toasted */}
    <ToastContainer position="top-center" autoClose={5000} theme="colored"/>
       <Header/>
    {/* redirect cheyyenda pages maathrame routes nullil kodukkavu*/}
      <Routes>
         <Route element={<Home/>} path={'/'}/> 
         <Route element={<History/>} path={'/history'}/>    
      </Routes>
      <Footer/>
    </>
  )
}

export default App