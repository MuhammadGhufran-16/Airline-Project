import React, { useState } from 'react';
import airline1 from '../images/airline-1.jpg';
import airline2 from '../images/airline-2.jpg';
import airline3 from '../images/airline-3.jpg';
import airline4 from '../images/airline-4.jpg';
import airline5 from '../images/airline-5.jpg';
import airline6 from '../images/airline-6.png';
import airlineInside1 from '../images/airline-inside-1.jpg';
import airlineInside2 from '../images/airline-inside-2.jpg';
import airlineInside3 from '../images/airline-inside-3.jpg';
import airlineInside4 from '../images/airline-inside-4.jpg';
import './Gallery.css'; 

const Gallery = () => {
  const [selectedTab, setSelectedTab] = useState('all');

  const images = {
    all: [airline1, airline2, airline3, airline4, airline5, airline6, airlineInside1, airlineInside2, airlineInside3, airlineInside4],
    outside: [airline1, airline2, airline3,airline4, airline5, airline6],
    inside: [airlineInside1, airlineInside2, airlineInside3, airlineInside4],
  };

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div>
<div className='gallery-banner-image'>
   
   </div>
   <div className='gallery-texts'>
      <h2 className='gallery-heading'>Gallery</h2>
      <p>Explore our beautiful gallery.</p> </div>
      <div className="gallery-images-container">
      <div className="tabs">
        <button onClick={() => handleTabChange('all')}>All</button>
        <button onClick={() => handleTabChange('outside')}>Outside</button>
        <button onClick={() => handleTabChange('inside')}>Inside</button>
      </div>

      <div className="gallery">
        {images[selectedTab].map((src, index) => (
          <img key={index} src={src} alt={`Gallery ${index}`} className="gallery-image" />
        ))}
      </div>
      </div>
    </div>
  );
};

export default Gallery;
