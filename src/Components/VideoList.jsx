import React from "react";
import VideoItem from "./VideoItem";

class VideoList extends React.Component {
  render() {
    const renderedList = this.props.videos.map((video) => {
      return (
        <VideoItem
          video={video}
          key={video.id.videoId}
          selectVideo={this.props.selectedVideo}
        />
      );
    });

    return renderedList;
  }
}

export default VideoList;
