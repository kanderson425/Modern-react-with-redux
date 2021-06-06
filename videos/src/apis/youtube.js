import axios from "axios";

const KEY = "AIzaSyDhwDNMVMad6zPefW7zgPoPc91_VYQdv3s";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
