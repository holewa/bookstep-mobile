import React from 'react';
import { Link } from 'react-router-dom';

export default function Header({ isOpen, setTrigger }) {
  const handleClick = () => {
    isOpen ? setTrigger(false) : setTrigger(true);
  };

  return (
    <header className="header">
      <Link to="/">
        <div className="hamburger">
          {isOpen ? (
            <i className="ri-close-line ri-3x" onClick={handleClick} />
          ) : (
            <i className="ri-menu-fill ri-3x" onClick={handleClick} />
          )}
        </div>
      </Link>
      <img src="Booksteplogo.svg" alt="bookstep logo" />
      <div>
        <Link to="/">
          <i className="ri-notification-4-fill ri-2x" />
        </Link>
      </div>
    </header>
  );
}
