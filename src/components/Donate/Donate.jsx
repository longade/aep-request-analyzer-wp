import React from "react";
import "./Donate.scss";
import { FaPaypal } from 'react-icons/fa';

const Donate = () => (
  <div className="donate-container">
    <span className="donate-text">If you like my extension and want to support my work, I kindly ask you for a small donation!</span>
    <a className='donate-link' href='https://paypal.me/davidelongo97' target='_blank' rel="noopener noreferrer">
      <FaPaypal />
    </a>
  </div>
)

export default Donate;