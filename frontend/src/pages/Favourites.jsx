import notFoundGif from "../assets/not found.gif";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

export default function Favourites() {
  const { favourites } = useMovieContext();

  if (favourites.length > 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favourites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <img
          src={notFoundGif}
          alt="Empty favourites"
          className="w-96 mx-auto object-cover"
        />
        <div className="space-y-4">
          <h1 className="text-3xl font-bold font-['Poppins'] text-zinc-200">
            Your Favourites List is Empty
          </h1>
          <p className="text-lg text-zinc-400 font-['Inter'] max-w-md mx-auto">
            Start exploring movies and click the heart icon to add them to
            your favourites collection
          </p>
        </div>
        <button
          onClick={() => (window.location.href = "/")}
          className="inline-flex items-center px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl transition-colors duration-200"
        >
          Explore Movies
        </button>
      </div>
    </div>
  );
}
