// src/components/Preloader.js

import React, { useState, useEffect } from 'react';
import '../components/Preloader.css'; 
import loader from "../images/4820.gif" ;
const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating loading time (e.g., fetching data or waiting for images to load)
    const timer = setTimeout(() => {
      setLoading(false); // Hide preloader after 2 seconds
    }, 2000); // Adjust the timeout to your needs (2000ms = 2 seconds)

    return () => clearTimeout(timer); // Clean up the timeout when component unmounts
  }, []);

  return (
    <div className={`preloader ${loading ? 'show' : ''}`}>
     <div className="plane">
     <img className="plane-img" src={loader} alt="Loading..." />
      </div> 
    </div>
  );
};

export default Preloader;
