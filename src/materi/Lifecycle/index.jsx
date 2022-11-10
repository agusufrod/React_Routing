import React, { Component } from 'react';

class Lifecycle extends Component {
  state = {
    inputKeyword: '',
    berita: [],
    search: '',
  };

  resapi = (input) => {
    fetch('https://newsapi.org/v2/everything?apiKey=4bc675224b5144e0bcb1f83216534b65&q=' + input)
      .then((response) => response.json())
      .then((response) => this.setState({ berita: response.articles }));
  };

  handleChange = (e) => {
    this.setState({
      inputKeyword: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({ search: this.state.inputKeyword });
  };

  // fetchNews = (url) => {
  //     fetch(url, {
  //       headers: {
  //         "X-Api-Key": "dfb0aebf0cb64552b1a1da8efe1d6002",
  //       },
  //     })
  //       .then((response) => response.json())
  //       .then((data) => this.setState({ dataNews: data["articles"] }));
  //   };

  render() {
    return (
      <div>
        {' '}
        <div className="container">
          <div className="row mt-8">
            <div className="col">
              <h1>berita</h1>
            </div>
          </div>

          <div className="row">
            <div className="col-8">
              <div className="input-group mb-3">
                <form onSubmit={this.onSubmit} style={{ width: '80%' }}>
                  <input type="text" className="form-control input-keyword" placeholder="Search Berita..." onChange={this.handleChange} />
                  <div className="input-group-append">
                    <button className="btn btn-primary search-button" type="submit" style={{ marginLeft: '600px', marginTop: '-68px' }}>
                      Search
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="row berita-container">
            {this.state.berita
              ? this.state.berita.map((item, index) => {
                  return (
                    <div class="col-md-4 my-3">
                      <div class="card">
                        <img src={item.urlToImage} alt={item.title} class="card-img-top" />
                        <div class="card-body">
                          <h5 class="card-title">{item.author}</h5>
                          <p class="card-text">{item.title}</p>
                        </div>
                      </div>
                    </div>
                  );
                })
              : []}
          </div>
        </div>
        {/* UNTUK MODAL BOX */}
        {/* Modal  */}
        {/* <div className="modal fade" id="beritaDetailModal" tabindex="-1" aria-labelledby="beritaDetailModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="beritaDetailModalLabel">
                  Modal title
                </h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body"></div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    );
  }
  componentDidMount() {
    this.resapi(this.state.search);
  }
  componentDidUpdate(prevProps, prevState) {
    // Penggunaan umum (Jangan lupa untuk membandingkan _props_):
    if (this.state.search !== prevState.search) {
      this.resapi(this.state.search);
    }
  }
}

export default Lifecycle;
