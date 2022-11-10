import { useState } from "react";
import { useNavigate } from "react-router-dom";
import facade from "../../facades/apiFacade";

const CreateAccountComponent = ({
  createAccountClicked,
  setCreateAccountClicked,
  setErrorMsg,
}) => {
  const init = { username: "", password: "", passwordRepeated: "", age: "" };
  const [loginCredentials, setLoginCredentials] = useState(init);

  const navigate = useNavigate();

  const performCreateUser = (evt) => {
    evt.preventDefault();
    createUser(
      loginCredentials.username,
      loginCredentials.password,
      loginCredentials.age
    );
  };

  const createUser = async (user, pass, age) => {
    await facade
      .createUser(user, pass, age)
      .then((res) => {
        // SET SOME KIND OF SUCCESS MESSAGE
        navigate("/login");
      })
      .catch((err) => {
        err.fullError.then((e) => setErrorMsg(e.message));
        navigate("/error");
      });
  };

  const getAge = (dateString) => {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const onChange = (evt) => {
    if (evt.target.id === "date-born") {
      let age = getAge(evt.target.value);
      console.log(age);
      setLoginCredentials({
        ...loginCredentials,
        [evt.target.id]: age,
      });
    } else {
      setLoginCredentials({
        ...loginCredentials,
        [evt.target.id]: evt.target.value,
      });
    }
  };
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  return (
    <div>
      <div className="create-user-component-container">
        <div className="title">
          <h2>Create account</h2>
          <p>Please fill out the following fields</p>
        </div>
        <form onChange={onChange}>
          <input
            type="text"
            placeholder="Enter username"
            id="username"
            required
          />{" "}
          <input
            type="password"
            placeholder="Enter password"
            id="password"
            required
          />
          <input
            type="password"
            placeholder="Enter password again"
            id="passwordRepeated"
            required
          />
          <label htmlFor="date-born">Please enter birthdate </label>
          <input type="date" id="date-born" />
          <button className="glow-on-hover" onClick={performCreateUser}>
            Create
          </button>
        </form>

        <button
          className="glow-on-hover"
          onClick={() =>
            setCreateAccountClicked(
              (createAccountClicked) => !createAccountClicked
            )
          }
        >
          Already have an account?
        </button>
      </div>
    </div>
  );
};

export default CreateAccountComponent;
