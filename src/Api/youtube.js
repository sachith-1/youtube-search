import axios from "axios";

//replace process.env.REACT_APP_YOUTUBE_API_KEY with your youtube search api key
const KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

export default axios.create({
  params: {
    part: "snippet",
    key: KEY,
    maxResults: 5,
    type: "video",
  },
  baseURL: "https://www.googleapis.com/youtube/v3",
});
