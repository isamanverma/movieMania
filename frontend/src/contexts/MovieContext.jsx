import { createContext, useState, useEffect, useContext } from "react";
import { getFavourites, addFavourite as addFavouriteApi, removeFavourite as removeFavouriteApi } from "../service/favouritesApi";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFavourites = async () => {
      try {
        const data = await getFavourites();
        setFavourites(data);
      } catch (error) {
        console.error('Failed to load favourites:', error);
      } finally {
        setLoading(false);
      }
    };
    loadFavourites();
  }, []);

  const addFavourite = async (movie) => {
    try {
      const savedMovie = await addFavouriteApi(movie);
      setFavourites(prev => [...prev, savedMovie]);
    } catch (error) {
      console.error('Failed to add favourite:', error);
    }
  };

  const removeFavourite = async (movieId) => {
    try {
      await removeFavouriteApi(movieId);
      setFavourites(prev => prev.filter(movie => movie.movieId !== movieId));
    } catch (error) {
      console.error('Failed to remove favourite:', error);
    }
  };

  const isFavourite = (movieId) => {
    return favourites.some(movie => movie.movieId === movieId);
  };

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-red-500"></div>
    </div>;
  }

  return (
    <MovieContext.Provider value={{ 
      favourites, 
      addFavourite, 
      removeFavourite, 
      isFavourite 
    }}>
      {children}
    </MovieContext.Provider>
  );
};
