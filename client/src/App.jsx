import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'
import Navbar from './components/Navbar'
import Signin from './pages/Signin.jsx'
import Signup from './pages/Signup.jsx'
import Users from './components/users/users.jsx'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/iduser" element={<Users/>}/>

      </Routes>
    </div>
  )
}

export default App
