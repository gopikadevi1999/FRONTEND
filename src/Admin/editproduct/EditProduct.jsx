import React, { useEffect, useState } from 'react'
import './Editproduct.css'
import upload_icon from '../../assets/upload_icon.png'
import { toast } from 'react-toastify'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Adminbar from '../admintopbar/Adminbar'
import Sidebar from '../sidebar/Sidebar'


function EditProduct() {

  const {id} = useParams()

  const  navigate = useNavigate()

  const [image, setImage] = useState(false)
  const [productDetails, setProductDetails] = useState({
    name: '',
    price: '',
    discount: '',
    category: 'Sparklers',
    image: '',
  })

  
  const handleImage = (e) => {
    const file = e.target.files[0]
    setImage(file)
    console.log(file)
  }

  const handleInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    setProductDetails({ ...productDetails, [name]: value })
  }


  const Update_Product = async () => {
    try {
      let data = productDetails;
      let res = await axios.post(`https://rsr-backend.onrender.com/updateproduct/${id}`, data);
      if (res.status === 200) {
        toast.success('Product Updated successfully');
        navigate('/listproduct');
      } else {
        console.error('Unexpected status code:', res.status);
      }
    } catch (error) {
      console.error('Error updating product:', error);
      if (error.response) {
        console.error('Server response:', error.response.data);
      }
    }
  };

 const getProductById = async()=>{
   let res = await axios.get(`https://rsr-backend.onrender.com/editproduct/${id}`)
   setProductDetails(res.data)
 }

 useEffect(()=>{
   getProductById()
 },[])

  
return <>
<Adminbar />
<Sidebar />
  <div className="add-product">
    <div className="addproduct-itemfield">
      <p >Product Title</p>
      <input
        onChange={handleInput}
        value={productDetails.name}   
        type="text"
        placeholder="Type here"
        name='name' />
    </div>
    <br />
    <div className="addproduct-price">
      <div className="addproduct-itemfield">
        <p >Price</p>
        <input
          onChange={handleInput}
          value={productDetails.price}
          type="text"
          placeholder="Type here"
          name='price' />
      </div>

      <div className="addproduct-itemfield">
        <p>Discount</p>
        <input
          onChange={handleInput}
          value={productDetails.discount}
          type="text"
          placeholder="Type here"
          name='discount' />
      </div>
    </div>
    <br />
    <div className="addproduct-itemfield">
      <p >Product Category</p>
      <select onChange={handleInput} value={productDetails.category}  name="category" className='add-product-selector'>
        <option value="Sparlers">Sparlers</option>
        <option value="Flower Pots">Flower Pots</option>
        <option value="Ground Chakkars">Ground Chakkars</option>
        <option value="Rockets">Rockets</option>
        <option value="Sky Shots">Sky Shots</option>
        <option value="Atom Bombs">Atom Bombs</option>
        <option value="Garland Crackers">Garland Crackers</option>
        <option value="Kids Crackers">Kids Crackers</option>
        <option value="One Sound Crackers">One Sound Crackers</option>
        <option value="Electric Crackers">Electric Crackers</option>
        <option value="Hollywood Fountain">Hollywood Fountain</option>
        <option value="HiFi Fancy Items">HiFi Fancy Items</option>
        <option value="Combos">Combos</option>
      </select>
    </div>
    <br />
    <div className="addproduct-itemfield">
      <label htmlFor="file-input">
        <p >Product Image Upload</p>
        <img src={image ? URL.createObjectURL(image) : upload_icon} className="add-product-img" alt="" />
      </label>
      <input id="file-input" type="file" name='image' onChange={handleImage} hidden />
    </div>
    <br /><br /><br />
    <button className="add-product-btn btn btn-info" type="submit" onClick={()=> Update_Product()}>EDIT</button>
  </div>
</>
}


export default EditProduct