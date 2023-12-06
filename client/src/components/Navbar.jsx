import React from 'react'
import {  NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
       <nav className="sm:hidden" >
      <div className="space-y-1 px-2 pb-3 pt-2">
        <NavLink to="/" className="text-white text-xl font-semibold" >
          YourLogo
        </NavLink>

        <div className="flex space-x-4">
          <NavLink to="/" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"  >
            Home
          </NavLink>
          <NavLink to="/signin" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium" >
          Sign in
          </NavLink>
          <NavLink to="/services" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium" >
            Sign up
          </NavLink>
          <NavLink to="/contact" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium" >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
