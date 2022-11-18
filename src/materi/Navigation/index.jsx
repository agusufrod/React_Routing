import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success shadow-lg sticky-top">
      <div className="container">
        <a className="navbar-brand" href="/">
          Herman Agus Syahputra
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/form">
                Form
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/komponen">
                Komponen
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/lifecycle">
                Lifecycle
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    // <div className="sidebar">
    //   <Link to="/">
    //     <i className="fa fa-fw fa-home"></i> Home
    //   </Link>
    //   <Link to="/service">
    //     <i className="fa fa-fw fa-wrech"></i> Service
    //   </Link>
    //   <Link to="/client">
    //     <i className="fa fa-fw fa-user"></i> Clients
    //   </Link>
    //   <Link to="/contact">
    //     <i className="fa fa-fw fa-envelop"></i> Contact
    //   </Link>
    // </div>
  );
};

export default Navigation;
