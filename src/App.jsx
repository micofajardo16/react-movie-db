import './css/App.css'
import MovieCard from './components/MovieCard'
import NavBar from './components/NavBar'
import Favorites from './pages/Favorites'
import Home from './pages/Home'

// Page Routing imports:
import { Routes, Route } from 'react-router-dom'

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
      {/* <Home></Home> */}

      {/* Added Page Routing */}
      {/* <main className='main-content'>
        <Routes> */}
          {/* Inside these routes, we map route to component that we want to display on screen */}
          {/* <Route path='/' element={<Home></Home>}></Route>
          <Route path='/favorites' element={<Favorites></Favorites>}></Route>
        </Routes>
      </main> */}

      {/* Added Nav-Bar */}
      <div>
        <NavBar></NavBar>
        <main className='main-content'>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/favorites' element={<Favorites></Favorites>}></Route>
          </Routes>
        </main>
      </div>
    </>
  )
}

export default App
