import React, { useContext, useState } from "react";
import axios from "axios";
import { FaCartArrowDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
const Details = ({ item, userId }) => {
  const [display, setDisplay] = useState(false);
  const { currentUser, logout } = useContext(AuthContext);
  const AddToCart = (iditem) => {
    const obj = { users_iduser: currentUser.iduser, items_iditems: iditem };
    axios
      .post("http://localhost:5000/api/cart/add", obj)
      .then(() => console.log("done"))
      .catch((err) => {console.log(err)});
  };

  return (
    <div>
      <li key={item.iditem} className="bg-white p-6 rounded-md shadow-md">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-40 object-cover mb-4 rounded-md"
        />
        <h2
          className="text-xl font-semibold mb-2"
          onClick={() => setDisplay(!display)}
        >
          {item.title}
        </h2>

        {display && (
          <div>
            <p className="text-gray-600 mb-2">${item.price.toFixed(2)}</p>
            <p className="text-gray-500 mb-2">{item.category}</p>
            <p className="text-gray-700">{item.description}</p>
          </div>
        )}
        <Link to={`/cart/${currentUser.iduser}`}>
          <FaCartArrowDown
            onClick={() => {
              AddToCart(item.iditems);
            }}
          />
        </Link>
      </li>
    </div>
  );
};

export default Details;
