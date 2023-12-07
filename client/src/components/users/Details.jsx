import React from 'react';
import axios from 'axios';

const Details = ({ item }) => {
  
  const handleAddToCart = (props) => {
    
    
  };

  return (
    <div>
      
       
        <li key={props.item.iditem} className="bg-white p-6 rounded-md shadow-md">
          <img src={props.item.image} alt={props.item.title} className="mb-4 rounded-md" />
          <h2 className="text-xl font-semibold mb-2">{props.item.title}</h2>
          <p className="text-gray-600 mb-2">${props.item.price.toFixed(2)}</p>
          <p className="text-gray-500 mb-2">{props.item.category}</p>
          <p className="text-gray-700">{props.item.description}</p>
        </li>
    
      <button onClick={()=>handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default Details;