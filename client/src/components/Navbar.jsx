import React, { useContext, useState } from 'react'
import {  NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext.jsx'

const Navbar = () => {
 
  const {currentUser,logout}=useContext(AuthContext)
  const navigate=useNavigate()
  return (
    <div>
       <nav className="bg-black" >
      <div className="space-y-1 px-2 pb-3 pt-2">
        <NavLink to="/" className="text-white text-xl font-semibold" >
         MediCare
        </NavLink>

        <div className="flex space-x-4">
          <NavLink to="/" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"  >
            Home
          </NavLink>
          
          {(!currentUser) &&<NavLink to="/signup" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium" >
            Sign up
          </NavLink>}
      
    
          {(!currentUser)&&<NavLink to="/contact" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium" >
            Contact
          </NavLink>}
          {currentUser&&<span  className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">{currentUser.name}</span>}
          {(currentUser) ? <span onClick={()=>{logout(currentUser); navigate('/')}} className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Logout</span>
          :<NavLink to="/signin" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium" >
          Sign in
          </NavLink>}
        
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
