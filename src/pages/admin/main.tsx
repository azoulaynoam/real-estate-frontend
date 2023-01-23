import React from "react";
import Login from "./login";
import Apartments from "./apartments";
import Axios from "axios";

class Main extends React.Component {
  state: {
    loggedIn: boolean;
  } = {
    loggedIn: false,
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
    return this.state.loggedIn ? (
      <Apartments />
    ) : (
      <Login
        loggedIn={(loggedIn: boolean) => {
          this.setState({ loggedIn });
        }}
      />
    );
  }
}

export default Main;
