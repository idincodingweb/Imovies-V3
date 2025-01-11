import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../api/datafilm';
import requests from '../api/requests';
import { auth, onAuthStateChanged } from '../firebaseConfig';
import '../assets/style/ComingSoon.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCheck, faFilm } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

const categories = {
  'All Films': requests.fetchHorrorMovies,
  'Action': requests.fetchActionMovies,
  'Comedy': requests.fetchComedyMovies,
  'Horror': requests.fetchHorrorMovies,
  'Romance': requests.fetchRomanceMovies,
  'Documentary': requests.fetchDocumentaries,
};

const getGenres = (genre_ids) => genre_ids.join(', ');

const getRandomDuration = () => {
  const hours = Math.floor(Math.random() * 1.5) + 1;
  const minutes = Math.floor(Math.random() * 60);
  return `${hours}h ${minutes}m`;
};

const ComingSoon = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Films');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(categories[selectedCategory], { params: { page: 1 } });
        setMovies(response.data.results.slice(0, 20));
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });

    fetchMovies();
    return () => unsubscribe();
  }, [selectedCategory]);

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

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="movies">
      <div className="movies-header">
        <div className="movies-icon">
          <FontAwesomeIcon icon={faFilm} className="movies-icon-film" />
          <span className="text-white fw-bold">Movies</span>
        </div>
        <nav className="movies-nav">
          <button className="movies-nav-item">
            <FontAwesomeIcon icon={faYoutube} /> <span>Series</span>
          </button>
          <button className="movies-nav-item">
            <FontAwesomeIcon icon={faCheck} /><span>Original Series</span>
          </button>
          <FontAwesomeIcon icon={faSearch} />
          <form onSubmit={handleSearch} className="search-form">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search movies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="btn btn-danger">Search</button>
            </div>
          </form>
        </nav>
      </div>
      <hr className="movies-divider" />
      <div className="movies-categories">
        {Object.keys(categories).map((cat, index) => (
          <button 
            key={index} 
            className={`btn ${selectedCategory === cat ? 'btn-danger' : 'btn-dark'} me-2`}
            onClick={() => handleCategoryClick(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="movies-cards-container">
        <div className="movies-cards">
          {movies.map((movie) => (
            <div 
              key={movie.id} 
              className="movies-card" 
              onClick={() => handleCardClick(movie.id)}
            >
              <div className="movielist-poster">
                <img
                  className="movies-card-image"
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  alt={movie.title}
                />
                <div className="movie-overlay">
                  <button className="btn btn-danger">Play Now</button>
                </div>
              </div>
              <div className="movies-card-info text-white">
                <div className="movies-card-details text-white">
                  <span>{getRandomDuration()}</span>
                  <span className="divider">|</span>
                  <span>{movie.genre_ids ? getGenres(movie.genre_ids) : 'Genres not available'}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;