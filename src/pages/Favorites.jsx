import "../css/Favorites.css"
import { useMovieContext } from "../context/MovieContext"
import MovieCard from "../components/MovieCard"

function Favorites() {
    const { favorites } = useMovieContext()
    // return (
    //     <>
    //         <div className="favorites-empty">
    //             <h2>No Results</h2>
    //             <p>Clicking the heart button on a movie poster will add it here</p>
    //         </div>

    //         {/* Render favorite if they exist */}
    //         {/* Of course, import MovieCard as well, since we want to show  */}
    //         {/* if (favorites) {
    //             <div className="movies-grid">
    //                 {favorites.map(movie => (
    //                     <MovieCard key={movie.id} movie={movie}></MovieCard>
    //                 ))}
    //             </div>
    //         } */}

    //         {/* Woops, that is not allowed, there is no logic here in html */}
    //     </>
    // )

    // if (favorites.length > 0) {
    //     return (
    //         <>
    //             <div className="favorites">
    //                 <h2>Favorites</h2>
    //                 <div className="movies-grid">
    //                     {favorites.map(movie => (
    //                         <MovieCard key={movie.id} movie={movie}></MovieCard>
    //                     ))}
    //                 </div>
    //             </div>
    //         </>
    //     )
    // } else {
    //     return (
    //         <>
                // <div className="favorites-empty">
                //     <h2>No Results</h2>
                //     <p>Clicking the heart button on a movie poster will add it here</p>
                // </div>
    //         </>
    //     )
    // }

    // or if you dont want a double return, use a ternary expresion like in Home

    return (
        <>
            <div className="favorites">
                <h2>Favorites</h2>

                {favorites.length > 0 ? (
                    <div className="movies-grid">
                        {favorites.map(movie => (
                            <MovieCard key={movie.id} movie={movie}></MovieCard>
                        ))}
                    </div>
                ) : (
                    <div className="favorites-empty">
                        <h2>No Results</h2>
                        <p>Clicking the heart button on a movie poster will add it here</p>
                    </div>
                )}
            </div>
        </>
    )
}

export default Favorites