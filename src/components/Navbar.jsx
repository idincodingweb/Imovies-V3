// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { auth, onAuthStateChanged, logOutUser } from '../firebaseConfig';
import { User, LogOut } from 'lucide-react';
import '../assets/style/Navbar.css';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await logOutUser();
      navigate('/login'); // Redirect to login page after logout
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <nav className="navbar navbar-expand-md navbar-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">IMOVIE.CO</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/aboutme">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#movies">Movies</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#news">News</Link>
            </li>
          </ul>
          {isLoggedIn ? (
            <div className="d-flex align-items-center">
              <button className="btn btn-danger me-2" onClick={handleLogout}>
                <LogOut size={20} />
              </button>
              <Link to="/profile" className="nav-link">
                <User size={20} />
              </Link>
            </div>
          ) : (
            <button className="btn btn-danger">
              <Link className="nav-link" to="/login">Sign In</Link>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;