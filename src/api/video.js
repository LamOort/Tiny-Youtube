import axios from "axios";

const API_KEY = "AIzaSyBLNGoST3n1_iRWsElk-g_xrQHJoEaQisM";

export default {
  getVideosFromAPI(searchTerm) {
    return axios.get("https://www.googleapis.com/youtube/v3/search", {
      params: {
        key: API_KEY,
        type: "video",
        part: "snippet",
        q: searchTerm,
      },
    });
  },
};
