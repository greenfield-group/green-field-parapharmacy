import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'
import Search from './components/home/Serch.jsx'
import Navbar from './components/Navbar'
import Signin from './pages/Signin.jsx'
import Signup from './pages/Signup.jsx'
import Users from './components/users/users.jsx'
import Cart from './components/cart/cart.jsx'
import Admin from './components/admin/admin.jsx'
import Update from './components/admin/Update.jsx'
import Delete from './components/admin/Delete.jsx'
import Additem from './components/admin/Additem.jsx'
import Footer from './components/Footer.jsx'
import Contact from './pages/Contact.jsx'
const App = () => {


  // module.exports = {
    //   //method to fetch all users from the blog database.
    //   getAll: function (req, res) {
    //     users.getAll(function (err, results) {
    //       if (err) res.status(500).send(err);
    //       else res.json(results);
    //     });
    //   },
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">

      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/' element={<Search/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path = "/contact" element ={<Contact />} />
        <Route path="/user/:iduser" element={<Users/>}/>
        <Route path="/admin/:iduser" element={<Admin/>}/>
        <Route path='/cart/:iduser' element ={<Cart/>}/>
        <Route path='/admin/delete/:iditem' element ={<Delete/>}/>
        <Route path='/admin/Add' element ={<Additem/>}/>

      </Routes> 
      </div>
      <Footer/>
    </div>
  )
}

export default App
