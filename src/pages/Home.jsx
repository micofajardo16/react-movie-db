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

// import MovieCard from "../components/MovieCard"
// import { useState } from "react";
// import "../css/Home.css"


// function Home() {
//     const [searchQuery, setSearchQuery] = useState("");

//     const movies = [
//         {id: 1, title: "Spider-Man", release_date: "2002"},
//         {id: 2, title: "Spider-Man 2", release_date: "2004"},
//         {id: 3, title: "Spider-Man 3", release_date: "2007"},
//         {id: 4, title: "The Amazing Spider-Man", release_date: "2012"},
//     ]


//     const handleSearch = (e) => {
//         e.preventDefault()
//         alert(searchQuery)
//     }

//     return (
//         <>
//             <div className="home">
//                 <form onSubmit={handleSearch} className="search-form">
//                     <input type="text" 
//                         placeholder="Search..." 
//                         className="search-input" 
//                         value={searchQuery} 
//                         onChange={(e) => setSearchQuery(e.target.value)}>
//                     </input>
//                     <button type="submit" className="search-button">Search</button>
//                 </form>

//                 <div className="movies-grid">
//                     {/* Technically, this was actually real-time, it just feels weird to use conditional rendering */}
//                     {/* I would have preferred to use the logic above where you make a filter after every state change */}
//                     {movies.map(movie => (
//                         movie.title.toLowerCase().startsWith(searchQuery) &&
//                         <MovieCard key={movie.id} movie={movie}></MovieCard>
//                     ))}
//                 </div>
//             </div>
//         </>
//     )
// }

// Now, we want to take movies from an API
// import MovieCard from "../components/MovieCard"
// import { useEffect, useState } from "react";
// import "../css/Home.css"
// import { searchMovies, getPopularMovies } from "../services/api";


// function Home() {
//     const [searchQuery, setSearchQuery] = useState("");
//     const [movies, setMovies] = useState([])
//     const [err, setError] = useState(null)
//     const [loading, setLoading] = useState(true)

//     // useEffect allows to add affects to functions
//     // defines when they should run, example
//     // getting movies, should only run the first time
//     // we dont want it do the API call everytime Home is regenerated

//     // a function that is called when a certain array changes
//     // this is called the "dependency array"
//     // if it has changed since last render, useEffect will run
//     // useEffect(() => {}, [])

//     useEffect(() => {
//         const loadPopularMovies = async () => {
//             try {
//                 const popularMovies = await getPopularMovies()
//                 setMovies(popularMovies)
//             } catch (e) {
//                 console.log(e);
//                 setError("Failed to load movies...")
//             } finally {
//                 setLoading(false)
//             }
//         }

//         loadPopularMovies()
//     }, [])


//     const handleSearch = (e) => {
//         e.preventDefault()
//         alert(searchQuery)
//     }

//     return (
//         <>
//             <div className="home">
//                 <form onSubmit={handleSearch} className="search-form">
//                     <input type="text" 
//                         placeholder="Search..." 
//                         className="search-input" 
//                         value={searchQuery} 
//                         onChange={(e) => setSearchQuery(e.target.value)}>
//                     </input>
//                     <button type="submit" className="search-button">Search</button>
//                 </form>

//                     {/* for now, the filter function is removed to make way for search */}
//                     {/* {movies.map(movie => (
//                         movie.title.toLowerCase().startsWith(searchQuery) &&
//                         <MovieCard key={movie.id} movie={movie}></MovieCard>
//                     ))} */}
//                     {/* adding a conditional function, so that while loading, the user is displayed a prompt */}
//                     {/* as well as n error in case theres an error */}
//                     {error && <div className="error-message">{error}</div>}
                    
//                     {loading ? 
//                         (<div className="loading">Loading...</div>) 
//                         : 
//                         (<div className="movies-grid">
//                                 {movies.map(movie => (
//                                     <MovieCard key={movie.id} movie={movie}></MovieCard>
//                                 ))}
//                         </div>)
//                     }
//             </div>
//         </>
//     )
// }


// Next step is to get the search to work
// So far, filter has been removed for search purposes, so that it doesnt recall the API all the time

import MovieCard from "../components/MovieCard"
import { useEffect, useState } from "react";
import "../css/Home.css"
import { searchMovies, getPopularMovies } from "../services/api";


function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            } catch (e) {
                console.log(e);
                setError("Failed to load movies...")
            } finally {
                setLoading(false)
            }
        }

        loadPopularMovies()
    }, [])


    const handleSearch = async (e) => {
        e.preventDefault()

        // check first if searchQuery is empty
        if (!searchQuery.trim()) return

        // check first is something is already loading
        // this stops us from searching when searching is already in process
        if (loading) return
        // indicate loading at start
        setLoading(true)

        try {
            const searchResults = await searchMovies(searchQuery)
            setMovies(searchResults)
        } catch(e) {
            console.log(e);
            setError("Failed to search movies...")
        } finally {
            setLoading(false)
        }
        
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
                    {error && <div className="error-message">Error: {error}</div>}
                    {loading ? 
                        (<div className="loading">Loading...</div>) 
                        : 
                        (<div className="movies-grid">
                                {movies.map(movie => (
                                    <MovieCard key={movie.id} movie={movie}></MovieCard>
                                ))}
                        </div>)
                    }
            </div>
        </>
    )
}



export default Home