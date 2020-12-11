import axios from "axios";

const TMDB = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

const getMoviesByTerm = (SearchTerm, setMovies) => {
  TMDB.get("/search/movie/", {
    params: {
      api_key: "209d31e2b7002857fcc0fdeff8329ae2",
      query: SearchTerm,
    },
  }).then((response) => {
    setMovies(response.data.results);
  });
};

export { getMoviesByTerm };
