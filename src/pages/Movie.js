import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

function Movie() {
  const movieId = useParams();
  // console.log(movieId);
  // console.log(movieId.id)
  const [movie, setMovie] = useState({"id": "1",
  "title": "Doctor Strange",
  "time": 115,
  "genres": [
  "Action",
  "Adventure",
  "Fantasy"
  ]});
  useEffect(() => {
    fetch(`http://localhost:4000/movies/${movieId.id}`)
    .then(r => r.json())
    .then(movieInDb => {setMovie(movieInDb)})
    .catch(error => console.error(error))
  }, [movieId])

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        {/* Movie info here! */}
        <h1>{movie.title}</h1>
        <p>{movie.time} minutes</p>
        {/* {console.log(movie.genres)} */}
        {/* <span>{movie.genres}</span> */}
        {/* {movie.genres.forEach(genre => {
          return (
            <span key={genre}>{genre}</span>
          )
        })} */}
        {movie.genres.map(genre => {
          return (
            <span key={genre}>{genre}</span>
          )
        })}
      </main>
    </>
  );
};

export default Movie;
