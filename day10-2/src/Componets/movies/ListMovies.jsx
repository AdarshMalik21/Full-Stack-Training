import React from "react";

const ListMovies = ({ movies, onMovieClick }) => {
  console.log("ListMovies rendered");

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">All Movies</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {movies.map((movie) => (
          <div
            key={movie.id}
            onClick={() => onMovieClick(movie)}
            className="
              cursor-pointer
              border
              rounded-lg
              p-3
              hover:bg-gray-100
              transition
            "
          >
            <img
              src={movie.image}
              alt={movie.name}
              className="w-full h-40 object-cover rounded mb-2"
            />

            <h3 className="text-lg font-semibold">
              {movie.name}
            </h3>

            <p className="text-sm text-gray-500">
              Release: {movie.releaseDate}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(ListMovies);
