import { useState } from "react"
import { useRef } from "react"
import facade from "../facades/apiFacade"
import Movie from "./moviesComponents/Movie"

function Search(props) {
    const inputRef = useRef()
    const [isLoading, setIsLoading] = useState(false)
    const [movieData, setMovieData] = useState(undefined)

    const handleMovieSearch = (event) => {
      event.preventDefault()
      setIsLoading(true)
      facade.searchMovie(inputRef.current.value)
        .then(res => {
          console.log(res)
          setMovieData(res)
        })
        .catch(err => {
          //err.fullError.then(e => setErrorMsg(e.message))
          //navigate("/error")
        })
      setIsLoading(false)
    }

  return (
    <>
    <div>
      <h3>Search for a movie</h3>
      <form>
            <input id='search' type="text" placeholder='Search' ref={inputRef} required/>
            <button type="submit" onClick={
               handleMovieSearch
            }>Search</button>
      </form>
    </div>
    
    {isLoading ? <h1>Loading movie...</h1> : (movieData !== undefined && <Movie movieData={movieData}/>)}
    </>
  )
}

export default Search
