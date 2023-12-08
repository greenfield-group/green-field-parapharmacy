import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Delete = () => {
  const { iditem } = useParams();
  const [confirmation, setConfirmation] = useState(false);
  // const history = useHistory();
  const navigate = useNavigate();

  console.log(iditem);
  const handleDelete = (iditem) => {
    console.log(iditem);
    axios
      .delete(`http://localhost:5000/api/admin/Delete/${iditem}`)
      .then((response) => {
        console.log("done");
        setConfirmation(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleReload = () => {
    navigate("/admin");
  };
  return (
    <div>
      {!confirmation ? (
        <div>
          <p>Are you sure you want to delete this item?</p>
          <button
            onClick={() => handleDelete(iditem)}
            className="bg-red-500 text-white p-2 rounded"
          >
            Yes, Delete
          </button>
        </div>
      ) : (
        <div>
          <p>Item deleted successfully!</p>
          <button
            onClick={handleReload}
            className="bg-blue-500 text-white p-2 rounded"
          >
            Back Home
          </button>
        </div>
      )}
    </div>
  );
};

export default Delete;
