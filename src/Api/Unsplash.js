import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID deFt_UmTVdqCgCt5itNRBkrxOOHUH0wLU3KfNiLZWKY",
  },
});
