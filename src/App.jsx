import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Deals from './components/Deals';
import FlightDetails from './components/FlightDetails';
import Gallery from './components/Gallery';
import SignIn from './components/SignIn'; 
import Preloader from './components/Preloader';
import './App.css';
// import './Responsive.css';

function App() {
  return (
    <Router>
      <div className="App">
      <Preloader />
        <Header />
        <Routes>
          <Route path="/Airline-Project" element={<Main />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/flight-details" element={<FlightDetails />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/sign-in" element={<SignIn />} />
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
