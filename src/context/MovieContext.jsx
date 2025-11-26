// A state-managerfor Movie

import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)

// export const MovieProvider = () => {}

// Providers provide state to any components wrapped inside it
// Allows them to hook into specific functions/state to have access
// So we want to wrap Provider around App so any components in App can access states in Provider


// Children is a keyword in React, it means the components wrapped inside it
// No need for children="" because its a saved keyword
export const MovieProvider = ({children}) => {
    // here is the globalstate for favorites
    const [favorites, setFavorites] = useState([])

    // We want to use local storage
    useEffect(() => {
        // first thing to do, is check if favorite movies exist
        const storedFavorites = localStorage.getItem("favorites")

        // if storedFavorites exist, basically turn the json into a list of 'movie' objects
        if (storedFavorites) setFavorites(JSON.parse(storedFavorites))
    }, [])

    // this use effect triggers everytime favorites changes
    useEffect(() => {
        // This is basically the opposite of the fetching of data at the top
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    // 3 methods, add, remove, and chekc if favorite
    const addFavorite = (movie) => {
        // react needs to know that the state was changed
        // So we need to retrieve it using prev
        // prev = previous value
        setFavorites(prev => [...prev, movie])
        // prev becomes prev with an appended movie
    }

    const removeFavorite = (movieId) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieId))
        // basically, setFavorites again, prev being the current state of favorites
        // filter that list of favorites with a condition that all of it does not equal the movieId i passed
        // and since its setFavorites, it is going to update our 'favorites'
    }

    const isFavorite = (movieId) => {
        // checks all movies in favorites and check if that certain movie.id is found
        // returns true if found, false if not
        return favorites.some(movie => movie.id == movieId)
    }

    // value is a keyword
    // list down what you want the provider to provide to the children
    const value = {
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite
    }

    return (
        <>
            {/* <MovieContext.Provider> */}
            <MovieContext.Provider value={value}>
                {children}
            </MovieContext.Provider>
        </>
    )
}