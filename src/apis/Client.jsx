import axios from "axios";

const Client = axios.create({
  baseURL: "https://the-lazy-media-api.vercel.app/",
});
export default Client;
