import React from 'react';
import './Footer.css'; 
import laurel1 from '../images/laurel-1.svg'; 
import laurel2 from '../images/laurel-2.svg';
import laurel3 from '../images/laurel-3.svg';
import { FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear(); // Get the current year

    return (
        <footer className="footer">
            <div className="footer-section laurel-icons">
                <img src={laurel1} alt="Laurel 1" className="laurel-icon" /> <br/>
                <img src={laurel2} alt="Laurel 2" className="laurel-icon" /><br/>
                <img src={laurel3} alt="Laurel 3" className="laurel-icon" />
            </div>
            <div className="footer-section">
                <h5>About Malaysian Air</h5>
                <ul>
                    <li><a href="#">Annual Report</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Awards and Achievements</a></li>
                    <li><a href="#">Alliances and Partners</a></li>
                    <li><a href="#">Press Release</a></li>
                    <li><a href="#">Mobile App</a></li>
                    <li><a href="#">E-Procurement</a></li>
                    <li><a href="#">Air Catering</a></li>
                    <li><a href="#">Our Fleet</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <div className='social-media'>
                    <h5>Connect with us</h5>
                </div>
                <ul>
                    <li><a href="#">Plan Your Flight</a></li>
                    <li><a href="#">Flight Schedule</a></li>
                    <li><a href="#">Most Searched Flights</a></li>
                    <li><a href="#">Flight Pass</a></li>
                    <li><a href="#">Staff Travel</a></li>
                    <li><a href="#">Explore Malaysia</a></li>
                </ul>
                <div className="social-icons">
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={30} className="social-icon instagram" />
                    </a>
                    <a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp size={30} className="social-icon whatsapp" />
                    </a>
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                        <FaYoutube size={30} className="social-icon youtube" />
                    </a>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="footer-section copyright-section">
                <p className="copyright">
                    &copy; {currentYear} Malaysian Air. All rights reserved. - Ghufran
                </p>
            </div>
        </footer>
    );
};

export default Footer;
