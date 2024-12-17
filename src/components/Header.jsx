import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logoo.png'; 
import logoWhite from '../images/logoo-white.png'; 
import franceFlag from '../images/france.png'; 
import indiaFlag from '../images/india.png'; 
import germanyFlag from '../images/germany.png'; 

const Header = () => {
  const [isTransparent, setIsTransparent] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsTransparent(false);  // When scrolled, the header becomes opaque
    } else {
      setIsTransparent(true);  // When at the top, the header is transparent
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Handler for language change
  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    // You can add any other logic here, e.g., updating the language context
  };

  return (
    <header className={`header ${isTransparent ? 'transparent' : ''}`}>
      <Link to="/" className="header-logo-malay">
        {/* Conditionally set logo image based on scroll */}
        <img
          src={isTransparent ? logo : logoWhite}
          alt="Logo"
          className="logo"
        />
      </Link>

      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <nav>
        <ul className={`header-lists ${menuOpen ? 'show' : ''}`}>
          <li>
            <Link to="/deals" className={`${isTransparent ? 'link-black' : 'link-white'}`}>Deals</Link>
          </li>
          <li>
            <Link to="/flight-details" className={`${isTransparent ? 'link-black' : 'link-white'}`}>Preferences</Link>
          </li>
          <li>
            <Link to="/gallery" className={`${isTransparent ? 'link-black' : 'link-white'}`}>Gallery</Link>
          </li>
          <li>
            <Link to="/sign-in">
              <button className="signin-signup">
                <i className="fas fa-user-plus"></i> Sign In / Sign Up
              </button>
            </Link>
          </li>
          <div className="dropdown-container">
            <div className="custom-dropdown">
              <button className="dropdown-button">
                {/* Display selected language */}
                <img 
                  src={selectedLanguage === 'fr' ? franceFlag : selectedLanguage === 'in' ? indiaFlag : germanyFlag}
                  alt="Language Flag"
                  className="flag-icon"
                />
              </button>
              <div className="dropdown-content">
              <div onClick={() => handleLanguageChange('in')}>
                  <img src={indiaFlag} alt="India" className="flag-icon" />
                </div>
                <div onClick={() => handleLanguageChange('fr')}>
                  <img src={franceFlag} alt="France" className="flag-icon" />
                </div>
                <div onClick={() => handleLanguageChange('de')}>
                  <img src={germanyFlag} alt="Germany" className="flag-icon" />
                </div>
              </div>
            </div>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
