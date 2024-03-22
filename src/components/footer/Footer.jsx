import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return <>
        <div className="about-us">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="about">
                        <h5 className="title">About Us</h5>
                        <hr />
                        <hr className="line" />
                        <p className="text">Welcome to RSR Crackers, We invite you to experience the magic of fireworks
                            firsthand at our store in Sivakasi.
                            Discover the array of colors, patterns, and effects that will make your celebrations truly spectacular.
                            RSR Crackers is not just a shop; it's a destination where the joy of fireworks comes to life.</p>
                    </div>
                </div>
                <div className="col">
                    <div className="quick-link">
                        <h5 className="title">Quick Links</h5>
                        <hr />
                        <hr className="line" />
                        <p className="text"><i className="fa-solid fa-hand-point-right"></i><Link to="/about" className="link" >&nbsp;&nbsp;About us</Link></p>
                        <p className="text"><i className="fa-solid fa-hand-point-right"></i><Link to="/productcategory" className="link" >&nbsp;&nbsp;Products</Link></p>
                        <p className="text"><i className="fa-solid fa-hand-point-right"></i><Link to="/cart" className="link" >&nbsp;&nbsp;Cart</Link></p>
                        <p className="text"><i className="fa-solid fa-hand-point-right"></i><Link to="/contact" className="link" >&nbsp;&nbsp;Contact us</Link></p>
                    </div>
                </div>
                <div className="col">
                    <div className="contact">
                        <h5 className="title">Contact Information</h5>
                        <hr />
                        <hr className="line" />
                        <p className="text"><i className="fa-solid fa-location-dot"></i>&nbsp;&nbsp;1826,Periyakaruppan Road, Near Sangeetha Lodge, Sivakasi-626 123</p>
                        <p className="text"><i className="fa-solid fa-phone"></i>&nbsp;&nbsp;9789235454</p>
                        <p className="text"><i className="fa-solid fa-envelope"></i>&nbsp;&nbsp;deviradhakrishnan6363@gamil.com</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='copyright'>
            <p>As per 2018 supreme court order, online sale of firecrackers are not permitted! We value our customers and at the same time, 
                we respect jurisdiction. We request you to add your products to the cart and submit the required crackers through the enquiry button. 
                We will contact you within 24 hrs and confirm the order through WhatsApp or phone call. Please add and submit your enquiries and enjoy your Diwali with Peacock Crakcers. Peacock Crakcers as a company following 100% legal & statutory compliances and all our shops, go-downs are maintained as per the explosive acts. We send the parcels through registered and legal transport service providers 
                as like every other major companies in Sivakasi is doing so.Okay, Copyright © 2024.
            </p>
        </div>
    </>
}

export default Footer