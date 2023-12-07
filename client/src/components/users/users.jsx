import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Details from './Details';
import axios from 'axios';

const Users = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [items, setItems] = useState([]);

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
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <h2>{user.name}'s Details</h2>
      {items.map(item => (
        <Details key={item.iditems} item={item} />
      ))}
      </ul>
    </div>
    
  );
};

export default Users;