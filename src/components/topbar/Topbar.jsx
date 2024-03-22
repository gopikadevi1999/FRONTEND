import React, { useEffect, useState } from 'react'
import './Topbar.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


function Topbar() {

    const navigate = useNavigate()
    
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleLogin = () => {
        axios.post('https://rsr-backend.onrender.com/auth/login')
            .then(res => {
                if(res.data.status){
                    setIsLoggedIn(true)                 
                }
                else{
                    setIsLoggedIn(false)                
                }
                
            })
            .catch(err => console.log(err))
    }

axios.defaults.withCredentials = true;
    const handleLogout = () => {
        axios.get('https://rsr-backend.onrender.com/auth/logout')
            .then(res => {
                if(res.data.status){
                    setIsLoggedIn(false)
                    sessionStorage.clear("token")
                    navigate('/')
                }
                else{
                    setIsLoggedIn(true)
                    navigate('/')
                }
            })
            .catch(err => console.log(err))
    }

   //verfiy if user is logged in
   useEffect(() => {
    let token=sessionStorage.getItem("token")
    // console.log(token);
    axios.post('https://rsr-backend.onrender.com/auth/verify',{token})
        .then(res => {
            if(res.data.status){
                    setIsLoggedIn(true)              
                }
                else{
                    setIsLoggedIn(false)                  
            }

        })
        .catch(err => console.log(err))
},[])

    return <>
        <nav className="navbar navbar-expand-lg  bg-body-tertiary fixed-top">
            <div className="container-fluid ">
                <a className="navbar-brand" href="#">RSR Crackers</a>
                <button className="navbar-toggler btn-outline-light" type="button"data-bs-toggle="collapse" data-bs-target="#navbarNav" >
                    <span className="navbar-toggler-icon" style={{ color: 'white' }}></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to='/' className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/productcategory' className="nav-link" >Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/about' className="nav-link">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/contact' className="nav-link">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/cart' className="nav-link">Cart</Link>
                        </li>
                    </ul>

                    <form className="d-flex">
                        {
                            isLoggedIn ?
                                <Link to='/' className='login-button'>
                                    <button type="button" className="btn btn-outline-light" onClick={handleLogout} >Logout</button>
                                </Link>:
                                 <Link to='/login' className='login-button'>
                                 <button type="button" className="btn btn-outline-light" onClick={handleLogin} >Login</button>
                             </Link>
                       }
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </form>
                </div>  
            </div>       
        </nav>
    </>
}

export default Topbar