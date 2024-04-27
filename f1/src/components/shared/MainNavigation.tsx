import { Link } from "react-router-dom";
import "./MainNavigation.css";

const MainNavigation = () => {
  return (
    <nav className="position-relative navbar navbar-expand-lg navbar-dark p-1">
      <div className="container-fluid">
        <Link className="navbar-brand px-5" to="/">
          <img
            src="images/formel-1-white.webp"
            height={60}
            alt="Formula 1 API Logo. Ilustrasjon."
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto mx-5">
            <li className="nav-item mx-4 text-center">
              <Link className="nav-link white p-3" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item mx-4 text-center">
              <Link className="nav-link white p-3" to="admin">
                Admin
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MainNavigation;
