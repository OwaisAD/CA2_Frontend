import { useState, useEffect } from "react";
import facade from "../../facades/apiFacade";
import Unauthorized from "../Unauthorized";
import MovieInWatchlist from "./MovieInWatchlist";

const Watchlist = ({loggedIn, setLoggedIn, addedMovieToWatchlist, setAddedMovieToWatchlist, dataFromServer, setDataFromServer}) => {


  // NEED TO HAVE A STATE THAT CHECKS WETHER A USER ADDED A MOVIE TO WATCHLIST, IF YES, THEN USEEFFECT SHOULD RELY ON THAT VARIABLE

  useEffect(() => {
    // her skal jeg tjekke for rollen og køre den rigitge fetch metode alt efter rollen
    let isLoggedIn = facade.loggedIn()
    if(isLoggedIn) {
      setLoggedIn(true)
      facade.getUserMovies()
      .then((data) => {
          setDataFromServer(data)
          console.log(data)
      });
    }
  }, []);

  return (
    <div>
      <>
        {!loggedIn ? (
          <Unauthorized />
        ) : (
          <>
            <h1>Your Watchlist</h1>

            <div id="container-movies">
            {/*map across all movies*/}
            {dataFromServer?.map(data => {
              return <MovieInWatchlist movieData={data}/>
            })}
            </div>


          </>
        )}
      </>
    </div>
  );
};

export default Watchlist;
