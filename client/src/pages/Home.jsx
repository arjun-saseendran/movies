import { MovieCard } from "../components/MovieCard";

export const Home = () => {
  const movies = [
    { id: 1, title: "John Wick", releseDate: "2020" },
    { id: 2, title: "Terminator", releseDate: "1999" },
    { id: 3, title: "The Marix", releseDate: "1998" },
  ];

  return (
    <div className="home">
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};
