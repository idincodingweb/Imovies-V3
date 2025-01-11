import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../api/datafilm';
import requests from '../api/requests';
import { auth, onAuthStateChanged } from '../firebaseConfig';
import '../assets/style/MovieList.css';

const categories = {
  'All Films': requests.fetchPopularMovies,
  'Action': requests.fetchActionMovies,
  'Comedy': requests.fetchComedyMovies,
  'Horror': requests.fetchHorrorMovies,
  'Romance': requests.fetchRomanceMovies,
  'Documentary': requests.fetchDocumentaries,
};

// Utility function to get genres by Idin Code
const getGenres = (genre_ids) => genre_ids.join(', ');

// Utility function to get random duration
const getRandomDuration = () => {
  const hours = Math.floor(Math.random() * 1.5) + 1;
  const minutes = Math.floor(Math.random() * 60);
  return `${hours}h ${minutes}m`;
};

// Utility function to scroll left
const scrollLeft = (elementId) => {
  const container = document.getElementById(elementId);
  container.scrollBy({ left: -500, behavior: 'smooth' });
};

// Utility function to scroll right
const scrollRight = (elementId) => {
  const container = document.getElementById(elementId);
  container.scrollBy({ left: 500, behavior: 'smooth' });
};

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [category, setCategory] = useState('All Films');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Combined useEffect for fetching movies and updating auth state
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(categories[category]);
        setMovies(response.data.results);
      } catch (error) {
        console.error('Failed to fetch movies', error);
      }
    };

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });

    fetchMovies();
    return () => unsubscribe();
  }, [category]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleCardClick = (movieId) => {
    if (isLoggedIn) {
      navigate(`/detailmovie/${movieId}`);
    } else {
      alert('Anda harus login dulu');
      setTimeout(() => navigate('/login'), 2000);
    }
  };

  return (
    <section id="movies">
      <div className="movie-list-container">
        <div className="container-fluid px-4">
          <div className="movielist-header">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h2 className="text-white fw-bold">OPENING THIS WEEK</h2>
            </div>
            <div className="movielist-filters mb-4">
              {Object.keys(categories).map((cat) => (
                <button
                  key={cat}
                  className={`btn ${category === cat ? 'btn-danger' : 'btn-dark'} me-2`}
                  onClick={() => setCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="movielist-slider-container position-relative">
            <button 
              className="scroll-button scroll-left"
              onClick={() => scrollLeft('movieSlider')}
            >
              &#10094;
            </button>
            
            <div id="movieSlider" className="movielist-slider">
              {movies.map((movie) => (
                <div 
                  key={movie.id} 
                  className="movielist-card" 
                  onClick={() => handleCardClick(movie.id)}
                >
                  <div className="movielist-poster">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title}
                      className="img-fluid"
                    />
                    <div className="movie-overlay">
                      <button className="btn btn-danger">Play Now</button>
                    </div>
                  </div>
                  <div className="movielist-info">
                    <h3>{movie.title}</h3>
                    <div className="movielist-details">
                      <span>{getRandomDuration()}</span>
                      <span className="divider">|</span>
                      <span>{movie.genre_ids ? getGenres(movie.genre_ids) : 'Genres not available'}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button 
              className="scroll-button scroll-right"
              onClick={() => scrollRight('movieSlider')}
            >
              &#10095;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieList;