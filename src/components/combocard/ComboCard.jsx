import React from 'react'
import './ComboCard.css'
import { useNavigate } from 'react-router-dom'

function ComboCard({comboCard}) {
    
    const navigate = useNavigate()

    return <>

        <div className="col">
            <div className="card h-100  mb-3">
                <img src={comboCard.image} className="card-img-top" alt="..." onClick={() => navigate('/productcategory')} />
                <div className="card-body">
                    <h5 className="card-title text-center" onClick={() => navigate('/productcategory')}>{comboCard.name} <br /><br />
                        <i className="fa-solid fa-indian-rupee-sign">&nbsp;{comboCard.price}</i><br /><br />
                        <a className="btn btn-primary" onClick={() => navigate('/combos')}> Read More </a>
                    </h5>
                </div>
            </div>
        </div>

    </>
}

export default ComboCard