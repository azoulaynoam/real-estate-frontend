const server_url =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://api.realestate-in-israel.com";

export default server_url;
