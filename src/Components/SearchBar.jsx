import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    searchValue: "",
  };

  onDataSubmit = () => {
    this.props.onSearchSubmit(this.state.searchValue);
  };

  render() {
    return (
      <div className=" row mt-5 mx-auto">
        <div className="col-12 d-flex justify-content-center">
          <form
            className="container"
            onSubmit={(e) => {
              e.preventDefault();
              this.onDataSubmit();
            }}
          >
            <div className="row">
              <div className="input-group mb-3">
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Enter youtube url or Search videos..."
                  className="form-control"
                  style={{ borderRadius: ".25rem 0 0 .25rem" }}
                  value={this.state.searchValue}
                  onChange={(e) => {
                    this.setState({ searchValue: e.target.value }, () => {
                      // console.log(this.state.searchValue);
                    });
                  }}
                />
                <div className="input-group-append">
                  <button
                    type="button"
                    className="btn"
                    style={{
                      width: 100,
                      borderRadius: "0 .25rem .25rem 0",
                      backgroundColor: "#463c46b0",
                      color: "white",
                    }}
                    onClick={this.onDataSubmit}
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default SearchBar;
