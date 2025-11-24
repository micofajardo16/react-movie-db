// import MovieCard from "../components/MovieCard"

// function Home() {
//     // display a movie card for each card in the movies array
//     const movies = [
//         {id: 1, title: "Spider-Man", release_date: "2002"},
//         {id: 2, title: "Spider-Man 2", release_date: "2004"},
//         {id: 3, title: "Spider-Man 3", release_date: "2007"},
//     ]

//     const handleSearch = (e) => {
//         // prevent reloading on search by adding e.preventDefault
//         e.preventDefault();
//         alert("searching");
//     }

//     return (
//         <>
//             <div className="home">
//                 <form onSubmit={handleSearch} className="search-form">
//                     <input type="text" placeholder="Search..." className="search-input"></input>
//                     <button type="submit" className="search-button">Search</button>
//                 </form>

//                 <div className="movies-grid">
//                     {/* what comes after the arrow function? */}
//                     {/* instance of component i want to return for every movie */}
//                     {/* using .map, make sure to always have a key */}
//                     {movies.map(movie => <MovieCard key={movie.id} movie={movie}></MovieCard>)}
//                 </div>
//             </div>
//         </>
//     )
// }

// // Next thing we want, is to store what the user typed via State
// // so that once the state searchQuery is updated
// // it will re-render the components based on said input


// import MovieCard from "../components/MovieCard"
// import { useState } from "react";

// function Home() {
//     // initially blank
//     // anytime a state searchQuery is updated, Home gets re-rendered
//     const [searchQuery, setSearchQuery] = useState("");

//     const movies = [
//         {id: 1, title: "Spider-Man", release_date: "2002"},
//         {id: 2, title: "Spider-Man 2", release_date: "2004"},
//         {id: 3, title: "Spider-Man 3", release_date: "2007"},
//         {id: 4, title: "The Amazing Spider-Man", release_date: "2012"},
//     ]

//     // AS A BONUS, I can do something like this to make it render real-time
//     // and then use filtered movies in the map instead
//     const filteredMovies = movies.filter(movie =>
//         movie.title.toLowerCase().includes(searchQuery.toLowerCase())
//     );

//     const handleSearch = (e) => {
//         alert(searchQuery);
//     }

//     return (
//         <>
//             <div className="home">
//                 <form onSubmit={handleSearch} className="search-form">
//                     <input type="text" 
//                         placeholder="Search..." 
//                         className="search-input" 
//                         value={searchQuery} 
//                         // Anytime a change is done to the input box
//                         // setSearchQuery is called
//                         // and Home is updated
//                         onChange={(e) => setSearchQuery(e.target.value)}>
//                     </input>
//                     <button type="submit" className="search-button">Search</button>
//                 </form>

//                 <div className="movies-grid">
//                     {/* BONUS REAL-TIME RENDER: */}
//                     {/* {filteredMovies.map(movie => <MovieCard key={movie.id} movie={movie}></MovieCard>)} */}
//                     {movies.map(movie => <MovieCard key={movie.id} movie={movie}></MovieCard>)}
//                 </div>
//             </div>
//         </>
//     )
// }


// But in the tutorial, we don't sue real-time rendering
// We use the search button

import MovieCard from "../components/MovieCard"
import { useState } from "react";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        {id: 1, title: "Spider-Man", release_date: "2002"},
        {id: 2, title: "Spider-Man 2", release_date: "2004"},
        {id: 3, title: "Spider-Man 3", release_date: "2007"},
        {id: 4, title: "The Amazing Spider-Man", release_date: "2012"},
    ]


    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
    }

    return (
        <>
            <div className="home">
                <form onSubmit={handleSearch} className="search-form">
                    <input type="text" 
                        placeholder="Search..." 
                        className="search-input" 
                        value={searchQuery} 
                        onChange={(e) => setSearchQuery(e.target.value)}>
                    </input>
                    <button type="submit" className="search-button">Search</button>
                </form>

                <div className="movies-grid">
                    {/* Technically, this was actually real-time, it just feels weird to use conditional rendering */}
                    {/* I would have preferred to use the logic above where you make a filter after every state change */}
                    {movies.map(movie => (
                        movie.title.toLowerCase().startsWith(searchQuery) &&
                        <MovieCard key={movie.id} movie={movie}></MovieCard>
                    ))}
                </div>
            </div>
        </>
    )
}


export default Home