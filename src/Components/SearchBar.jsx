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
            className="col-8"
            onSubmit={(e) => {
              e.preventDefault();
              this.onDataSubmit();
            }}
          >
            <div className="row ml-md-5">
              <div className="col-9" style={{ paddingRight: 1 }}>
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search..."
                  className="form-control"
                  style={{ borderRadius: ".9rem 0 0 .9rem" }}
                  value={this.state.searchValue}
                  onChange={(e) => {
                    this.setState({ searchValue: e.target.value }, () => {
                      // console.log(this.state.searchValue);
                    });
                  }}
                />
              </div>
              <div className="col-3" style={{ paddingLeft: 0 }}>
                <button
                  type="button"
                  className="btn btn-danger"
                  style={{
                    width: 100,
                    borderRadius: "0 .9rem .9rem 0",
                  }}
                  onClick={this.onDataSubmit}
                >
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default SearchBar;
