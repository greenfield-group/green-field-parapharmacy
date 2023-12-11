import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';
import { storage } from '../../firebase.jsx'
import { ref,uploadBytes,getDownloadURL } from 'firebase/storage'
import { v4 } from 'uuid'
const Additem = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [imag, setImage] = useState(null)
  const [category, setCategory] = useState('')
  const[url,setUrl]=useState('')
  const navigate = useNavigate()
  const { currentUser, logout } = useContext(AuthContext)
  const addItems = (e) => {
    e.preventDefault()
    const obj = { title, description, price, image:url , category }
    axios.post('http://127.0.0.1:5000/api/admin/Add', obj).then(() => { navigate(`/admin/${currentUser.iduser} `) })
      .catch((err) => console.log(err))
  }
  const uploadImage = () => {
    if (imag == null) { return; }
    const imageRef = ref(storage, `imag/${imag.name+ v4()}`)
    console.log(imageRef)
    uploadBytes(imageRef,imag).then(()=>console.log('imageaploaded')).then(async () => {
      const downloadURL = await getDownloadURL(imageRef);
      console.log('Image uploaded. Download URL:', downloadURL);
   setUrl(downloadURL)   
    })
    .catch((error) => {
      console.error('Error uploading imag:', error);
    });

  }
  console.log(url)
  return (
    <div>
      <form  >
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            autoComplete="title"
            required
            className="mt-1 p-2 w-full border rounded-md"
            onChange={(e) => { setTitle(e.target.value) }}
          />
        </div>


        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">
            price
          </label>
          <input
            type="text"
            id="price"
            price="price"
            autoComplete="new-price"
            required
            classprice="mt-1 p-2 w-full border rounded-md"
            onChange={(e) => { setPrice(e.target.value) }}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-600">
            description
          </label>
          <input
            type="text"
            id="description"
            name="description"
            autoComplete="new-description"
            required
            className="mt-1 p-2 w-full border rounded-md"
            onChange={(e) => { setDescription(e.target.value) }}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-medium text-gray-600">
            category
          </label>
          <input
            type="text"
            id="category"
            name="category"
            autoComplete="new-category"
            required
            className="mt-1 p-2 w-full border rounded-md"
            onChange={(e) => { setCategory(e.target.value) }}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="Image" className="block text-sm font-medium text-gray-600">
            Image
          </label>
          <input
            type="file"
            id="Image"
            name="Image"
            autoComplete="new-Image"
            required
            className="mt-1 p-2 w-full border rounded-md"
            onChange={(e) => { setImage(e.target.files[0]) }}
          />
          <div className="flex items-center justify-between">
          <button
            type="button"
            className="bg-blue-500 text-white px-4 py-2 rounded-md focus:outline-none focus:shadow-outline-blue hover:bg-blue-600"
            onClick={(e) => {  uploadImage() ;}}
          >
            Add image
          </button>
        </div>
        </div>
       
        <div className="flex items-center justify-between">
          <button
            type="button"
            className="bg-blue-500 text-white px-4 py-2 rounded-md focus:outline-none focus:shadow-outline-blue hover:bg-blue-600"
            onClick={(e) => { addItems(e); uploadImage() }}
          >
            Add
          </button>
        </div>

      </form>
    </div>
  )
}

export default Additem
