import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from '../api/datafilm.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons'; 
import '../assets/style/DetailPerson.css';

const DetailPerson = () => {
  const { id } = useParams();
  const [person, setPerson] = useState({
    name: '',
    profile_path: '',
    biography: '',
    birthday: '',
    place_of_birth: '',
    gender: '',
    known_for_department: '',
    popularity: 0,
    credits: { cast: [] }
  });
  const [showFullBio, setShowFullBio] = useState(false);

  useEffect(() => {
    const fetchPersonData = async () => {
      try {
        const response = await axios.get(`/person/${id}`, {
          params: {
            append_to_response: 'credits,external_ids'
          }
        });
        setPerson(response.data);
      } catch (error) {
        console.error('Error fetching person data:', error);
      }
    };

    fetchPersonData();
  }, [id]);

  const calculateAge = (birthday) => {
    const ageDifMs = Date.now() - new Date(birthday).getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  return (
    <div className="person-detail">
      <div className="container py-5">
        {/* Profile Header */}
        <div className="profile-header text-center mb-5">
          <div className="profile-image-container">
            <img
              src={`https://image.tmdb.org/t/p/w300${person.profile_path}`}
              alt={person.name}
              className="profile-image rounded-circle"
              onError={(e) => {
                e.target.src = '/placeholder-person.png';
              }}
            />
          </div>
          <h1 className="profile-name mt-4 mb-3">{person.name}</h1>
          
          {/* Social Media Links */}
          <div className="social-links mb-4">
            {[
              { icon: faFacebookF, link: 'https://facebook.com' }, 
              { icon: faTwitter, link: 'https://twitter.com' }, 
              { icon: faYoutube, link: 'https://youtube.com' }, 
              { icon: faLink, link: 'https://example.com' } // Menggunakan faLink yang diimpor dari solid
            ].map((social, index) => (
              <a 
                key={index} 
                href={social.link} 
                className="social-link me-3" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label={`Link to ${social.icon.iconName}`}
              >
                <FontAwesomeIcon icon={social.icon} />
              </a>
            ))}
          </div>
        </div>

        {/* Personal Information */}
        <div className="row mb-5">
          <div className="col-12 justify-content-between">
            <div className="info-card p-4 bg-dark rounded shadow">
              <h2 className="section-title fw-bold text-white">About Actor</h2>
              <div className="info-item">
                <h3 className="col-md-6">Role</h3>
                <p className="col-md-6 info-value">{person.known_for_department || '-'}</p>
              </div>
              <div className="info-item">
                <h3 className="col-md-6">Reputation amount</h3>
                <p className="col-md-6 info-value">{Math.round(person.popularity) || '0'}</p>
              </div>
              <div className="info-item">
                <h3 className="col-md-6">Gender</h3>
                <p className="col-md-6 info-value">{person.gender === 1 ? 'Wanita' : 'Pria'}</p>
              </div>
              <div className="info-item">
                <h3 className="col-md-6">Date of birth</h3>
                <p className="info-value col-md-6">
                  {person.birthday && (
                    `${new Date(person.birthday).toLocaleDateString('id-ID', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })} (${calculateAge(person.birthday)} tahun)`
                  )}
                </p>
              </div>
              <div className="info-item">
                <h3 className="col-md-6">Location of birth</h3>
                <p className="col-md-6 info-value">{person.place_of_birth || '-'}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Biography */}
        <div className="row mb-5">
          <div className="col-12">
            <div className="info-card p-4 bg-dark rounded shadow">
              <h2 className="section-title fw-bold">Biography</h2>
              <div className="biography-content">
                <p className="text-white">
                  {showFullBio ? person.biography : `${person.biography?.substring(0, 300)}...`}
                  {person.biography?.length > 300 && (
                    <button 
                      className="read-more-btn btn btn-link"
                      onClick={() => setShowFullBio(!showFullBio)}
                    >
                      {showFullBio ? 'Read less' : 'Read More ❯'}
                    </button>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Filmography */}
        <div className="row mb-5">
          <div className="col-12">
            <h2 className="section-title fw-bold">Role Films</h2>
            <div className="filmography-container position-relative">
              <ArrowLeft className="arrow-icon left-arrow" />
              <div className="filmography-scroll">
                {person.credits?.cast?.map(movie => (
                  <div className="movie-card" key={movie.id}>
                    <Link to={`/detailmovie/${movie.id}`}> {/* Ubah ke rute detailmovie */}
                      <div className="movie-poster-wrapper">
                        <img
                          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                          alt={movie.title}
                          className="movie-poster"
                          onError={(e) => {
                            e.target.src = '/placeholder-movie.png';
                          }}
                        />
                      </div>
                      <h3 className="movie-title">{movie.title}</h3>
                    </Link>
                  </div>
                ))}
              </div>
              <ArrowRight className="arrow-icon right-arrow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPerson;