import React from "react";
import Login from "./login";
import Apartments from "./apartments";
import Apartment from "./apartment";
import Axios from "axios";
import Background from "../../components/Background";

class Main extends React.Component {
  state: {
    loggedIn: boolean;
    menu: "apartments" | "apartment";
  } = {
    loggedIn: false,
    menu: "apartments",
  };

  componentDidMount(): void {
    Axios.get(process.env.REACT_APP_SERVER_URL + "login", {
      withCredentials: true,
    }).then((res) => {
      if (res.status === 200) {
        this.setState({ loggedIn: true });
      }
    });
  }

  render() {
    return (
      <div className="admin-panel">
        <Background />
        {this.state.loggedIn ? (
          this.state.menu === "apartments" ? (
            <Apartments />
          ) : (
            <Apartment />
          )
        ) : (
          <Login
            loggedIn={(loggedIn: boolean) => {
              this.setState({ loggedIn });
            }}
          />
        )}
      </div>
    );
  }
}

export default Main;
