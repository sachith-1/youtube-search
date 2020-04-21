import axios from "axios";

const KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
//AIzaSyB0l7kzOymJQK6DQTtOdzcMeIeLE6DnCQU
//AIzaSyA49_HHawV6oM8c1uiDzJbxB5Qjvars21A -my key
//keys
export default axios.create({
  params: {
    part: "snippet",
    key: KEY,
    maxResults: 5,
    type: "video",
  },
  baseURL: "https://www.googleapis.com/youtube/v3",
});
