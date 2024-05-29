import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/movies")
    .then(r => r.json())
    .then(moviesInDb => setMovies(moviesInDb))
  }, []);
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        {/* Info goes here! */}
        <h1>Home Page</h1>
        {movies.map(movie => {
          return (
            <MovieCard key={movie.id} title={movie.title} id={movie.id}/>
          )
        })}
      </main>
    </>
  );
};

export default Home;
