import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import facade from '../../facades/apiFacade';

const LoginComponent = ({setLoggedIn, setErrorMsg, createAccountClicked, setCreateAccountClicked}) => {
    const init = { username: "", password: "" };
    const [loginCredentials, setLoginCredentials] = useState(init);

    const navigate = useNavigate()

    const performLogin = (evt) => {
        evt.preventDefault();
        login(loginCredentials.username, loginCredentials.password);
      };
    
      const login = async (user, pass) => {
        await facade.login(user, pass)
            .then(res => {
              setLoggedIn(true)
              navigate("/search")
            })
            .catch(err => {
              err.fullError.then(e => setErrorMsg(e.message))
              navigate("/error")
            })
    }
    
      const onChange = (evt) => {
        setLoginCredentials({
          ...loginCredentials,
          [evt.target.id]: evt.target.value,
        });
      };

  return (
    <div className="login-component-container">
      <div className='title'>
        <h2>Login</h2>
        <p>Please login to continue</p>
      </div>
      <form onChange={onChange}>
        <input type="text" placeholder="Enter username" id="username" required />{' '}
        <input type="password" placeholder="Enter password" id="password" required />
        
        <button className="glow-on-hover" onClick={performLogin}>Login</button>
      </form>
      <p style={{padding:"5px 0px"}}>or</p>
      <button className="glow-on-hover" onClick={() => setCreateAccountClicked(createAccountClicked => !createAccountClicked)}>Create Account</button>
    </div>
  )
}

export default LoginComponent
