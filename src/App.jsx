import React, { useState, useEffect } from 'react'
import Home from './pages/Home'
import ProductCategory from './pages/ProductCategory'
import About from './pages/About'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword'
import { toast } from 'react-toastify'
import Success from './pages/Success'
import Cancel from './pages/Cancel'
import '@stripe/stripe-js'


function App() {

  const getDefaultData = () => {
    let cart = localStorage.getItem('cart')
    if (cart) {
      return JSON.parse(localStorage.getItem('cart'))
    } else {
      return []
    }
  }

  let [cart, setCart] = useState(getDefaultData())
  let [product, setProduct] = useState([])

  //fetch api get all products
  useEffect(() => {
    fetchProduct()
  }, []);

  //filter product

  const fetchProduct = async () => {
    await fetch('https://rsr-backend.onrender.com/allproducts')
      .then((res) => res.json())
      .then((data) => setProduct(data))

    if (localStorage.getItem('auth-token')) {
      fetch('https://rsr-backend.onrender.com/getcart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/form-data',
          'auth-token': localStorage.getItem('token'),
          'content-type': 'application/json'
        },
        body: JSON.stringify({ cart: cart })
      }).then((res) => res.json()).then((data) => {
        console.log(data)
      })
    }
  }

  //filter product
  const Filter = (category) => {
    if (category === "All") {
      fetchProduct()
    } else if (category === "all") {
      fetch('https://rsr-backend.onrender.com/allproducts')
        .then((res) => res.json())
        .then((data) => setProduct(data))

    } else {
      fetch('https://rsr-backend.onrender.com/productcategory', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ category: category })
      })
        .then((res) => res.json())
        .then((data) => setProduct(data))
    }
  }
//add to cart
const addToCart = (product) => {
  const exist = cart.find((x) => {
    return x.id === product.id
  })
  if (exist) {
    setCart(cart.map((x) => x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x))
  } else {
    setCart([...cart, { ...product, qty: 1 }])
  }
  toast.success(`${product.name} added to cart`);

  //befor add to cart check user is login or not if login then add to cart else redirect to login
  if (localStorage.getItem('auth-token')) {
    fetch('https://rsr-backend.onrender.com/addcart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/form-data',
        'auth-token': localStorage.getItem('token'),
        'content-type': 'application/json'
      },
      body: JSON.stringify({ product: product })
    }).then((res) => res.json()).then((data) => {
      console.log(data)
    })
  }
}


  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/productcategory' element={<ProductCategory product={product} Filter={Filter} addToCart={addToCart} setCart={setCart} cart={cart} />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/forgotpassword' element={<ForgotPassword />} />
        <Route path='/resetpassword/:token' element={<ResetPassword />} />
        <Route path='/success' element={<Success />} />
        <Route path='/cancel' element={<Cancel />} />
        <Route path='/*' element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App