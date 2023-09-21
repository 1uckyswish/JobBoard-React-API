import React from 'react';
import "./Header.css";

function Header() {
  return (
    <header>
      <h1>Jobly</h1>
      <nav>
        <p className="nav-link">Home</p>
        <p className="nav-link">About</p>
        <p className="nav-link">Services</p>
        <p className="nav-link">Testimonials</p>
        <p className="nav-link">Contact</p>
      </nav>
    </header>
  )
}

export default Header;
