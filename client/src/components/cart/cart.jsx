import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/authContext';

const Cart = () => {
  const [items, setItems] = useState([]);
  const {currentUser,logout}=useContext(AuthContext)
  const [article,setArticle]=useState([])
 console.log(items)
  useEffect(()=>{
   
   axios.get(`http://localhost:5000/api/cart/get/${currentUser.iduser}`
    ).then(response => {
      setItems(response.data);
      console.log(response)
      
    }).then(()=>{getdata()}).then(()=>{
      console.log(article)
    })
    .catch(error => { 
      console.error(error);
    });
}, []);


console.log(article)
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Your card</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="flex justify-between items-center mb-2">
            <div>
              <span className="font-bold">{item.title}</span> -
               <span>{item.price} €</span>
            </div>
            <div>
              <span className="px-2 py-1 bg-gray-200 rounded">{item.quantity}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
 

export default Cart
