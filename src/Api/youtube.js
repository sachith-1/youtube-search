import axios from "axios";

const KEY = "AIzaSyA49_HHawV6oM8c1uiDzJbxB5Qjvars21A";

export default axios.create({
  params: {
    part: "snippet",
    key: KEY,
    maxResults: 5,
    type: "video",
  },
  baseURL: "https://www.googleapis.com/youtube/v3",
});
