import "./login.scss";
import {Link, useNavigate} from "react-router-dom";
import {useContext} from "react";
import {UserContext} from "../../data/userContext.jsx";

function Login() {
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);
    const handleSubmit = (event) => {
        const user = {
            username: "John Doe",
            isAgent: false
        };
        if (event.target[0].value == 'admin') {
            user.username = 'admin'
            user.isAgent = true;
        }

        event.preventDefault();
        sessionStorage.setItem('user', JSON.stringify(user));
        setUser(user);
        navigate('/');
    }

    return (
      <div className="login">
          <div className="formContainer">
              <form onSubmit={handleSubmit}>
                  <h1>Welcome back</h1>
                  <input name="username" type="text" placeholder="Username"/>
                  <input name="password" type="password" placeholder="Password"/>
                  <button id="button" type="submit">Login</button>
                  <Link to="/register">{"Don't"} you have an account?</Link>
              </form>
          </div>
          <div className="imgContainer">
              <img src="/bg.png" alt=""/>
          </div>
          <div id="trick"></div>
      </div>
  );
}

export default Login;
