import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { MdOutlineSystemUpdateAlt } from "react-icons/md";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { Link } from 'react-router-dom';
const Admin = () => {
    const[items,setItems]=useState([])
    const [display,setDisplay]=useState(false)
    const [update,setUpdate]=useState(false)
    const [newPrice,setNewPrice]=useState(0)
    const [counter,setCounter]=useState(0)
    useEffect(()=>{
    axios.get(`http://127.0.0.1:5000/api/admin/getAll`)
      .then(response => {
        setItems(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [counter]);
  const updateItem=(e,id)=> {
    e.preventDefault()
    axios.put(`http://127.0.0.1:5000/api/admin/update/${id}`,{price:newPrice}).then(response => {
      setUpdate(false);
      setCounter(counter+1)
    })
    .catch(error => {
      console.error(error);
    });

  }
 console.log(items)
  return (
    <div>
        <div>
      <div className="flex items-center justify-center">
      <h2 className="font-bold">items</h2>
      </div>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
      
      { items.map(item => (
        <li key={item.iditem} className="bg-white p-6 rounded-md shadow-md">
        <img src={item.image} alt={item.title} className="w-full h-40 object-cover mb-4 rounded-md" />
        <h2 className="text-xl font-semibold mb-2" onClick={()=>setDisplay(!display)}>{item.title}</h2>
        
        {display && <div>
        <p className="text-gray-600 mb-2">${item.price.toFixed(2)}</p>
        <p className="text-gray-500 mb-2">{item.category}</p>
        <p className="text-gray-700">{item.description}</p></div>}
        <p onClick={()=>{setUpdate(true)}}><MdOutlineSystemUpdateAlt /> </p>
        {update && <div> <input
          type="update"
          id="update"
          name="update"
          autoComplete="update"
          required
          className="mt-1 p-2 w-full border rounded-md"
          onChange={(e)=>{setNewPrice(e.target.value)}}
        />
        <button
          type="button"
          className="bg-blue-500 text-white px-4 py-2 rounded-md focus:outline-none focus:shadow-outline-blue hover:bg-blue-600"
        onClick={(e)=>{updateItem(e,item.iditems)}}
        >
         Update
        </button>
          </div>}
       <p className="text-gray-700" > <Link to={`/admin/delete/${item.iditems}`}  ><MdOutlineDeleteSweep /> </Link> </p>
      </li>
      ))}
      </ul>
    </div>
    </div>
  )
}

export default Admin
