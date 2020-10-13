import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = (props) => {
  const { branding } = props;

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item ">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item ">
            <Link to="/add" className="nav-link">
              <i className="fas fa-plus"></i> Add
            </Link>
          </li>
          <li className="nav-item ">
            <Link to="/about" className="nav-link">
              <i className="fas fa-question"></i> About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

Header.propTypes = {
  branding: PropTypes.string.isRequired,
};
export default Header;
