import React, { useState } from 'react'
import './css/LoginSignup.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

function ForgotPassword() {

    const navigate = useNavigate()

    const [email, setEmail] = useState('')

   
    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('https://rsr-backend.onrender.com/auth/forgot-password', {
            email,
        })
            .then(res => {
                if(res.data.status){
                    navigate('/login')
                    toast.success('Password reset link sent to your email') 
                }         
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

  return <>
   <section className="signup gradient" style={{ overflowY: 'hidden' }}>
            <div className="container  h-70" style={{ marginTop: '10%', marginBottom: '2.2%' }}>
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-dark text-white" style={{ borderRadius: '1rem' }}>
                            <div className="card-body  text-center">
                                <div className="mb-md-5 mt-md-4 " >
                                    <h2 className=" mb-2 text-uppercase p-3" style={{ overflowY: 'hidden', fontSize:'25px' }}>Forgot Password</h2>
                                    <div className="form-outline form-white mb-4">
                                        <input type="email"
                                            id="typeEmailX"
                                            className="form-control form-control-lg"
                                            placeholder='Email'
                                            name='email'
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)} />
                                    </div>                            
                                    <button className="btn btn-outline-light btn-lg px-3" type="submit" onClick={handleSubmit}>Send</button>
                                </div>
                        
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

  </>
}

export default ForgotPassword