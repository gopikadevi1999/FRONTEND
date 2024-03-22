import React, { useEffect } from 'react'
import './Adminbar.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Tobar() {

    const navigate = useNavigate()

    axios.defaults.withCredentials = true;
    const handleLogout = () => {
        axios.get('https://rsr-backend.onrender.com/auth/logout')
            .then(res => {
                if (res.data.status) {
                    setIsLoggedIn(false)
                    navigate('/')
                }
                else {
                    setIsLoggedIn(true)
                    navigate('/')
                }
            })
            .catch(err => console.log(err))
    }

    //verfiy if user is logged in
    useEffect(() => {
        axios.get('https://rsr-backend.onrender.com/auth/login')
            .then(res => {
                if (res.data.status) {
                    setIsLoggedIn(true)
                }
                else {
                    setIsLoggedIn(false)
                }

            })
            .catch(err => console.log(err))
    }, [])


    return <>
        <nav className="adminNavbar navbar-expand-lg  bg-body-tertiary">
            <div className="container-fluid admin ">
                <a className="navbar-brand" href="#">RSR Crackers</a>
                <form className="d-flex">
                    <Link to='/login' className='login-button'>
                        <button type="button" className="btn btn-outline-light" onClick={handleLogout} >Logout</button>
                    </Link>

                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </form>
            </div>
        </nav>
    </>
}

export default Tobar