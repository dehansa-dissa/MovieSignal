import React, { useState } from 'react'

const MovieCard = ({movie}) => {
  // Use TMDB's 'overview' as description fallback
  const {
    title,
    vote_average,
    poster_path,
    release_date,
    original_language,
    description,
    overview
  } = movie;
  const movieDescription = description || overview;
  const [expanded, setExpanded] = useState(false);
  const MAX_LENGTH = 180;
  const isLong = movieDescription && movieDescription.length > MAX_LENGTH;
  const displayDescription = !isLong || expanded
    ? movieDescription
    : movieDescription.slice(0, MAX_LENGTH) + '...';

  return (
    <div className="movie-card">
      <img src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : '/no-movie.png'} alt={`${title} Poster`} />

      <h3 className='mt-4'>{title}</h3>

      <div className='content'>
        {movieDescription && (
          <div className={`movie-description${isLong && !expanded ? ' collapsed' : ''}`}>
            {displayDescription}
            {isLong && (
              <button className="read-more-btn" onClick={() => setExpanded(e => !e)}>
                {expanded ? 'Show less' : 'Read more'}
              </button>
            )}
          </div>
        )}
        <div className='rating'>
          <img src='/star.svg' alt='star icon' />
          <p>{vote_average ? vote_average.toFixed(1) : 'N/A'}</p>
          <span>•</span>
          <p className='lang'>{original_language}</p>
          <span>•</span>
          <p>{release_date ? release_date.split('-')[0] : 'N/A'}</p>
        </div>
      </div>
    </div>
  )
}

export default MovieCard