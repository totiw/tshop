import React from 'react';
import nike from '../assets/images/nike.webp';

const Hero = () => {
  return (
      <>
        <div className="hero">
            <div className="container">
                <div className="left">
                    <h2>Makes You Difference</h2>  
                    <p>Shop in many types of fashion that you need to be out standing</p>
                    <div className="buttons">
                        <a href="/shopnow">Shop Now</a>
                        <a href="/">Idr. 250k</a>
                    </div>
                </div>
                <div className="right">
                    <img src={nike} alt="nike" />
                </div>
            </div>
        </div>
      </>
  )
}

export default Hero