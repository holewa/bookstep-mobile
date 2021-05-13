import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidemenu({ setTrigger }) {
  const handleClose = () => {
    setTrigger(false);
  };

  return (
    <div className="sidemenu-wrapper">
      <div className="sidemenu">
        <div className="close-button">
          <Link to="/">
            <i
              className="ri-close-line ri-3x"
              style={{ marginLeft: '55%' }}
              onClick={handleClose}
            ></i>
          </Link>
        </div>
        <div className="listItem-wrapper">
          <div className="listItem-icons">
            <img src="home.svg" alt="home" />
            <img src="Blogo.svg" alt="B logo" />
            <img src="phone.svg" alt="phone" className="phone" />
            <img src="login.svg" alt="login symbol" />
            <img src="TryBooksteplogo.svg" alt="try bookstep logo" />
          </div>
          <div className="listItem-text">
            <ul>
              <Link to="/" onClick={handleClose}>
                <li>
                  <h2>Hem</h2>
                </li>
              </Link>
              <Link to="/" onClick={handleClose}>
                <li>
                  <h2>Om oss</h2>
                </li>
              </Link>
              <Link to="/" onClick={handleClose}>
                <li>
                  <h2>Kontakt</h2>
                </li>
              </Link>
              <Link to="/" onClick={handleClose}>
                <li>
                  <h2>Logga in</h2>
                </li>
              </Link>
              <Link to="/Player" onClick={handleClose}>
                <li>
                  <h2>Prova Bookstep</h2>
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="sm-icons">
          <Link to="/" onClick={handleClose}>
            <i className="ri-facebook-circle-fill ri-3x"></i>
          </Link>
          <Link to="/" onClick={handleClose}>
            <i className="ri-instagram-line ri-3x"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
