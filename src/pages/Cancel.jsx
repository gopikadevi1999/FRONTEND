import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import cancel_img from '../assets/cancel-icon.gif'
import './css/cancel.css'
import { Link } from 'react-router-dom';

function Cancel() {
  return <>
  <Card style={{ width: '18rem', margin: 'auto', marginTop: '5%', border:'1px solid red' }} className="text-center">
    <Card.Body>
      <Card.Title style={{color:'red',overflowY: 'hidden',}}>Payment Cancelled</Card.Title>
      <Card.Img variant="top" src={cancel_img} />
      <Card.Text>
        Your payment was cancelled. Please try again.
      </Card.Text>
      <Link to='/'><Button variant="outline-danger" className='cancel-button' style={{color:'red'}} >Back to Home</Button></Link>
    </Card.Body>
  </Card>
  </>
}

export default Cancel