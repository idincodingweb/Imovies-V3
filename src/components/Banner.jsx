import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import axios from '../api/datafilm';
import requests from '../api/requests';
import '../assets/style/Banner.css';

const truncate = (str, n) => str?.length > n ? str.substr(0, n - 1) + '...' : str;

const formatDate = (date) => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayName = days[date.getDay()];
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');

  return `${dayName}, ${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
};

const Banner = () => {
  const [movie, setMovie] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const response = await axios.get(requests.fetchRomanceMovies);
        const movies = response.data.results;
        const randomMovie = movies[Math.floor(Math.random() * movies.length)];
        setMovie(randomMovie);
      } catch (error) {
        console.error('Failed to fetch movies', error);
      }
    };

    fetchPopularMovies();

    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleWatchTrailer = () => {
    if (movie) {
      navigate(`/detailmovie/${movie.id}`);
    }
  };

  if (!movie) return null;

  return (
    <div className="banner-container" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})` }}>
      <div className="banner-content-wrapper">
        <div className="banner-row align-items-center">
          <div className="banner-col-md-6">
            <h1 className="banner-title">{movie.title || movie.name || movie.original_name}</h1>
            <div className="banner-movie-details">
              <span>{movie.release_date?.substring(0, 4)}</span>
            </div>
            <p className="banner-tagline">{truncate(movie.overview, 150)}</p>
            <div className="banner-action-buttons">
              <button className="banner-btn-danger me-3">Book Now</button>
              <button className="banner-btn-outline-light" onClick={handleWatchTrailer}>
                <FontAwesomeIcon icon={faPlay} size="lg" className="text-white" /> Watch Trailer
              </button>
            </div>
            <div className="banner-pagination mt-4">
              <span className="banner-active text-white">{formatDate(currentTime)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;