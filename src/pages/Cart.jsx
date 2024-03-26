import React, { useEffect } from 'react'
import './css/Cart.css'
import { Link, useNavigate } from 'react-router-dom'
import Topbar from '../components/topbar/Topbar'
import Footer from '../components/footer/Footer'
import { toast } from 'react-toastify'
import { loadStripe } from '@stripe/stripe-js'

function Cart({ cart, setCart }) {

  const navigate = useNavigate()

  //increased quantity of cart product
  const incqty = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id
    })
    if (exist) {
      setCart(cart.map((x) => x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x))
    }
  }

  //decreased quantity of cart product
  const decqty = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id
    })
    if (exist) {
      setCart(cart.map((x) => x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x))
    }

  }

  //delete cart product
  const removeProduct = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id
    })
    if (exist.qty > 0) {
      setCart(cart.filter((allProduct) => {
        return allProduct.id !== product.id
      }))
    }
    toast.success(`${product.name} removed from cart`);

    if (localStorage.getItem('auth-token')) {
      fetch('https://rsr-backend.onrender.com/removecart', {
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

  //total price
  let total = 0;

  if (cart) {
    total = cart.reduce((acc, allProduct) => {
      return acc + allProduct.qty * allProduct.price;
    }, 0);
  }


  //payment integration
  const makePayment = async () => {
    const stripe = await loadStripe('pk_test_51Ovzg5SCmubRBWWYIsEcVL2vBU8UOEwUMHpSBSdEjw80kglDUVTzJgFG6jivqMVZbrmURq7p4NXRM2oUQ5RriLEe00Vll4jGsq');

    const body = {
      products: cart
    };
    const headers = {
      'Content-Type': 'application/json',
      'auth-token': localStorage.getItem('token'),
    };
    const response = await fetch('https://rsr-backend.onrender.com/create-checkout-session', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body)
    });

    // Check if the response is successful (user is authenticated
    const session = await response.json();
    const result = await stripe.redirectToCheckout({
      sessionId: session.id
    });
    if (result.error) {
      console.log(result.error);
    }
  }

  return <>
    <Topbar />
    <section className="h-100 gradient-custom">
      <div className="container" style={{ marginTop: '10%' }} >
        <div className="row d-flex justify-content-center my-4" >
          <div className="col-md-8">
            <div className="card mb-4">
              <div className="card-header py-3">
                <h5 className="mb-0" style={{ overflowY: 'hidden', fontWeight: 'bold' }}>Shopping Cart</h5>
              </div>
              <div className="card-body">

                {
                  cart.map((allProduct, i) => {
                    return <div className="row" key={i}>
                      <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                        <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                          <img src={allProduct.image} className="w-50" alt='' />
                          <a href="#!">
                            <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
                          </a>
                        </div>
                      </div>

                      <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                        <p><strong>{allProduct.name}</strong></p>
                        <p>{allProduct.category}</p>
                        <p><i className="fa-solid fa-dollar-sign">&nbsp;&nbsp;{allProduct.discount}</i></p>
                        <button type="button" className="btn btn-danger btn-sm me-1 mb-2" data-mdb-toggle="tooltip" title="Remove item"
                          onClick={() => removeProduct(allProduct)}><i className="fas fa-trash"></i>
                        </button>
                      </div>
                      <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <div className="d-flex mb-4" style={{ maxWidth: '300px' }}>
                          <button className="btn btn-primary px-3 me-2" onClick={() => decqty(allProduct)}><i className="fas fa-minus"></i> </button>
                          <div className="form-outline">
                            <input id="form1" min="0" name="quantity" value={allProduct.qty} type="number" className="form-control" style={{ overflowY: 'hidden' }} />
                          </div>
                          <button className="btn btn-primary px-3 ms-2" onClick={() => incqty(allProduct)}><i className="fas fa-plus"></i></button>
                        </div>
                        <p className="text-start text-md-center"><strong><i className='fa-solid fa-dollar-sign'>&nbsp;{allProduct.discount * allProduct.qty}</i></strong></p>
                      </div>
                      <hr className="my-4" />
                    </div>
                  })
                }

              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-header py-3">
                <h5 className="mb-0" style={{ overflowY: 'hidden', fontWeight: 'bold' }}>Summary</h5>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    SubTotal <span><i className='fa-solid fa-dollar-sign'>&nbsp;{total}</i></span></li>
                  <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                    Shipping <span><i className='fa-solid fa-dollar-sign'>&nbsp;200.00</i></span></li>
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                      <strong>Total amount</strong>
                      <strong>
                        <p className="mb-0">(including VAT)</p>
                      </strong>
                    </div>
                    <span><strong><i className='fa-solid fa-dollar-sign'>&nbsp;{total + 200}</i></strong></span>
                  </li>
                </ul>

                <button type="button" className="btn btn-warning" onClick={makePayment} >
                  Go to checkout
                </button>

                <div>
                  <Link to='/productcategory' href="#!" className="btn btn-warning" style={{ marginTop: '10px' }}><i
                    className="fas fa-long-arrow-alt-left me-2"></i>Continue shopping</Link>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </>
}

export default Cart