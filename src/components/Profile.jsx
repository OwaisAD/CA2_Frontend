import { useState, useEffect } from "react";
import facade from "../facades/apiFacade";
import Unauthorized from "./Unauthorized";

const Profile = ({loggedIn, setLoggedIn, addedMovieToWatchlist}) => {
  const [dataFromServer, setDataFromServer] = useState("Loading...");
  // NEED TO HAVE A STATE THAT CHECKS WETHER A USER ADDED A MOVIE TO WATCHLIST, IF YES, THEN USEEFFECT SHOULD RELY ON THAT VARIABLE
  
  useEffect(() => {
    // her skal jeg tjekke for rollen og køre den rigitge fetch metode alt efter rollen
    let isLoggedIn = facade.loggedIn()
    if(isLoggedIn) {
      setLoggedIn(true)
      facade.fetchData().then((data) => {
        setDataFromServer(data)
        console.log(dataFromServer)
      });
    }
  }, [addedMovieToWatchlist]);

  return (
    <div>
        <>
        {!loggedIn ? <Unauthorized/> : 
        <><h1>Profile</h1>
          <h3>Data Received from server:</h3>
          <h3>Welcome {dataFromServer.username} (id: {dataFromServer.id}) / age: {dataFromServer.age}, with role(s): {dataFromServer.roles}</h3>
          <br />
          {dataFromServer.movies?.map(movie => {
            return <li key={movie.id}>Movie with id {movie.id}, name: {movie.title} from {movie.year}</li>
          })}
          {console.log(dataFromServer)}
          </>
        }
        </>
    </div>
  );
};

export default Profile;
