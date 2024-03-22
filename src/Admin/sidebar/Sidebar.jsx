import React from 'react'
import './Sidebar.css'
import product_cart from '../../assets/product-cart.jpeg'
import { Link } from 'react-router-dom'
import list_product from '../../assets/list_product.png'


function Sidebar() {
    return <>
        <div className="sidebar">
            <Link to={'/addproduct'} style={{ textDecoration: "none" }}>
                <div className="sidebar-item">
                    <img src={product_cart} alt="" style={{ width: "50px", height: "50px" }} />
                    <p>Add Product</p>
                </div>
            </Link>
            
            <Link to={'/listproduct'} style={{ textDecoration: "none" }}>
                <div className="sidebar-item">
                    <img src={list_product} alt="" style={{ width: "50px", height: "50px" }} />
                    <p >Product List</p>
                </div>
            </Link>
        </div>
    </>
}

export default Sidebar