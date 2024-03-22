import React, { useEffect, useState } from 'react'
import './ListProduct.css'
import { MdCurrencyRupee } from "react-icons/md";
import Table from 'react-bootstrap/Table';
import { FaRegTrashCan } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Adminbar from '../admintopbar/Adminbar'
import Sidebar from '../sidebar/Sidebar';


function ListProduct() {

  const navigate = useNavigate()

  const [allproducts, setAllProducts] = useState([])

  const fetchInfo = async () => {

    await fetch(`https://rsr-backend.onrender.com/allproducts`).then((resp) => resp.json()).then((data) => {
      setAllProducts(data)
    })
  }

  useEffect(() => {
    fetchInfo()
  }, [])

  //remove product
  const removeProduct = async (id) => {

    await fetch(`https://rsr-backend.onrender.com/removeproduct`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id: id }),
    }).then((resp) => resp.json()).then((data) => {
      console.log(data)
      fetchInfo()
    })
  }

  return <>
  <Adminbar />
  <Sidebar />
    <Table striped bordered hover variant="light" className='listproduct-allproducts'>
      <thead >
        <tr>
          <th colSpan={8} style={{ textAlign: "center", fontWeight: "bold", fontSize: "20px", paddingBottom: "20px" }}>All Products List</th>
        </tr>
        <tr style={{ textAlign: "center" }}>
          <th>#</th>
          <th style={{ paddingBottom: "20px" }}>Product</th>
          <th style={{ paddingBottom: "20px" }}>Title</th>
          <th style={{ paddingBottom: "20px" }}>Price</th>
          <th style={{ paddingBottom: "20px" }}>Discount</th>
          <th style={{ paddingBottom: "20px" }}>Category</th>
          <th style={{ paddingBottom: "20px" }}>Edit</th>
          <th style={{ paddingBottom: "20px" }}>Remove</th>
        </tr>
      </thead>
      <tbody>
        {Array.isArray(allproducts) && allproducts.length > 0 ? (
          allproducts.map((product, i) => (
              <tr key={i}>
                <td style={{ textAlign: "center" }}>{product.id}</td>
                <td style={{ textAlign: "center", width: "100px", height: "100px" }}>
                  <img src={product.image} alt="" className="listproduct-product-icon" />
                </td>
                <td style={{ textAlign: "center", paddingTop: "30px" }}>{product.name}</td>
                <td style={{ textAlign: "center" }}><MdCurrencyRupee />{product.price}</td>
                <td style={{ textAlign: "center" }} ><MdCurrencyRupee />{product.discount}</td>
                <td style={{ textAlign: "center", paddingTop: "30px" }}>{product.category}</td>
                <td style={{ cursor: "pointer", textAlign: "center" }}>
                  <FaRegEdit className='listproduct-edit-icon' onClick={() => navigate(`/editproduct/${product.id}`)} />
                </td>
                <td style={{ cursor: "pointer", textAlign: "center" }}>
                  <FaRegTrashCan className='listproduct-remove-icon' onClick={() => removeProduct(product.id)} />
                </td>
              </tr>
          ))

        ) : (
          <p>No products available</p>
        )}
      </tbody>
    </Table>
  </>

}

export default ListProduct