import React from "react";

const RecentRelease = ({ movies, onMovieClick }) => {
  console.log("RecentRelease rendered");

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Recent Releases</h2>

      <div className="space-y-4">
        {movies.map((movie) => (
          <div
            key={movie.id}
            onClick={() => onMovieClick(movie)}
            className="
              cursor-pointer
              flex
              gap-3
              border
              rounded-lg
              p-2
              hover:bg-gray-100
              transition
            "
          >
            <img
              src={movie.image}
              alt={movie.name}
              className="w-20 h-28 object-cover rounded"
            />

            <div>
              <h3 className="font-semibold">
                {movie.name}
              </h3>

              <p className="text-sm text-gray-500">
                {movie.releaseDate}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(RecentRelease);
