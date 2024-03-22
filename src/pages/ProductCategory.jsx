import React, { useState } from 'react'
import './css/ProductCategory.css'
import Topbar from '../components/topbar/Topbar'
import Footer from '../components/footer/Footer'
import { FaIndianRupeeSign } from 'react-icons/fa6'
import { AiOutlineClose } from 'react-icons/ai'

function ProductCategory({ product, Filter, addToCart}) {

  const [showDetail, setShowDetail] = useState(false)
  // Detail Page Data
  const [detail, setDetail] = useState([])
  //Showing Detail Box
  const detailpage = (product) => {
    const detaildata = ([{ product }])
    const productdetail = detaildata[0]['product']
    // console.log(productdetail)
    setDetail(productdetail)
    setShowDetail(true)
  }
  const closedetail = () => {
    setShowDetail(false)
  }


  return <>
    <Topbar />

    {
      showDetail ? <>
        <div className='product_detail'>
          <button className='close_btn' onClick={closedetail}><AiOutlineClose /></button>
          <div className='card-container' style={{ overflowY: 'hidden' }} >
            <div className='img_box'>
              <img src={detail.image} alt=''></img>
            </div>
            <div className='info'>
              <h6 className='category' style={{ overflowY: 'hidden' }}>{detail.category}</h6>
              <h4 style={{ overflowY: 'hidden' }}>{detail.name}</h4>
              <p style={{ fontSize: '12px' }}>We are all like fireworks. We climb, shine and always go our separate ways and become further apart.
                But even if that time comes, let's not disappear like a firework, and continue to shine... forever.</p>
              <h5 style={{ overflowY: 'hidden', textDecoration: 'line-through', color: 'gray' }}>
                <FaIndianRupeeSign style={{ textDecoration: 'line-through', fontSize: '16px', color: 'gray' }} />&nbsp;{detail.price}</h5>
              <h5 style={{ overflowY: 'hidden' }}><FaIndianRupeeSign style={{ fontSize: '16px' }} />&nbsp;{detail.discount}</h5>
              <button className='btn btn-danger' onClick={() => addToCart(detail)}>Add To Cart</button>
            </div>
          </div>
        </div>
      </> : null
    }


    <div className="product-category">
      <div className="image">
        <img src='http://clipart-library.com/img/1179471.gif' alt="" />
      </div>
      <h2 className="text-center" style={{ marginTop: '3%' }}>Product Categories <hr className="line"
        style={{ border: '2px solid black', width: '20%', margin: 'auto', marginTop: '10px' }} /></h2>

      <div className="container-buttons">
        <div className="grid-container">
          <button className='btn btn-outline-danger' onClick={() => Filter('all')}>All Category</button>&nbsp;&nbsp;
          <button className='btn btn-outline-danger' onClick={() => Filter('Sparklers')}>Sparklers</button>&nbsp;&nbsp;
          <button className='btn btn-outline-danger' onClick={() => Filter('Flower Pots')}>Flower Pots</button>&nbsp;&nbsp;
          <button className='btn btn-outline-danger' onClick={() => Filter('Ground Chakkars')}>Ground Chakkars</button>&nbsp;&nbsp;
          <button className='btn btn-outline-danger' onClick={() => Filter('Rockets')}>Rockets</button>&nbsp;&nbsp;
          <button className='btn btn-outline-danger' onClick={() => Filter('Sky Shots')}>Sky Shots</button>&nbsp;&nbsp;
          <button className='btn btn-outline-danger' onClick={() => Filter('Atom Bombs')}>Atom Bombs</button>&nbsp;&nbsp;
          <button className='btn btn-outline-danger' onClick={() => Filter('Garland Crackers')}>Garland Crackers</button>&nbsp;&nbsp;
          <button className='btn btn-outline-danger' onClick={() => Filter('Kids Crackers')}>Kids Items</button>&nbsp;&nbsp;
          <button className='btn btn-outline-danger' onClick={() => Filter('One Sound Crackers')}>One Sound Crackers</button>&nbsp;&nbsp;
          <button className='btn btn-outline-danger' onClick={() => Filter('Electric Crackers')}>Electric Crackers</button>&nbsp;&nbsp;
          <button className='btn btn-outline-danger' onClick={() => Filter('Hollywood Fountain')}>HollyWood Fountain</button>&nbsp;&nbsp;
          <button className='btn btn-outline-danger' onClick={() => Filter('HiFi Fancy Items')}>HiFi Fancy Items</button>&nbsp;&nbsp;
          <button className='btn btn-outline-danger' onClick={() => Filter('Combos')}>Combos</button>&nbsp;&nbsp;
        </div>
      </div>

      <hr style={{ marginBottom: '3%' }} />

      <div className='container-cards'>
        <div className="product-box">
          <div className="row row-cols-1 row-cols-md-4 g-0">
            {
              product.map((allProduct, i) => {
                return <div className="col" key={i} >
                  <div className="card ">
                    <img src={allProduct.image} className="card-img-top" alt="..." onClick={() => detailpage(allProduct)} />
                    <div className="card-body">
                      <h5 className="card-name">{allProduct.name}</h5>
                      <p className="card-price"><i className="fa-solid fa-indian-rupee-sign"
                        style={{ color: 'gray', textDecoration: 'line-through' }}>
                        &nbsp;{allProduct.price}</i></p>
                      <p className="card-discount" style={{fontSize:'24px'}}><i className="fa-solid fa-indian-rupee-sign">&nbsp;{allProduct.discount}/-</i></p>
                      <button className='btn btn-warning' onClick={() => addToCart(allProduct)} >Add To Cart</button>
                    </div>
                  </div>
                </div>
              })
            }
          </div>
        </div>
      </div>
    </div>


    <Footer />
  </>
}

export default ProductCategory