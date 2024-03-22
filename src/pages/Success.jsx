import React from 'react'
import { Link } from 'react-router-dom'
import success_img from '../assets/success-tick-dribbble.gif'

function Success() {
  return <>
  <div className="success-card" 
  style={{
    display:'flex',
    flexDirection: 'column',
    margin:"auto",
    border: '1px solid green',
    borderRadius: '10px',
    padding: '20px',
    textAlign: 'center',
    top:'15%',
    width: '25%',
    marginTop: '5%',
  }}
  >
    <h3 style={{color:'green',overflowY: 'hidden',}}>Payment Successful</h3><br />
    <img src={success_img} alt="" className='rounded-circle' />
    <p>Thank you for shopping with us. Your order will be delivered soon.</p>
    <Link to='/' style={{color:'green',overflowY: 'hidden', textDecoration: 'none'}}>Back to Home</Link>
  </div>
  </>
}

export default Success