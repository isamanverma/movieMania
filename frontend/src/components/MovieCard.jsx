import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useMovieContext } from "../contexts/MovieContext";

export default function MovieCard({ movie }) {
  const { isFavourite, addFavourite, removeFavourite } = useMovieContext();
  const favourite = isFavourite(movie.movieId || movie.id);

  const handleFavourite = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    const movieId = movie.movieId || movie.id;
    if (favourite) {
      await removeFavourite(movieId);
    } else {
      const movieData = {
        movieId: movieId,
        title: movie.title,
        poster_path: movie.poster_path,
        backdrop_path: movie.backdrop_path,
        release_date: movie.release_date,
        overview: movie.overview,
        vote_average: movie.vote_average,
        vote_count: movie.vote_count,
        popularity: movie.popularity,
        original_language: movie.original_language,
        status: movie.status
      };
      await addFavourite(movieData);
    }
  };

  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://placehold.co/300x450";

  return (
    <Link to={`/movie/${movie.movieId || movie.id}`}>
      <div className="group bg-black/40 backdrop-blur-md rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-zinc-800/30 transition-all duration-300 border border-zinc-800/50">
        <div className="relative">
          <img
            src={imageUrl}
            alt={movie.title + " poster"}
            className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
          />
          <div className="absolute top-2 right-2">
            <button
              onClick={handleFavourite}
              className="p-3 bg-black/20 backdrop-blur-lg rounded-full hover:bg-black/40 transition-all duration-300 shadow-lg"
            >
              <Heart
                fill={favourite ? "#ef4444" : "transparent"}
                stroke={favourite ? "transparent" : "white"}
                className="w-6 h-6 hover:scale-110 transition-transform"
              />
            </button>
          </div>
        </div>
        <div className="p-6 backdrop-blur-sm bg-black/20">
          <h3 className="text-xl font-medium mb-2 font-['Poppins'] tracking-wide text-zinc-100">
            {movie.title}
          </h3>
          <p className="text-zinc-400 font-['Inter'] text-sm">
            {movie.release_date?.split("-")[0]}
          </p>
        </div>
      </div>
    </Link>
  );
}
