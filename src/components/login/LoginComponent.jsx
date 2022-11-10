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
              navigate("/profile")
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
    <div className="login-container">
      <form onChange={onChange}>
        <input type="text" placeholder="Username" id="username" required />{' '}
        <input type="password" placeholder="Password" id="password" required />
        
        <button className="glow-on-hover" onClick={performLogin}>Login</button>
        <button className="glow-on-hover" onClick={() => setCreateAccountClicked(createAccountClicked => !createAccountClicked)}>Create Account</button>

      </form>
    </div>
  )
}

export default LoginComponent
