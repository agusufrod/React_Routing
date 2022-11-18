import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Panda from '../assets/panda.png';

export default class Bootstrap extends React.Component {
  render() {
    return (
      <div>
        {/* <nav className="navbar navbar-expand-lg navbar-dark bg-success shadow-lg fixed-top">
          <div className="container">
            <a className="navbar-brand" href="#">
              Herman Agus Syahputra
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#projects">
                    Project
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">
                    Contact Me
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav> */}

        {/* <!-- Jumbotron --> */}

        <section className="jumbotron text-center">
          <img src={Panda} alt="" className="rounded-circle" />
          <h1 className="display-4">Herman Agus Syahputra</h1>
          <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#FFFFFF"
              fill-opacity="1"
              d="M0,288L48,293.3C96,299,192,309,288,282.7C384,256,480,192,576,192C672,192,768,256,864,272C960,288,1056,256,1152,218.7C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </section>

        {/* <!-- About --> */}

        <section id="about">
          <div className="container">
            <div className="row text-center mb-3">
              <div className="col">
                <h2>About Me</h2>
              </div>
            </div>
            <div className="row fs-6 text-center">
              <div className="col-md-4">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ipsa quasi molestias ratione illum ipsum incidunt natus. Dolore beatae laudantium consequatur impedit odio, rerum earum dolor aliquam neque natus magnam.</p>
              </div>
              <div className="col-md-4">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto error neque incidunt culpa obcaecati deleniti cupiditate nostrum dolores enim quisquam, delectus eaque commodi nam quaerat provident alias quibusdam sed quae.
                </p>
              </div>
              <div className="col-md-4">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima voluptatum vel facilis ad dolore quasi excepturi soluta sunt amet illo modi illum quam, fugiat aut molestiae labore! Consequatur, architecto fugit?</p>
              </div>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#0099ff"
              fill-opacity="1"
              d="M0,96L48,128C96,160,192,224,288,256C384,288,480,288,576,277.3C672,267,768,245,864,245.3C960,245,1056,267,1152,245.3C1248,224,1344,160,1392,128L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </section>

        {/* <!-- Projects --> */}

        <section id="projects">
          <div className="container">
            <div className="row text-center mb-3">
              <div className="col">
                <h2>My Projects</h2>
              </div>
            </div>
            <div className="row">
              <div className="col md-4 mb-3">
                <div className="card" style={{ width: '18rem' }}>
                  <img src={Panda} alt="" className="card-img-top" />
                  <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                </div>
              </div>
              <div className="col md-4 mb-3">
                <div className="card" style={{ width: '18rem' }}>
                  <img src={Panda} alt="" className="card-img-top" />
                  <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                </div>
              </div>
              <div className="col md-4 mb-3">
                <div className="card" style={{ width: '18rem' }}>
                  <img src={Panda} alt="" className="card-img-top" />
                  <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#0099ff"
              fill-opacity="1"
              d="M0,192L48,202.7C96,213,192,235,288,208C384,181,480,107,576,117.3C672,128,768,224,864,261.3C960,299,1056,277,1152,240C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </section>

        {/* <!-- Contact --> */}

        <section id="contact">
          <div className="contai">
            <div className="row text-center mb-3">
              <div className="col">
                <h2>Contact Me</h2>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-6">
                  <form>
                    <div className="mb-3">
                      <label for="name" className="form-label">
                        Nama Lengkap
                      </label>
                      <input type="text" className="form-control" id="name" aria-describedby="name" />
                    </div>
                    <div className="mb-3">
                      <label for="email" className="form-label">
                        Email
                      </label>
                      <input type="email" className="form-control" id="email" aria-describedby="email" />
                    </div>
                    <div className="mb-3">
                      <label for="pesan" className="form-label">
                        Pesan
                      </label>
                      <textarea className="form-control" id="pesan" rows="3"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Kirim
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#0099ff"
              fill-opacity="1"
              d="M0,256L48,250.7C96,245,192,235,288,213.3C384,192,480,160,576,170.7C672,181,768,235,864,250.7C960,267,1056,245,1152,229.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </section>

        {/* Footer */}

        <footer>
          <p className="bg-primary text-white text-center pb-5">
            Created with love by <a href="https://www.youtube.com/results?search_query=agus+ufrod" className="text-white fw-bold"></a>Herman Agus S
          </p>
        </footer>
      </div>
    );
  }
}
