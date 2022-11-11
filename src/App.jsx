import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Search from './components/Search'
import Error from './components/Error'
import Profile from './components/Profile'
import Login from './components/Login'

const App = () => {

    const [loggedIn, setLoggedIn] = useState(false)
    const [errorMsg, setErrorMsg] = useState("")
    const [createAccountClicked, setCreateAccountClicked] = useState(false);

    const initialState = () => {
      window.sessionStorage.getItem("movie") 
    }
    const [movieData, setMovieData] = useState(initialState);
  
  return (
    <>
      <Header setLoggedIn={setLoggedIn} loggedIn={loggedIn} setErrorMsg={setErrorMsg} setCreateAccountClicked={setCreateAccountClicked}/>
      
      <Routes>
        <Route path="/" element={<Home />}/> 
        <Route path="search" element={<Search movieData={movieData} setMovieData={setMovieData} />} />
        <Route path="profile" element={<Profile loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} />
        <Route path="login" element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} setErrorMsg={setErrorMsg} createAccountClicked={createAccountClicked} setCreateAccountClicked={setCreateAccountClicked}/>} />
        <Route path='error' element={<Error errorMsg={errorMsg}/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </>
  )
}

export default App
