const API_KEY = "3126754c63eb2385bb74a3f33659d5f4";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&lwith_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&lwith_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&lwith_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&lwith_genres=99`,
}

export default requests;