import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Star, Calendar, Globe2 } from "lucide-react";
import { getMovieDetails } from "../service/api";
import Footer from "../components/Footer";

export default function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        // Convert potential string ID to number for API call
        const movieId = parseInt(id);
        const data = await getMovieDetails(movieId);
        data.movieId = data.id;
        setMovie(data);
        document.title = data.title;
      } catch (error) {
        console.error("Failed to fetch movie details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-red-500"></div>
      </div>
    );
  }

  if (!movie) return null;

  return (
    <div className="relative min-h-screen">
      {/* Hero Section with Backdrop */}
      <div className="h-[70vh] relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative h-full container mx-auto px-4 flex items-center">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-6xl font-bold font-['Poppins'] leading-tight">
              {movie.title}
            </h1>
            <div className="flex items-center gap-6 text-lg">
              <div className="flex items-center gap-2">
                <Star fill="currentColor" className="text-yellow-500" />
                <span className="font-semibold">
                  {movie.vote_average.toFixed(1)}
                </span>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
              <span>{new Date(movie.release_date).getFullYear()}</span>
              <div className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
              <span className="uppercase">{movie.original_language}</span>
            </div>
            <p className="text-lg text-zinc-300 leading-relaxed max-w-xl">
              {movie.overview}
            </p>
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className="bg-black">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Poster */}
            <div className="md:w-1/3 lg:w-1/4 -mt-32 relative z-10">
              <div className="sticky top-8">
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt={`${movie.title} poster`}
                  className="rounded-2xl shadow-2xl hover:shadow-red-500/10 transition-shadow duration-300"
                />
              </div>
            </div>

            {/* Movie Details */}
            <div className="md:w-2/3 lg:w-3/4 space-y-12">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    label: "Rating",
                    value: `${movie.vote_average.toFixed(1)}/10`,
                    subtext: `${movie.vote_count.toLocaleString()} votes`,
                  },
                  {
                    label: "Popularity",
                    value: movie.popularity.toFixed(1),
                    subtext: "Score",
                  },
                  {
                    label: "Status",
                    value: movie.status || "Released",
                    subtext: movie.release_date,
                  },
                  {
                    label: "Language",
                    value: movie.original_language.toUpperCase(),
                    subtext: "Original",
                  },
                ].map((stat) => (
                  <div key={stat.label} className="space-y-1">
                    <p className="text-zinc-500 text-sm">{stat.label}</p>
                    <p className="text-2xl font-semibold">{stat.value}</p>
                    <p className="text-zinc-400 text-sm">{stat.subtext}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
