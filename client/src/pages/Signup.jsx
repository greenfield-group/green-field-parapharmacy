import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [msg,setMsg]=useState(false)
  const navigate= useNavigate()
  const addUser =()=>{

    var obj={name,email,password,admin:0}
    axios.post('http://127.0.0.1:5000/api/auth/signup',obj)
    .then((res)=>{console.log(res.data);  navigate('/')}).catch((err)=>{
    
      setMsg(true)
    })
  }
  return (
    <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
    <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>

    <form  method="submit" onSubmit={()=>{addUser()}}>
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
          Name
        </label>
        <input
          type="Name"
          id="Name"
          name="Name"
          autoComplete="new-Name"
          required
          className="mt-1 p-2 w-full border rounded-md"
          onChange={(e)=>{setName(e.target.value)}}
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
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md focus:outline-none focus:shadow-outline-blue hover:bg-blue-600"
        onClick={()=>{addUser()}}
        >
          Sign Up
        </button>
        {msg && <div className="mb-4">
        <label htmlFor="msg" className="block text-sm font-medium text-gray-600">
        this user exist 
        </label>
        </div>}
      </div>

    </form>
  </div>
  )
}

export default Signup
