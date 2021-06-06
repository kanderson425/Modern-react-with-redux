import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID A4A-LS_TCrFr5O1z6HEmkoIL3tCjTuTDlQNzzhXF9jE",
  },
});
