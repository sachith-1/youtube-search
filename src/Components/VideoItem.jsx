import React from "react";

class VideoItem extends React.Component {
  selectThisVideo = (e) => {
    this.props.selectVideo(this.props.video);
  };

  render() {
    return (
      <div
        onClick={this.selectThisVideo}
        className="card my-2"
        style={{
          cursor: "pointer",
          backgroundColor: "#363638",
          color: "#E7DFdd",
        }}
      >
        <div className="card-body row">
          <div className="col-4">
            <img
              className="img-fluid"
              src={this.props.video.snippet.thumbnails.default.url}
              alt={this.props.video.snippet.title}
            />
          </div>
          <div className="col-8 ">
            <h6
              className="card-title mb-1 pb-0"
              style={{ fontWeight: 450, fontSize: 18 }}
            >
              {this.props.video.snippet.title}
            </h6>
            <p className="lead">{this.props.video.snippet.channelTitle}</p>
          </div>
        </div>
      </div>
    );
  }
}
export default VideoItem;
