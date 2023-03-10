import axios, { AxiosError } from "axios";
import server_url from "../../config";

const authProvider = {
  login: ({ username, password }: { username: string; password: string }) => {
    return axios
      .post(
        server_url + "/login",
        { username, password },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem("authenticated", "true");
          return response;
        } else {
          throw new Error(response.statusText);
        }
      });
  },
  logout: () => {
    const request = new Request(server_url + "/logout", {
      method: "GET",
      credentials: "include",
    });
    return fetch(request)
      .then((response) => {
        if (response.status === 200) {
          localStorage.removeItem("authenticated");
          Promise.resolve(true);
        } else {
          Promise.reject("User wasn'nt logged in");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  checkAuth: () =>
    localStorage.getItem("authenticated")
      ? Promise.resolve()
      : Promise.reject(),
  checkError: (error: AxiosError) => {
    const status = error.status;
    if (status === 401 || status === 403) {
      localStorage.removeItem("authenticated");
      return Promise.reject();
    }
    return Promise.resolve();
  },
  getPermissions: () => {
    return Promise.resolve();
  },
};

export default authProvider;
