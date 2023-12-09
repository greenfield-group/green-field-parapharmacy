import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Details from './Details';
import axios from 'axios';

const Users = () => {
  const { iduser } = useParams();
  const [user, setUser] = useState(null);
  const [items, setItems] = useState([]);
console.log(iduser)
  useEffect(() => {


    axios.get(`http://localhost:5000/api/users/getAll`)
      .then(response => {
        setItems(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  
  return (
    <div>
      <div className="flex items-center justify-center">
      <h2 className="font-bold">items</h2>
      </div>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
      
      {items.map(item => (
        <Details key={item.iditems} item={item} userId={iduser}/>
      ))}
      </ul>
    </div>
    
  );
};

export default Users;