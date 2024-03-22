import React from 'react'
import './WelcomeImg.css'
import welcomeImg from '../../assets/Welcomeimg.png'
import { useNavigate } from 'react-router-dom';

function WelcomeImg() {

  const navigate = useNavigate();

  return <>
  <div className="imageText">
      <div className="card ">
        <img src={welcomeImg} className="card-img" alt="..." />
        <div className="card-img-overlay">
          <h5 className="card-title">Welcome to RSR Crackers Lighting up Celebrations for 13 Glorious Years!
          </h5>
          <p className="card-text">Established in the heart of Sivakasi, the fireworks capital of India, RSR
            Crackers takes pride in being your go-to destination for igniting joy and adding sparkle to your celebrations.
            With over 13 years of dedicated service, we have become synonymous with quality, safety, and the sheer magic
            that only fireworks can bring to special moments.</p>
            <button type="button" className="btn " onClick={()=> navigate('/productcategory')}>Shop Now</button>
        </div>
      </div>
    </div>
  </>
}

export default WelcomeImg