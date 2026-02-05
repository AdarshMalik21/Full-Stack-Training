import { useCallback, useState,useMemo } from "react";
import moviesData from "./utils/Data";
import Grid from "@mui/material/Grid";
import ListMovies from './ListMovies';
import Movieinfo from "./Movieinfo";
import RecentRelease from './RecentRelease'

const Movies = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  

    const handleMovieClick = useCallback((movie) =>{
        setSelectedMovie(movie);
    },[])

    const handleBack = useCallback(() =>{
        setSelectedMovie(null)
    },[])
    
    const latestMovies = useMemo(() =>{
        return [...moviesData].sort((a,b) => new Date(b.releaseDate) - new Date(a.releaseDate)).slice(0,5);
    },[])
    
  return (
    <div>
      <img
        src="https://i.pinimg.com/1200x/8f/5c/37/8f5c379700771fafb13773f31c4b5c37.jpg"
        alt=""
        className="h-100 w-full"
      />
      {!selectedMovie ? (
        <Grid container spacing={2}>
          
          <Grid size={8}>
            
            <ListMovies movies={moviesData} onMovieClick={handleMovieClick} />
            
          </Grid>
          
          <Grid size={4}>
            
            <RecentRelease
              movies={latestMovies}
              onMovieClick={setSelectedMovie}
            />
            
          </Grid>
          
        </Grid>
      ) : (
        <Movieinfo movie={selectedMovie} onBack={handleBack} />
      )}
    </div>
  );
};

export default Movies;
