import React from 'react'
import cancle_icon from '../assets/cancel-icon.gif'
import { Link } from 'react-router-dom'

function Cancel() {
  return <>
    <div className="cancel-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        margin: "auto",
        border: '1px solid red',
        borderRadius: '10px',
        padding: '20px',
        textAlign: 'center',
        top: '15%',
        width: '25%',
        marginTop: '5%',
      }}
    >
      <h3 style={{ color: 'black', overflowY: 'hidden' }}>Your transaction has been cancelled. Please try again.</h3>
      <img src={cancle_icon} alt="" className='rounded-circle' />
      <Link to='/cart' style={{ textDecoration: 'none', color: 'red' }} >Back to Home</Link>
    </div>
  </>
}

export default Cancel