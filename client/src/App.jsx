import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'
const App = () => {


  // module.exports = {
    //   //method to fetch all users from the blog database.
    //   getAll: function (req, res) {
    //     users.getAll(function (err, results) {
    //       if (err) res.status(500).send(err);
    //       else res.json(results);
    //     });
    //   },
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App
