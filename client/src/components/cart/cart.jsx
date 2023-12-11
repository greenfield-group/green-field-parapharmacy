import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/authContext';


const Cart = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { currentUser, logout } = useContext(AuthContext);
  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/cart/get/${currentUser.iduser}`)
      .then(response => {
        setItems(response.data);
        setItemCount(response.data.length);
      })
      .catch(error => {
        console.error(error);
        setError('Error fetching data');
      });
  }, [currentUser.iduser]);

  const add = (items_iditems, users_iduser) => {
    axios.post('http://localhost:5000/api/cart/add', { items_iditems, users_iduser })
      .then(response => {
        console.log("Item added to the cart successfully");

        setItems(prevItems => [...prevItems, response.data.result]);
        setItemCount(prevCount => prevCount + 1);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const remove = (id) => {
    axios.delete(`http://localhost:5000/api/cart/remove/${id}`)
      .then(() => {
        console.log("Item removed from the cart");

        setItems(prevItems => prevItems.filter(item => item.iditems !== id));
        setItemCount(prevCount => prevCount - 1);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const buy = (users_iduser) => {
    axios.delete(`http://localhost:5000/api/cart/removeall/${users_iduser}`)
      .then(() => {
        console.log("All items removed from the cart");

        setItems([]);
        setItemCount(0);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className="bg-white p-6 rounded shadow-lg">
      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>
      <div className="flex flex-wrap gap-4">
        {items.map((item) => (
          <div key={item.iditems} className="w-60 h-80 bg-neutral- 800 rounded-3xl text-neutral-300 p-4 flex flex-col items-start justify-center gap-3 hover:bg-gray-900 hover:shadow-2xl hover:shadow-sky-400 transition-shadow">
            <img
              src={item.image} 
              alt={item.title}
              className="w-52 h-40 bg-sky-300 rounded-2xl object-cover"
            />
            <div className="">
              <p className="font-extrabold">{item.title}</p>
              <p className="">{item.category}</p>
              <p className="">{item.price} €</p>
              <button
                onClick={() => remove(item.iditems)}
                className="bg-sky-700 font-extrabold p-2 px-6 rounded-xl hover:bg-sky-500 transition-colors"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-end">
        <span className="text-lg font-bold">Total: {getTotalPrice()} €</span>
      </div>
      <div className="mt-4 flex justify-end">
        <button
          className="px-6 py-3 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none"
          onClick={() => buy(currentUser.iduser)}
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default Cart;




