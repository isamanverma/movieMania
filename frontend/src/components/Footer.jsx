import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black/40 backdrop-blur-sm border-t border-zinc-800/50 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-400 text-sm">
            © 2024 MovieMania. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://www.themoviedb.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-red-500 text-sm transition-colors"
            >
              Powered by TMDB
            </a>
            <span className="text-zinc-600">|</span>
            <a
              href="https://github.com/isamanverma"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-red-500 text-sm transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
