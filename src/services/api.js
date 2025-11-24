const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL="https://api.themoviedb.org/3"

// Async just means its gonna take a second before results
// adding that keyword, allows await
// so basically, you want components in your app to call these functions
// and then wait til the results come
export const getPopularMovies = async () => {
    // fetch is used to send network request
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
}

// for search, you now take in a parameter
export const searchMovies = async (query) => {
    // fetch is used to send network request
    // note the difference:
        // ?API_KEY
        // &query
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results;
}