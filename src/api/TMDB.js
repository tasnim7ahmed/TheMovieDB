import axios from "axios";

const TMDB = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

const getMoviesByTerm = (SearchTerm, setMovies, page_number, setTotalPages) => {
  TMDB.get("/search/movie/", {
    params: {
      api_key: "209d31e2b7002857fcc0fdeff8329ae2",
      query: SearchTerm,
      page: page_number,
    },
  }).then((response) => {
    console.log(response.data);
    setMovies(response.data.results);
    setTotalPages(response.data.total_pages);
  });
};

export { getMoviesByTerm };
