import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from '../api/datafilm.js';
import ReactPlayer from 'react-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import '../assets/style/DetailMovie.css';

// Utility function to get trailer URL
const getTrailerUrl = (movie) => {
  const trailer = movie.videos?.results.find(
    (video) => video.type === 'Trailer' && video.site === 'YouTube'
  );
  return trailer ? `https://www.youtube.com/watch?v=${trailer.key}` : '';
};

const DetailMovie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [recommendations, setRecommendations] = useState([]);
  const [showTrailer, setShowTrailer] = useState(false);

  // Combined useEffect for fetching movie details and recommendations
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [movieResponse, recommendResponse] = await Promise.all([
          axios.get(`/movie/${id}`, {
            params: {
              language: 'en-US',
              append_to_response: 'videos,credits',
            },
          }),
          axios.get(`/movie/${id}/recommendations`, {
            params: {
              language: 'en-US',
              page: 1,
            },
          }),
        ]);
        setMovie(movieResponse.data);
        setRecommendations(recommendResponse.data.results);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className="movie-detail-page">
      {/* Hero Section with Background */}
      <div className="hero-section position-relative">
        <div className="background-wrapper">
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            alt=""
            className="background-image"
          />
          <div className="overlay-gradient"></div>
        </div>

        {/* Main Content */}
        <div className="content-wrapper position-relative">
          <div className="container py-5">
            <div className="row">
              {/* Movie Poster */}
              <div className="col-md-4 mb-4">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                  className="img-fluid rounded-3 shadow movie-poster"
                />
              </div>

              {/* Movie Details */}
              <div className="col-md-8 text-white">
                <h1 className="movie-title display-4 fw-bold mb-4">{movie.title}</h1>

                {/* Meta Information */}
                <div className="meta-info d-flex align-items-center gap-4 mb-4">
                  <div className="score-wrapper d-flex align-items-center gap-3">
                    <div className="score-circle">
                      <span className="score-number">
                        {Math.round(movie.vote_average * 10)}
                      </span>
                      <span className="score-symbol">%</span>
                    </div>
                    <span className="score-text">User Score</span>
                  </div>

                  <div className="runtime">
                    <span>{movie.runtime} min</span>
                  </div>
                </div>

                {/* Genres */}
                <div className="genres-wrapper mb-4">
                  {movie.genres?.map((genre) => (
                    <span key={genre.id} className="genre-badge">
                      {genre.name}
                    </span>
                  ))}
                </div>

                {/* Overview */}
                <div className="overview-section mb-5">
                  <h3 className="section-title h5 mb-3">Overview</h3>
                  <p className="overview-text">{movie.overview}</p>
                </div>

                {/* Crew */}
                <div className="crew-section">
                  <div className="row">
                    {movie.credits?.crew
                      ?.filter((person) =>
                        ['Director', 'Screenplay', 'Story'].includes(person.job)
                      )
                      .slice(0, 4)
                      .map((person, index) => (
                        <div key={index} className="col-md-3 mb-3">
                          <h4 className="crew-name">{person.name}</h4>
                          <p className="crew-job">{person.job}</p>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Trailer Button */}
                <button
                  className="trailer-btn mt-4 d-flex align-items-center gap-2"
                  onClick={() => setShowTrailer(true)}
                >
                  <FontAwesomeIcon icon={faPlay} size="lg" className="text-white" />
                  <span>Play Trailer</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cast Section */}
      <div className="movie-cast-section py-5">
        <div className="container">
          <h2 className="section-title text-white mb-4">Best Role</h2>
          <div className="scroll-container">
            <ArrowLeft className="scroll-arrow left-arrow" />
            <div className="scroll-content">
              {movie.credits?.cast?.map((actor) => (
                <div key={actor.id} className="movie-cast-card">
                  <Link to={`/person/${actor.id}`}>
                    <div className="movie-cast-image-wrapper">
                      <img
                        src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`}
                        alt={actor.name}
                        className="movie-cast-image"
                        onError={(e) => {
                          e.target.src = '/placeholder-actor.png'; // Placeholder image if not found
                        }}
                      />
                    </div>
                  </Link>
                  <div className="movie-cast-info">
                    <h3 className="movie-cast-name">{actor.name}</h3>
                    <p className="movie-cast-character">{actor.character}</p>
                  </div>
                </div>
              ))}
            </div>
            <ArrowRight className="scroll-arrow right-arrow" />
          </div>
        </div>
      </div>

      {/* Recommendations Section */}
      <div className="movie-recommendations-section py-5">
        <div className="container">
          <h2 className="section-title text-white mb-4">Recomendations</h2>
          <div className="scroll-container">
            <ArrowLeft className="scroll-arrow left-arrow" />
            <div className="scroll-content">
              {recommendations.map((movie) => (
                <div key={movie.id} className="movie-recommendation-card">
                  <Link to={`/detailmovie/${movie.id}`}>
                    <div className="movie-recommendation-image-wrapper">
                      <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        className="movie-recommendation-image"
                      />
                      <div className="movie-recommendation-score">
                        {Math.round(movie.vote_average * 10)}%
                      </div>
                    </div>
                    <h3 className="movie-recommendation-title">{movie.title}</h3>
                  </Link>
                </div>
              ))}
            </div>
            <ArrowRight className="scroll-arrow right-arrow" />
          </div>
        </div>
      </div>

      {/* Trailer Modal */}
      {showTrailer && (
        <div className="trailer-modal">
          <div className="trailer-content">
            <button
              className="close-trailer"
              onClick={() => setShowTrailer(false)}
            >
              ×
            </button>
            <ReactPlayer
              url={getTrailerUrl(movie)}
              width="100%"
              height="100%"
              playing
              controls
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailMovie;