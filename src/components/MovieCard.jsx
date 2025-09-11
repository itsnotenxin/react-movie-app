import React from "react";

const MovieCard = ({
  movie: { title, poster_path, vote_average, release_date, original_language },
}) => {
  return (
    <div className="movie-card text-white">
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : "/no-movie.png"
        }
        alt={title}
      />
      <div className="mt-4">
        <div className="text-black font-bold">{title}</div>
        <div className="content">
          <div className="rating">
            <img src="star.svg" alt="star icon" />
            <p>{vote_average ? vote_average.toFixed(1) : "N/A"}</p>
          </div>

          <span> • </span>
          <p className="lang">{original_language}</p>

          <span> • </span>
          <p className="year">
            {release_date ? release_date.split("-")[0] : "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
