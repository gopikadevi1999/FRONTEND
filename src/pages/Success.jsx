import React from 'react'
import { Link } from 'react-router-dom'
import success_img from '../assets/success-tick-dribbble.gif'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './css/success.css'

function Success() {
  return <>

  <Card style={{ width: '18rem', margin: 'auto', marginTop: '5%', border:'1px solid green' }} className="text-center">
    <Card.Body>
      <Card.Title style={{color:'green',overflowY: 'hidden',}}>Payment Successful</Card.Title>
      <Card.Img variant="top" src={success_img} />
      <Card.Text>
        Thank you for shopping with us. Your order will be delivered soon.
      </Card.Text>
      <Link to='/'><Button variant="outline-success" className='success-button' style={{color:'green'}} >Back to Home</Button></Link>
    </Card.Body>
  </Card>
  </>
}

export default Success