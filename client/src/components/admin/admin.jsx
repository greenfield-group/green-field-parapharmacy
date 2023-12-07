import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { MdOutlineSystemUpdateAlt } from "react-icons/md";
import { MdOutlineDeleteSweep } from "react-icons/md";

const Admin = () => {
    const[items,setItems]=useState([])
    const [display,setDisplay]=useState(false)
    useEffect(()=>{
    axios.get(`http://localhost:5000/api/admin/getAll`)
      .then(response => {
        setItems(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

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
        <Link to={`/admin/update/${item.iditems}`}  ><MdOutlineSystemUpdateAlt /> </Link>
        <Link to={`/admin/delete/${item.iditems}`}  ><MdOutlineDeleteSweep /> </Link>
        
         
      </li>
      ))}
      </ul>
    </div>
    </div>
  )
}

export default Admin
