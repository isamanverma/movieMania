import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import Navbar from "./components/Navbar";
import Movie from "./pages/Movie";
import { MovieProvider } from "./contexts/MovieContext";

export default function App() {
  return (
    <MovieProvider>
      <div className="select-none">
        <Navbar />
        <main className="min-h-screen bg-black text-white p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fav" element={<Favourites />} />
            <Route path="/movie/:id" element={<Movie />} />
          </Routes>
        </main>
      </div>
    </MovieProvider>
  );
}
