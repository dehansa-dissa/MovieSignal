import React from 'react'

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
  return (
    <div className="movie-card">
        <img src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : '/no-movie.png'} alt={`${title} Poster`} />

        <h3 className='mt-4'>{title}</h3>

        <div className='content'>
          {movieDescription && (
            <p className='movie-description'>{movieDescription}</p>
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