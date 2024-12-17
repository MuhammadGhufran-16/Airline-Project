import React from 'react';
import './Deals.css'; // Ensure your CSS file is imported
import kualaLumpurImage from '../images/Kulalumpur.jpg'; // Adjust the path as needed
import baliImage from '../images/bali.jpg'; // Adjust the path as needed
import singaporeImage from '../images/Singapore.jpg'; // Adjust the path as needed
import maldivesImage from '../images/Maldives.jpg'; // Adjust the path as needed
import dubaiImage from '../images/Dubai.jpg'; // Adjust the path as needed

const Deals = () => {
  const dealData = [
    { title: "Kuala Lumpur", subtitle: "Kochi - Kuala Lumpur", price: "INR 6,599", image: kualaLumpurImage },
    { title: "Bali", subtitle: "Kochi - Bali", price: "INR 10,999", image: baliImage },
    { title: "Singapore", subtitle: "Kochi - Singapore", price: "INR 7,999", image: singaporeImage },
    { title: "Maldives", subtitle: "Kochi - Maldives", price: "INR 12,499", image: maldivesImage },
    { title: "Dubai", subtitle: "Kochi - Dubai", price: "INR 8,999", image: dubaiImage }
  ];

  return (
    <div>
      <div className='deals-banner-image'>
   
      </div>
      <div className='deals-texts'>
      <h2 className='deals-heading'>Deals</h2>
      <p>Find the best deals on flights!</p></div>
      <div className="deals-container d-flex flex-wrap justify-content-between">
        {dealData.map((deal, index) => (
          <div className="deal-card" key={index} style={{ width: '22%' }}> {/* Set width to 25% */}
            <div className="deal-image">
              <img src={deal.image} alt={deal.title} className="img-fluid" />
            </div>
            <div className="deal-text">
              <h3>{deal.title}</h3>
              <p>{deal.subtitle}</p>
              <p>Economy All-in One Way from {deal.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Deals;
