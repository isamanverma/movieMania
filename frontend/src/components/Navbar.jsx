import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-black/90 backdrop-blur-md border-b border-zinc-800/50 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-2xl font-bold text-white hover:text-red-500 transition-colors font-['Poppins']">
          🍿 MovieMania
        </Link>
        <Link to="/fav" className="px-4 py-2 text-zinc-400 hover:text-white transition-colors font-['Inter']">
          Favourites
        </Link>
      </div>
    </nav>
  );
}
