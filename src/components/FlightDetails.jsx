// src/components/FlightDetails.js
import React from 'react';
import './FlightDetails.css'; 
import adventure from '../images/p-adventure.svg';
import beach from '../images/p-beach.svg';
import breaky from '../images/p-break.svg';
import family from '../images/p-family.svg';
import homey from '../images/p-homey.svg';
import nature from '../images/p-nature.svg';
import relax from '../images/p-relax.svg';
import sports from '../images/p-sports.svg';
import food from '../images/p-food.svg';
import culture from '../images/p-culture.svg';

const FlightDetails = () => {
  return (
    <div>
<div className="details-banner-image">

</div>
<div className='preferences-texts'>
      <h2 className="preference-heading">Tour Preferences</h2>
      
      <h2 className="text-center">What are your travel preferences?</h2></div>
<section className="preferences-strt">
<div className="preferences-container">
    
    <div className="preferences-box-container">
        <div className="preferences-info-box">
            
            <img src={adventure}  alt="Flight Destination"    />
            <h3>Adventure</h3>
            {/* <p>Check the status of your flight in real-time.</p> */}
        </div>
        <div className="preferences-info-box">
        <img src={beach}  alt="Flight Destination"    />
        <h3>Beach</h3>
        </div>
        <div className="preferences-info-box">
        <img src={breaky}  alt="Flight Destination"    />
        <h3>Break Time</h3>
        </div>
        <div className="preferences-info-box">
        <img src={homey}  alt="Flight Destination"    />
        <h3>Honey Moon</h3>
        </div>
        <div className="preferences-info-box">
        <img src={family}  alt="Flight Destination"    />
        <h3>Family</h3>
        </div>
        <div className="preferences-info-box">
        <img src={culture}  alt="culture"    />
        <h3>Culture</h3>
        </div>
        <div className="preferences-info-box">
        <img src={relax}  alt="relax"    />
        <h3>Relax</h3>
        </div>
        <div className="preferences-info-box">
        <img src={nature}  alt="nature"    />
        <h3>Nature</h3>
        </div>
        <div className="preferences-info-box">
        <img src={sports}  alt="nature"    />
        <h3>Nature</h3>
        </div>
        <div className="preferences-info-box">
        <img src={food}  alt="food"    />
        <h3>Food</h3>
        </div>

    </div>
</div>
</section>
   
    </div>
  );
};

export default FlightDetails;



