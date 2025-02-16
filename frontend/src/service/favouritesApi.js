const BASE_URL = import.meta.env.VITE_API_URL;

export const getFavourites = async () => {
  const response = await fetch(`${BASE_URL}/favourites`);
  return response.json();
};

export const addFavourite = async (movie) => {
  const response = await fetch(`${BASE_URL}/favourites`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(movie),
  });
  return response.json();
};

export const removeFavourite = async (movieId) => {
  await fetch(`${BASE_URL}/favourites/${movieId}`, {
    method: "DELETE",
  });
};
