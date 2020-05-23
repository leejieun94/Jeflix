import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "7942bdc5538c3c5c9cc06987ff67a800",
    language: "en-US",
  },
});

api.get("tv/popular");

export default api;
