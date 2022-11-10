import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";

const CreateAccountComponent = ({createAccountClicked, setCreateAccountClicked}) => {
  const init = { username: "", password: "", passwordRepeated: "", age: "" };
  const [loginCredentials, setLoginCredentials] = useState(init);

  const navigate = useNavigate()

  const performLogin = (evt) => {
      evt.preventDefault();
      login(loginCredentials.username, loginCredentials.password);
    };
  
    const createUser = async (user, pass, age) => {
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
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;

  return (
    <div>
      <div className="create-user-component-container">
      <div className='title'>
        <h2>Create account</h2>
        <p>Please fill out the following fields</p>
      </div>
      <form onChange={onChange}>
        <input type="text" placeholder="Enter username" id="username" required />{' '}
        <input type="password" placeholder="Enter password" id="password" required />
        <input type="password" placeholder="Enter password again" id="password" required />
        <label htmlFor="date-born">Please enter birthdate </label>
        <input type="date" id="date-born"/>
        <button className="glow-on-hover" onClick={performLogin}>Create</button>
      </form>

      <button className="glow-on-hover" onClick={() => setCreateAccountClicked(createAccountClicked => !createAccountClicked)}>Already have an account?</button>
    </div>
    </div>
  )
}

export default CreateAccountComponent
