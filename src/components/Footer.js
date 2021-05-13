import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="footer">
      <Link to="/Player">
        <div>
          <i className="ri-headphone-fill ri-3x"></i>
        </div>
      </Link>
      <Link to="/">
        <div>
          <i className="ri-file-mark-fill ri-3x"></i>
        </div>
      </Link>
      <Link to="/">
        <div>
          <i className="ri-run-fill ri-3x"></i>
        </div>
      </Link>
    </div>
  );
}
