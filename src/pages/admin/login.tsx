import React from "react";
import Axios from "axios";
import "./styles/login.css";

class Main extends React.Component<{ loggedIn: (loggedIn: boolean) => void }> {
  state = {
    username: "",
    password: "",
  };

  loginState: (loggedIn: boolean) => void;

  constructor(props: { loggedIn: (loggedIn: boolean) => void }) {
    super(props);
    this.loginState = props.loggedIn;
  }

  login = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    Axios.post(
      process.env.REACT_APP_SERVER_URL + "login",
      {
        username: this.state.username,
        password: this.state.password,
      },
      { withCredentials: true }
    )
      .then((res) => {
        if (res.status === 200) this.loginState(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  fillUsernameField = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({ username: e.currentTarget.value });
  };

  fillPasswordField = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({ password: e.currentTarget.value });
  };

  render() {
    return (
      <div className="login">
        <div className="login-panel">
          <h1>Admin Panel</h1>
          <div className="login-form">
            <form>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  onChange={this.fillUsernameField}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  onChange={this.fillPasswordField}
                />
              </div>
              <br />
              <button className="login-btn" onClick={this.login}>
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
