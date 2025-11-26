import "../css/MovieCard.css"
import { useMovieContext } from "../context/MovieContext";

function MovieCard({movie}) {
    // // Adding useMovieContext to remember what is favoited throughout the whole app
    const { isFavorite, addFavorite, removeFavorite } = useMovieContext()

    // // now we can check if a movie is favorited, we'd like to change our appearance based on this boolean
    // // making the button red to differentiate favorited and non-favorited movies
    const favorite = isFavorite(movie.id)

    function onLike(e) {
        // alert("clicked!");
        e.preventDefault()

        if (favorite) removeFavorite(movie.id)
        else addFavorite(movie)
    }
    return (
        <>
            <div className="movie-card">
                <div className="movie-poster">
                    {/* <img src={movie.url} alt={movie.title}></img> */}

                    {/* adding an API for the images */}
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}></img>
                    <div className="movie-overlay">
                        {/* <button className="favorite-btn" onClick={onLike}> */}
                        {/* Adding conditional classes */}
                        <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onLike}>
                            ♡
                        </button>
                    </div>
                </div>
                <div className="movie-info">
                    <h3>{movie.title}</h3>
                    <p>{movie.release_date?.split("-")[0]}</p>
                </div>
            </div>
        </>
    )
}

export default MovieCard