import React from 'react';
import { Github, Linkedin, Twitter, Mail, Phone, MapPin, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../assets/style/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container bg-black text-white py-5">
      <div className="container-fluid px-5">
        {/* Main Footer Content */}
        <div className="row g-5 mb-5">
          {/* Brand Column */}
          <div className="col-lg-3 col-md-12">
            <h3 className="text-danger fw-bold mb-4">IMOVIE.CO</h3>
            <p className="mb-4">Discover the latest movies and TV shows with our comprehensive entertainment platform. Your one-stop destination for all things cinema.</p>
            <div className="d-flex gap-3">
              <a href="https://github.com/idincodingweb" className="btn btn-dark rounded-circle p-2 d-flex align-items-center hover-danger">
                <Github size={20} />
              </a>
              <a href="https://id.linkedin.com/in/idin-iskandar-163773271" className="btn btn-dark rounded-circle p-2 d-flex align-items-center hover-danger">
                <Linkedin size={20} />
              </a>
              <a href="#" className="btn btn-dark rounded-circle p-2 d-flex align-items-center hover-danger">
                <Twitter size={20} />
              </a>
              <Link to="/contact" className="btn btn-dark rounded-circle p-2 d-flex align-items-center hover-danger">
                <Mail size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links - Pushed right with offset */}
          <div className="col-lg-2 col-md-4">
            <h5 className="text-white mb-4">Quick Links</h5>
            <ul className="list-unstyled footer-links">
              <li className="mb-3">
                <Link to="/" className="text-secondary text-decoration-none hover-text-danger">Home</Link>
              </li>
              <li className="mb-3">
                <Link to="/movies" className="text-secondary text-decoration-none hover-text-danger">Movies</Link>
              </li>
              <li className="mb-3">
                <Link to="/tvshows" className="text-secondary text-decoration-none hover-text-danger">TV Shows</Link>
              </li>
              <li className="mb-3">
                <Link to="/aboutme" className="text-secondary text-decoration-none hover-text-danger">About Us</Link>
              </li>
              <li className="mb-3">
                <Link to="/contact" className="text-secondary text-decoration-none hover-text-danger">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="col-lg-2 col-md-4">
            <h5 className="text-white mb-4">Categories</h5>
            <ul className="list-unstyled footer-links">
              <li className="mb-3">
                <Link to="/category/action" className="text-secondary text-decoration-none hover-text-danger">Action</Link>
              </li>
              <li className="mb-3">
                <Link to="/category/comedy" className="text-secondary text-decoration-none hover-text-danger">Comedy</Link>
              </li>
              <li className="mb-3">
                <Link to="/category/drama" className="text-secondary text-decoration-none hover-text-danger">Drama</Link>
              </li>
              <li className="mb-3">
                <Link to="/category/horror" className="text-secondary text-decoration-none hover-text-danger">Horror</Link>
              </li>
              <li className="mb-3">
                <Link to="/category/documentary" className="text-secondary text-decoration-none hover-text-danger">Documentary</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-2 col-md-4">
            <h5 className="text-white mb-4">Contact Info</h5>
            <ul className="list-unstyled">
              <li className="mb-4 d-flex gap-3">
                <MapPin className="text-danger flex-shrink-0" size={24} />
                <span className="text-secondary">Desa Cipondoh, Kota Karawang</span>
              </li>
              <li className="mb-4 d-flex gap-3">
                <Phone className="text-danger flex-shrink-0" size={24} />
                <span className="text-secondary">+6282295274521</span>
              </li>
              <li className="mb-4 d-flex gap-3">
                <Mail className="text-danger flex-shrink-0" size={24} />
                <span className="text-secondary">idincode@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="row justify-content-center mb-5">
          <div className="col-md-8 text-center">
            <h5 className="text-white mb-4">Subscribe to Our Newsletter</h5>
            <div className="input-group">
              <input 
                type="email" 
                className="form-control bg-dark border-dark text-white" 
                placeholder="Enter your email"
                aria-label="Enter your email"
              />
              <button className="btn btn-danger px-4" type="button">Subscribe</button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-top border-secondary pt-4">
          <div className="row">
            <div className="col-md-6 text-center text-md-start">
              <p className="mb-0 text-secondary">
                © 2024 IMOVIE.CO. Made with <Heart size={16} className="text-danger mx-1" /> by Idin Iskandar
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <Link to="/privacy" className="text-secondary text-decoration-none hover-text-danger me-4">Privacy Policy</Link>
              <Link to="/disclaimers" className="text-secondary text-decoration-none hover-text-danger me-4">Disclaimers</Link>
              <Link to="/termofservices" className="text-secondary text-decoration-none hover-text-danger me-4">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS */}
      <style>
        {`
          .hover-danger:hover {
            background-color: #dc3545 !important;
            color: white !important;
          }

          .hover-text-danger:hover {
            color: #dc3545 !important;
            transition: color 0.3s ease;
          }

          .footer-links li a {
            transition: color 0.3s ease;
          }

          .form-control:focus {
            border-color: #dc3545;
            box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;