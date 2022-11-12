import React, { useState, useEffect } from "react";
import LoginComponent from "./login/LoginComponent";
import CreateAccountComponent from "./login/CreateAccountComponent";

const Login = ({ setLoggedIn, setErrorMsg, createAccountClicked, setCreateAccountClicked, errorMsg}) => {

  return (
    <>
    {!createAccountClicked ? 
        (<><LoginComponent createAccountClicked={createAccountClicked} setCreateAccountClicked={setCreateAccountClicked} setLoggedIn={setLoggedIn} setErrorMsg={setErrorMsg}/></>) 
        : 
        (<><CreateAccountComponent createAccountClicked={createAccountClicked} setCreateAccountClicked={setCreateAccountClicked} setLoggedIn={setLoggedIn} setErrorMsg={setErrorMsg} errorMsg={errorMsg}/></>)}
    </>
  )
}

export default Login
