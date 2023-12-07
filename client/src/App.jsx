import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'
import Navbar from './components/Navbar'
import Signin from './pages/Signin.jsx'
import Signup from './pages/Signup.jsx'
import Users from './components/users/users.jsx'
import Cart from './components/cart/cart.jsx'
import Admin from './components/admin/admin.jsx'
import Update from './components/admin/Update.jsx'
import Delete from './components/admin/Delete.jsx'
const App = () => {
  return (
    <div >

      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/user/:iduser" element={<Users/>}/>
        <Route path="/admin/:iduser" element={<Admin/>}/>
        <Route path='/cart/:iduser' element ={<Cart/>}/>
        <Route path='/admin/update/:iditem' element ={<Update/>}/>
        <Route path='/admin/delete/:iditem' element ={<Delete/>}/>

      </Routes>
    </div>
  )
}

export default App
