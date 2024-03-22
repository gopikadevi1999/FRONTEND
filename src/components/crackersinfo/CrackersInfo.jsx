import React from 'react'
import './CrackersInfo.css'
import Quality from '../../assets/quality product.png'
import Delivery from '../../assets/delivery.png'
import ecofriendly from '../../assets/eco friendly.png'
import Payment from '../../assets/payment.png'


function CrackersInfo() {
    return <>
        <div className="crackers-info">
            <div className="row">
                <div className="quality col-md-4">
                    <img src={Quality} className="crackers-info-img" alt="quality product" />
                    <h5 className="crackers-info-title">Quality Products</h5>
                    <p className="crackers-info-text">When it comes to Sivakasi Crackers, quality takes precedence over cost. We
                        understand
                        that the value of a
                        product goes beyond its price tag. That's why we meticulously select Crackers with the same care as if we were
                        choosing them for our own family. Our commitment to safety, premium quality, and affordability ensures an
                        exceptional experience that resonates with both adults and children.</p>
                </div>
                <div className="delivery col-md-4">
                    <img src={Delivery} className="crackers-info-img" alt="delivery" />
                    <h5 className="crackers-info-title">Delivery</h5>
                    <p className="crackers-info-text">Get your Orders Within Two Days.Pick your Orders from nearest Transport
                        Office.Transport
                        Charge to be paid
                        separately while receiving the Goods. Visit FAQ section for more details.</p>
                </div>
                <div className="eco-friendly col-md-4">
                    <img src={ecofriendly} className="crackers-info-img" alt="eco-friendly" />
                    <h5 className="crackers-info-title">Eco friendly</h5>
                    <p className="crackers-info-text">Nowadays environment is a primary concern.So our crackers are free of harmful
                        components, like Barium,
                        Aluminum
                        and Chromium that are generally used in firecrackers to get different colours. Instead we use Government
                        guided
                        ECO friendly mixture of chemicals.</p>
                </div>
                <div className="payment col-md-4">
                    <img src={Payment} className="crackers-info-img" alt="payment" />
                    <h5 className="crackers-info-title">Payment Options</h5>
                    <p className="crackers-info-text">Get your Orders Within Two Days.Pick your Orders from nearest Transport
                        Office.Transport
                        Charge to be paid
                        separately while receiving the Goods. Visit FAQ section for more details.</p>
                </div>
            </div>
        </div>
    </>
}

export default CrackersInfo