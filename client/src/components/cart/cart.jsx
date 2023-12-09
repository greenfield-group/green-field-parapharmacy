import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/authContext';

const Cart = () => {
  const [items, setItems] = useState([]);
  const {currentUser,logout}=useContext(AuthContext)
 
  useEffect(()=>{
     const obj={users_iduser:currentUser.iduser};
    console.log(currentUser.iduser)
    axios.get('http://localhost:5000/api/cart/get',obj
    ).then(response => {
      console.log(response)
      setItems(response.data);
      
    })
    .catch(error => {
      console.error(error);
    });
}, []);

  
  return (
    <div>
        <h2>Welcome </h2>
    </div>
  )
}

export default Cart
