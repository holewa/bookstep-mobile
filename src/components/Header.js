import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

export default function Header() {
  const handleClick = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="header">
      <Link to="/">
        <div className="hamburger">
          {isOpen ? (
            <i className="ri-close-line ri-3x" onClick={handleClick} />
          ) : (
            <i className="ri-menu-fill ri-3x" onClick={handleClick} />
          )}
        </div>
      </Link>
      <img src="Booksteplogo.svg" />
      <div>
        <Link to="/">
          <i className="ri-notification-4-fill ri-2x" />
        </Link>
      </div>
    </div>
  );
}
