import React, { useState } from 'react'
import Topbar from '../components/topbar/Topbar'
import WelcomeImg from '../components/welcomedes/WelcomeImg'
import DataProduct from '../allproductdatas/DataProduct'
import ProductCat from '../components/productcard/ProductCat'
import ComboCard from '../components/combocard/ComboCard'
import ComboData from '../allproductdatas/ComboData'
import QuotePara from '../components/quotepara/QuotePara'
import CrackersInfo from '../components/crackersinfo/CrackersInfo'
import Detail from '../components/productdetails/Detail'
import ThankDes from '../components/thankdes/ThankDes'
import Footer from '../components/footer/Footer'

function Home() {

    return <>
        <Topbar   />
        <WelcomeImg />
        <div className="product-cards">
            <h2 className="text-center">Products</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    DataProduct.map((product, i) => {
                        return <ProductCat key={i} CardData={product} />
                    })
                }
            </div>
        </div>

        <QuotePara />

        <CrackersInfo />

        <Detail />

        <ThankDes />

        <div className="combo">
            <h2 className="text-center">Combos</h2>
            <div className="row row-cols-1 row-cols-md-3 g-5">
                {
                    ComboData.map((comboCard, i) => {
                        return <ComboCard key={i} comboCard={comboCard} />
                    })
                }
            </div>
        </div>

        <Footer />

    </>
}

export default Home