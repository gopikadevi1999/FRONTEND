import React, { useState } from 'react'
import './css/LoginSignup.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

function Signup() {

    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('https://rsr-backend.onrender.com/auth/signup', {
            name,
            email,
            password
        })
            .then(res => {
                if(res.data.status){
                    
                    navigate('/login')
                    toast.success('Signup Successful')
                }
            })
            .catch(err => console.log(err))
    }

    return <>
        {/* signup */}
        <section className="signup gradient-custom" style={{ overflowY: 'hidden',height:'100vh' }}>
            <div className="container  h-70" style={{ marginTop: '2%', marginBottom: '2.2%',  }}>
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-dark text-white" style={{ borderRadius: '1rem' }}>
                            <div className="card-body p-4 text-center">
                                <div className="mb-md-5 mt-md-4 pb-1" >
                                    <h2 className="fw-bold mb-2 text-uppercase p-3" style={{ overflowY: 'hidden' }}>Sign Up</h2>
                                    <p className="text-white-50 mb-4 ">Create a new account!</p> 
                                    <div className="form-outline form-white mb-4">
                                        <input type="text"
                                            id="typeNameX"
                                            className="form-control form-control-lg"
                                            placeholder='Name'
                                            name='name'
                                            value={name}
                                            onChange={(e) => setName(e.target.value)} />
                                    </div>
                                    <div className="form-outline form-white mb-4">
                                        <input type="email"
                                            id="typeEmailX"
                                            className="form-control form-control-lg"
                                            placeholder='Email'
                                            name='email'
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className="form-outline form-white mb-4">
                                        <input
                                            type="password"
                                            id="typePasswordX"
                                            className="form-control form-control-lg"
                                            placeholder='Password'
                                            name='password'
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                    <div className="form-check d-flex justify-content-left mb-4">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" />
                                        <label className="form-check-label" >
                                            By confirming you agree to our <a href="#!" style={{ textDecoration: 'none' }}>Terms of service</a>
                                        </label>
                                    </div>

                                    <button className="btn btn-outline-light btn-lg px-5" type="submit" onClick={handleSubmit}>Signup</button>
                                </div>
                                <div>
                                    <p className="mb-0 mt-0" style={{ marginBottom: '10px' }}>Already have an account?
                                        <Link to="/login" className="text-white-50 fw-bold" style={{ textDecoration: 'none', color: 'white' }} >Login</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>
}

export default Signup