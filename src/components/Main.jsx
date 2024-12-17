import React, { useState } from 'react';
// import MalaysiaImage from '../images/Malaysia-banner.jpg';
import bannerVideo from '../videos/banner-videoo.mp4'; // Your video file

import flight from '../images/Flight-status.svg';
import baggage from '../images/BaggageExtra.svg';
import travel from '../images/Travel-upgrade.svg';
import seats from '../images/Seats.svg';
import takeoff from '../images/flightTakeoff.svg';
import landing from '../images/flightLanding.svg';


const Main = () => {
  const [formData, setFormData] = useState({ from: '', to: '', date: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <main>
      {/* Full-width Image */}
      <section className="main-video">
        <video autoPlay loop muted>
          <source src={bannerVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
 <div className="overlay">
        <div>
          <h2>Welcome to World Class</h2>
          <p>The warmth of a Family Travel</p>
          <p>with a family you've just met</p>
          <p>- we know the feeling.</p>
        </div>
      </div>

      </section>

      {/* Booking Form */}
      <section className="book-flight">
        <h2>Book a Flight</h2>
        <form onSubmit={handleSubmit}>
        <img className="takeoff" src={takeoff}  alt="FlightDestination"/> <label>    
    <input type="text" name="from" onChange={handleChange}  placeholder='Flying From'/>
    
</label>
<label>
    <img className="takeoff" src={landing}  alt="Flightlanding"    />
    <input type="text" name="to" onChange={handleChange} placeholder='Flying To' />
    
</label>

<label>
  Date:
  <div className="custom-date-input">
    <input type="date" name="date" onChange={handleChange} />
  </div>
</label>

          <button className='search-flight-butt' type="submit">Search Flight</button>
        </form>
      </section>

      {/* Travel Inspiration Section */}
      <section className="travel-inspiration">
      <div className='inspiration-text'> <h2>Looking for travel inspiration?</h2></div> 
        <div className="destinations">
     
          <div className='window-ani'>
          
            <div className="destination destiusa">
              <p className="flights-to">Flights to the USA</p>
              <p className="hello hidden">Explore Now!</p>
              <button className="hello hidden butt">Book Now!</button>
            </div>
          </div>
          <div className='window-ani'>
            <div className="destination destimala">
            <p className="flights-to">Flights to Malaysia</p>
              <p className="hello hidden">Explore Now!</p>
              <button className="hello hidden butt">Book Now!</button>
            </div>
          </div>
          <div className='window-ani'>
            <div className="destination destiparis">
            <p className="flights-to">  Flights to Paris</p>
              <p className="hello hidden">Explore Now!</p>
              <button className="hello hidden butt">Book Now!</button>
            </div>
          </div>
          <div className='window-ani'>
            <div className="destination destisinga">
            <p className="flights-to">Flights to Singapore</p>
              <p className="hello hidden">Explore Now!</p>
              <button className="hello hidden butt">Book Now!</button>
            </div>
          </div>
        </div>
      </section>
{/* -----------------------Booking Infor------------------ */}

<section className="flight-booking-info">
    <div className="container">
        <h2 className="text-center">How to Book a Flight Ticket with Malaysia Airline</h2>
        <p className="text-center">Book a flight ticket online</p>
        <div className="row">
            <div className="col-md-8 mx-auto">
                <div className="info-box">
                    <p>To find the right air ticket for your trip, just enter the location you’re flying from and your flight destination. Enter your dates, class of travel, and the number of passengers. Select ‘Search flights’ to continue with the online flight booking process and book a flight ticket that suits your travel plans.</p>
                    <h5>Compare Flight Ticket Fares</h5>
                    <p>Look out for our Best Price Guarantee mark to make sure you’re getting the best flight ticket price when you book a flight with Emirates.</p>
                </div>
            </div>
        </div>
    </div>
</section>
 {/* ----------------Enrich------------ */}

 <section className="enrich-experience">
    <div className="container">
        <h2 className="text-center">Enrich Your Experience</h2>
        <div className="d-flex justify-content-between flex-wrap">
            <div className="enrich-experience-info-box">
                
                <img src={flight}  alt="Flight Destination"    />
                <h3>Flight Status</h3>
                {/* <p>Check the status of your flight in real-time.</p> */}
            </div>
            <div className="enrich-experience-info-box">
            <img src={seats}  alt="Flight Destination"    />
            <h3>Travel Upgrade</h3>
            </div>
            <div className="enrich-experience-info-box">
            <img src={travel}  alt="Flight Destination"    />
            <h3>Flight Pass</h3>
            </div>
            <div className="enrich-experience-info-box">
            <img src={baggage}  alt="Flight Destination"    />
            <h3>Baggage</h3>
            </div>
        </div>
    </div>
</section>




    </main>
  );
};

export default Main;