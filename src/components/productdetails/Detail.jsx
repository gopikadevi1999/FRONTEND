import React from 'react'
import './Detail.css'
import fireworkimg from '../../assets/fireworks.gif'

function Detail() {
    return <>
        <div className="discount">
            <div className="card ">
                <img src={fireworkimg} className="card-img" alt="..." />
                <div className="card-img-overlay">
                    <h5 className="card-title">80% DISCOUNT ON ALL PRODUCTS</h5><br />
                    <p className="card-text">In accordance with a 2018 Supreme Court ruling, we wish to inform our valued customers that
                        the online sale of firecrackers is not permitted. At RSR crackers, we deeply respect jurisdiction and
                        uphold legal compliance. To cater to your needs, kindly add the desired products to your cart and submit your
                        enquiries via the provided button. Within 24 hours, our team will promptly contact you via WhatsApp or phone
                        call to confirm your order. Rest assured, all our shops and go-downs strictly adhere to explosive acts, and we
                        diligently dispatch parcels through registered and authorized transport service providers, similar to other
                        reputable companies in Sivakasi. Celebrate your Diwali with joy and safety with RSR Crackers</p>
                </div>
            </div>
        </div>
    </>
}

export default Detail