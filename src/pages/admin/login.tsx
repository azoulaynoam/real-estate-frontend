import React from "react";
import "./styles/login.css";

class Main extends React.Component {
  render() {
    return (
      <div className="login">
        <div className="login-panel">
            <div className="login-panel__header">
                <h1>Admin Panel</h1>
                <input type="text" placeholder="Username" /><br/>
                <input type="password" placeholder="Password" /><br/>
                <button type="submit">Login</button>
            </div>
        </div>
      </div>
    );
  }
}

export default Main;
