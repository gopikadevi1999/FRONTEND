import React from 'react'
import './ProductCat.css'
import { useNavigate } from 'react-router-dom'

function ProductCat({ CardData }) {

    let navigate = useNavigate()

    return <>
        <div className="col">
            <div className="card h-100">
                <img src={CardData.image} className="card-img-top" alt="..." onClick={() => navigate('/productcategory')} />
                <div className="card-body">
                    <h5 className="card-title"><a className="product-title" onClick={() => navigate('/productcategory')} >{CardData.title}</a></h5>
                    <p className="card-text">{CardData.description}</p>
                </div>
            </div>
        </div>
    </>
}

export default ProductCat