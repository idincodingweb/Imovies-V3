import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../api/datafilm'; // Import axios instance
import requests from '../api/requests'; // Import requests
import Profile from '../assets/images/cuyprof.jpg';
import '../assets/style/News.css'; // Import CSS file

const News = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Hook untuk navigasi

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(requests.fetchTrending); // Mengambil data dari API
        setMovie(response.data.results[0]); // Menyimpan data film pertama dari hasil API
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchMovie();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data: {error.message}</p>;
  if (!movie) return <p>No movie data available.</p>;

  const handleButtonClick = () => {
    navigate(`/detailmovie/${movie.id}`);
  };

  return (
    <div className="container p-4">
      <div className="card">
        <div className="row g-0">
          <div className="col-md-8">
            <div className="card-body position-relative">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <span className="text-uppercase small mb-2 d-block">{movie.genre_ids.join(', ')}</span>
                  <h2 className="card-title text-danger fw-bold h3 mb-3">{movie.title || movie.name}</h2>
                  <p className="small text-muted mb-3">
                    Tahun Rilis: {new Date(movie.release_date || movie.first_air_date).getFullYear()} Rating IMDb: {movie.vote_average}
                  </p>
                </div>
                <div className="text-end">
                  <span className="badge bg-danger">TOP TRENDING</span>
                </div>
              </div>

              <div className="mb-4">
                <h6 className="text-uppercase small mb-2">Movies Description</h6>
                <p className="card-text">
                  {movie.overview}
                </p>
              </div>

              <div className="fixed-buttons">
                <button className="btn btn-danger" onClick={handleButtonClick}>WATCH NOW</button>
              </div>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="position-relative h-100">
              <img 
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                className="img-fluid rounded-end h-100 w-200 object-fit-cover" 
                alt="Movie Thumbnail"
              />
            </div>
          </div>
        </div>

        <div className="card-footer border-top border-secondary mt-3">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center gap-2">
              <img 
                src={Profile} 
                className="rounded-circle profile-img"
                alt="Created by"
              />
              <span className="small">CREATED BY IDIN CODE</span>
            </div>
            <div className="partner">
            <div className="d-flex align-items-center gap-3">
              <img src="https://raw.githubusercontent.com/idincodingweb/packgambar/refs/heads/main/netflic/_.sulqime._-20241230-0001.jpg" className="profile-img rounded-circle" alt="Sulqime j" />
              <img src="https://raw.githubusercontent.com/idincodingweb/packgambar/refs/heads/main/netflic/fiqqbtt-20241230-0002.jpg" className="profile-img rounded-circle" alt="Fika I" />
            </div>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;