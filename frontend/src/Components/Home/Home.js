import React from 'react';
import './home.css'; // Import the CSS file
import { Link } from 'react-router-dom';
import logo from './logo.png'

const Home = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <nav className="navbar">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <ul className="nav-links">
            <Link to="/login">
            <li className="nav-item">Login</li>
            </Link>
          </ul>
        </nav>
      </header>

      <section id="hero" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to  Smart Spend </h1>
          <p className="hero-description">A brief description of your website or product.</p>
          <button className="hero-button">Get Started</button>
        </div>
      </section>

      <section id="about" className="section">
        <div className="section-content">
          <h2>About</h2>
          <p>Introducing our innovative Money Tracker app – the ultimate tool to effortlessly manage your finances and gain control over your spending. With our app, you can easily track your income, expenses, and savings, empowering you to make informed financial decisions and achieve your financial goals.</p>
        </div>
      </section>

      

      <section id="contact" className="section">
        <div className="section-content">
          <h2>Contact</h2>
          <p>Contact information and form goes here.</p>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Your Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;