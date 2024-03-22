import React from 'react'
import './ThankDes.css'
import thankimg from '../../assets/thankimg.jpg'

function ThankDes() {
    return <>
        <div className="thanks">
            <div className="card">
                <img src={thankimg} className="card-img" alt="..." />
                <div className="card-img-overlay">
                    <h3 className="card-title">THANK YOU</h3>
                    <p className="card-text">Dear customers, thank you for choosing RSR Crackers for your festive needs. We take
                        pride in providing Sivakasi crackers all year round, ensuring joyous celebrations for Christmas, New Year,
                        Pongal, weddings, and more. Trust in our quality, safety.</p>
                </div>
            </div>
        </div>
    </>
}

export default ThankDes