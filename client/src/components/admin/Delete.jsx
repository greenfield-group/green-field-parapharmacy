import React from 'react'
import { useParams } from 'react-router-dom'

const Delete = () => {
  const {iditem} =useParams()
  console.log(iditem)
  return (
    <div>
      
    </div>
  )
}

export default Delete
