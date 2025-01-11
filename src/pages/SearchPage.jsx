import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import axios from '../api/datafilm';
import { auth, onAuthStateChanged } from '../firebaseConfig';
import '../assets/style/SearchPage.css';

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageLoading, setPageLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const moviesPerPage = 10;
  const navigate = useNavigate();
  
  // Get query and page from URL parameters
  const query = searchParams.get('query');
  const currentPage = parseInt(searchParams.get('page')) || 1;

  // Function to truncate overview text
  const truncateOverview = (text, maxLength = 150) => {
    if (!text) return 'No description available';
    return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
  };

  useEffect(() => {
    const searchMovies = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/search/movie?query=${encodeURIComponent(query)}&include_adult=false`);
        setSearchResults(response.data.results);
        setTotalResults(response.data.total_results);
      } catch (error) {
        console.error('Failed to search movies', error);
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      setSearchQuery(query);
      searchMovies();
    }
  }, [query]);

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

  // Add effect for page changes
  useEffect(() => {
    if (!loading) { // Only show page loading after initial search is complete
      setPageLoading(true);
      // Simulate loading delay for pagination
      const timer = setTimeout(() => {
        setPageLoading(false);
      }, 500); // 500ms delay for smooth transition

      return () => clearTimeout(timer);
    }
  }, [currentPage]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSearchParams({ query: searchQuery.trim(), page: '1' });
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

  // Get current movies for pagination
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = searchResults.slice(indexOfFirstMovie, indexOfLastMovie);

  // Calculate total pages
  const totalPages = Math.ceil(searchResults.length / moviesPerPage);

  // Generate page numbers array
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // Pagination change handler
  const paginate = (pageNumber) => {
    setSearchParams({ query, page: pageNumber.toString() });
    window.scrollTo(0, 0);
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner-border text-danger" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="loading-text">Searching for movies...</p>
      </div>
    );
  }

  return (
    <div className="search-page">
      <div className="search-header">
        <div className="container">
          <div className="search-header-content">
            <div className="search-title-section">
              <h2>Search Results</h2>
              <div className="search-info">
                <span className="query-text">"{query}"</span>
                <span className="results-count">{totalResults} movies found</span>
              </div>
            </div>
            <form onSubmit={handleSearch} className="search-form">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search for movies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="btn btn-danger">
                  <i className="fas fa-search">Search</i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="search-results-container">
        <div className="container">
          {pageLoading ? (
            <div className="loading-container">
              <div className="spinner-border text-danger" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="loading-text">Loading page {currentPage}...</p>
            </div>
          ) : currentMovies.length > 0 ? (
            <>
              <div className="movie-list">
                {currentMovies.map((movie) => (
                  <div 
                    key={movie.id} 
                    className="movie-list-item" 
                    onClick={() => handleCardClick(movie.id)}
                  >
                    <div className="movie-info-section">
                      <h3 className="movie-title">{movie.title}</h3>
                      <div className="movie-meta">
                        <span className="release-year">
                          {movie.release_date?.split('-')[0] || 'N/A'}
                        </span>
                        <span className="rating">
                          <span className="star">⭐</span>
                          {movie.vote_average?.toFixed(1) || 'N/A'}
                        </span>
                      </div>
                      <p className="movie-overview">{truncateOverview(movie.overview)}</p>
                      <button className="btn btn-danger btn-sm play-btn">
                        <i className="fas fa-play me-2"></i>Play Now
                      </button>
                    </div>
                    <div className="movie-poster-section">
                      {movie.poster_path ? (
                        <img
                          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                          alt={movie.title}
                          className="movie-poster"
                        />
                      ) : (
                        <div className="no-poster">
                          <span>No Poster</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Pagination */}
              <div className="pagination-container">
                <ul className="pagination">
                  <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <button
                      className="page-link"
                      onClick={() => paginate(currentPage - 1)}
                      disabled={currentPage === 1}
                    >
                      Previous
                    </button>
                  </li>
                  {pageNumbers.map(number => (
                    <li 
                      key={number} 
                      className={`page-item ${currentPage === number ? 'active' : ''}`}
                    >
                      <button
                        className="page-link"
                        onClick={() => paginate(number)}
                      >
                        {number}
                      </button>
                    </li>
                  ))}
                  <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                    <button
                      className="page-link"
                      onClick={() => paginate(currentPage + 1)}
                      disabled={currentPage === totalPages}
                    >
                      Next
                    </button>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <div className="no-results">
              <div className="no-results-content">
                <i className="fas fa-search fa-3x mb-3"></i>
                <h3>No movies found</h3>
                <p>We couldn't find any movies matching "{query}"</p>
                <button 
                  className="btn btn-danger mt-3"
                  onClick={() => navigate('/')}
                >
                  Back to Home
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;