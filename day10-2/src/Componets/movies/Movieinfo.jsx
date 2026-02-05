import React from "react";

const Movieinfo = React.memo(({ movie, onBack }) => {
  console.log("Movieinfo Rendered");

  if (!movie) {
    return null;
  }

  return (
    <div className="p-4">
      <button
        type="button"
        onClick={onBack}
        className="mb-4 rounded border px-3 py-1 hover:bg-gray-100 transition"
      >
        Back
      </button>

      <div className="rounded-lg border p-4">
        <img
          src={movie.image}
          alt={movie.name}
          className="w-full h-60 object-cover rounded mb-4"
        />

        <h2 className="text-2xl font-bold mb-2">{movie.name}</h2>

        <p className="text-sm text-gray-500 mb-3">
          Release: {movie.releaseDate}
        </p>

        <p className="text-base text-gray-700">{movie.description}</p>
      </div>
    </div>
  );
});

export default Movieinfo;
