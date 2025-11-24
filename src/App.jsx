import './App.css'
import MovieCard from './components/MovieCard'
import Home from './pages/Home'

function App() {
  // conditional rendering example:
  // showing only n movies
  // const movieNumber = 1;

  return ( 
    <>
      {/* BASE CODE: */}
      {/* <MovieCard movie={{title: "Spiderman", release_date: "1998", url:  ""}}/>
      <MovieCard movie={{title: "Spiderman 2", release_date: "2003", url:  ""}}/> */}
      
      {/* CONDITIONAL RENDERING 1 */}
      {/* {movieNumber === 1 ? (
          <MovieCard movie={{title: "Spiderman", release_date: "1998", url:  ""}}/>
      ) : (
      <MovieCard movie={{ title: "Spiderman 2", release_date: "2003", url:  ""}}/>
      )} */}

      {/* CONDITIONAL RENDERING 2 */}
      {/* no if else, if left side is true, go display */}
      {/* {movieNumber === 1 && <MovieCard movie={{title: "Spiderman", release_date: "1998", url:  ""}}/>} */}

      {/* Added Pages */}
      <Home></Home>
    </>
  )
}

export default App
