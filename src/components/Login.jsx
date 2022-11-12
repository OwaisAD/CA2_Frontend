import React, { useState, useEffect } from "react";
import LoginComponent from "./login/LoginComponent";
import CreateAccountComponent from "./login/CreateAccountComponent";
import Image from "../images/cinewatch2.png"

const Login = ({ setLoggedIn, setErrorMsg, createAccountClicked, setCreateAccountClicked, errorMsg}) => {

  return (
    <>
    <img src={Image} alt="cinewatch logo" style={{maxWidth: "120px", margin:"30px auto 20px", display:"block"}}/>
    {!createAccountClicked ? 
        (<><LoginComponent createAccountClicked={createAccountClicked} setCreateAccountClicked={setCreateAccountClicked} setLoggedIn={setLoggedIn} setErrorMsg={setErrorMsg}/></>) 
        : 
        (<><CreateAccountComponent createAccountClicked={createAccountClicked} setCreateAccountClicked={setCreateAccountClicked} setLoggedIn={setLoggedIn} setErrorMsg={setErrorMsg} errorMsg={errorMsg}/></>)}
    </>
  )
}

export default Login
