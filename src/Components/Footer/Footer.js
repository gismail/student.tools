// Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <p>© {new Date().getFullYear().toFixed()} by Smail Gourmi. All rights reserved.</p>
    </div>
  );
}

export default Footer;
