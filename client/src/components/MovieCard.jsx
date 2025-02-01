export const MovieCard = ({ movie }) => {
  const onFavoriteClick = () => {
    alert("cliked");
  };

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.url} alt={movie.title} />
      </div>
      <div className="movie-overlay">
        <button className="favorite-btn" onClick={onFavoriteClick}>
          🤍
        </button>
      </div>

      <div className="movie-info">
        <h3>{movie.title}</h3>
      </div>
    </div>
  );
};
