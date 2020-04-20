import React from "react";

class VideoPlayer extends React.Component {
  render() {
    return (
      <div
        className="card "
        style={{ backgroundColor: "#363638", color: "#E7DFdd" }}
      >
        <div className="card-body">
          <div className="embed-responsive embed-responsive-16by9 my-2">
            <iframe
              title={this.props.video.snippet.title}
              className="embed-responsive-item"
              src={`https://www.youtube.com/embed/${this.props.video.id.videoId}`}
              allowFullScreen
            ></iframe>
          </div>
          <div className="row ">
            <div className="col d-flex justify-content-center mb-2">
              <iframe
                id="videodownload"
                title="download"
                style={{
                  width: "230px",
                  height: "60px",
                  border: "0",
                  overflow: "hidden",
                }}
                scrolling="no"
                src={`https://loader.to/api/button/?url=https://www.youtube.com/watch?v=${this.props.video.id.videoId}&f=mp3`}
              ></iframe>
            </div>
            <div className="col d-flex justify-content-center mb-2">
              <iframe
                id="videodownload"
                title="download"
                style={{
                  width: "230px",
                  height: "60px",
                  border: "0",
                  overflow: "hidden",
                }}
                scrolling="no"
                src={`https://loader.to/api/button/?url=https://www.youtube.com/watch?v=${this.props.video.id.videoId}&f=720`}
              ></iframe>
            </div>
            <div className="col d-flex justify-content-center mb-2">
              <iframe
                id="videodownload"
                title="download"
                style={{
                  width: "230px",
                  height: "60px",
                  border: "0",
                  overflow: "hidden",
                }}
                scrolling="no"
                src={`https://loader.to/api/button/?url=https://www.youtube.com/watch?v=${this.props.video.id.videoId}&f=1080`}
              ></iframe>
            </div>
          </div>
          <h5 className="card-title">{this.props.video.snippet.title}</h5>
          <p className="card-text">{this.props.video.snippet.description}</p>
        </div>
      </div>
    );
  }
}
export default VideoPlayer;
