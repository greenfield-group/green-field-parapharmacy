import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/authContext.jsx'

const Signin = () => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [msg,setMsg]=useState(false)
  const navigate=useNavigate()
  const {login,currentUser}=useContext(AuthContext)
  console.log(currentUser);

const checkUser=(e)=>{
  e.preventDefault()
    var obj={email,password}
    login(obj)
 .then(()=>{;
      if(currentUser.admin===0)
    navigate(`/user/${currentUser.iduser}`)
   else {
    navigate(`/admin/${currentUser.iduser}`)
   }}).catch((err)=>{
      console.log(err)
      setMsg(true)
    })
}
  return (
    <div className=" max-w-md w-full p-6 bg-white rounded-md shadow-md ">
    <h2 className="text-2xl font-semibold text-center mb-6">Sign In</h2>

    <form  method="submit"  >
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-600">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          autoComplete="email"
          required
          className="mt-1 p-2 w-full border rounded-md"
          onChange={(e)=>{setEmail(e.target.value)}}
        />
      </div>

     
     
      <div className="mb-4">
        <label htmlFor="password" className="block text-sm font-medium text-gray-600">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          autoComplete="new-password"
          required
          className="mt-1 p-2 w-full border rounded-md"
          onChange={(e)=>{setPassword(e.target.value)}}
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          type="button"
          className="bg-blue-500 text-white px-4 py-2 rounded-md focus:outline-none focus:shadow-outline-blue hover:bg-blue-600"
        onClick={(e)=>{checkUser(e)}}
        >
          Sign In
        </button>
        {msg && <div className="mb-4">
        <label htmlFor="msg" className="block text-sm font-medium text-gray-600">
       wrong password or email
        </label>
        </div>}
      </div>

    </form>
  </div>
  )
}

export default Signin
