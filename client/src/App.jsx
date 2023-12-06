import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'
import Navbar from './components/Navbar'
import Signin from './pages/Signin.jsx'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signin" element={<Signin/>}/>
      </Routes>
    </div>
  )
}

export default App
