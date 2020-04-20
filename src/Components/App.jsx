import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./SearchBar";
import youtube from "./../Api/youtube";
import Unsplash from "./../Api/Unsplash";
import VideoList from "./VideoList";
import VideoPlayer from "./VideoPlayer";

class App extends React.Component {
  state = {
    searchData: "",
    videos: [],
    selectedVideo: [],
    marginTop: "20%",
    backImageTerm: "black",
    backImage: "",
  };

  componentDidMount() {
    this.backImage();
  }

  backImage = async () => {
    let randNum = Math.floor(Math.random() * 10);
    const backgroundImage = await Unsplash.get("/search/photos", {
      params: { query: this.state.backImageTerm, page: randNum },
    });
    this.setState(
      { backImage: backgroundImage.data.results[randNum].urls.full },
      () => {
        document.getElementById("mainHTML").style.background =
          "url('" + this.state.backImage + "') no-repeat center center fixed";
      }
    );
  };

  selectedVideo = (video) => {
    this.setState({ selectedVideo: video }, () => {
      //console.log(this.state.selectedVideo);
    });
  };

  onSearchSubmited = (searchData) => {
    this.setState({ searchData }, () => {
      this.searchVideo();
    });
  };

  searchVideo = async () => {
    const responce = await youtube.get("/search", {
      params: {
        q: this.state.searchData,
      },
    });
    //console.log(responce.data.items);
    this.setState({ videos: responce.data.items }, () => {
      this.setState({ selectedVideo: this.state.videos[0], marginTop: "0%" });
    });
  };

  render() {
    return (
      <div>
        <section id="search" style={{ marginTop: this.state.marginTop }}>
          <SearchBar onSearchSubmit={this.onSearchSubmited} />
        </section>
        <section id="video" className="mt-4">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-md-8" id="videoPlayer">
                {this.state.selectedVideo === undefined ||
                this.state.selectedVideo.length === 0 ? (
                  ""
                ) : (
                  <VideoPlayer video={this.state.selectedVideo} />
                )}
              </div>
              <div className="col-12 col-md-4" id="videoList">
                <VideoList
                  videos={this.state.videos}
                  selectedVideo={this.selectedVideo}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default App;
