import React from 'react';

export default function Sidemenu({ setTrigger }) {
  const handleClose = () => {
    setTrigger(false);
  };
  return (
    <div className="sidemenu">
      <i className="ri-close-line ri-3x" onClick={handleClose}></i>
      <ul>
        <li>
          <i className="ri-home-2-fill ri-3x" />
          Hem
        </li>
        <li>
          <img src="Blogo.svg" />
          Om oss
        </li>
        <li>
          <i className="ri-phone-fill ri-3x" />
          Kontakt
        </li>
        <li>
          <i className="ri-key-fill ri-3x" />
          Logga in
        </li>
        <li>
          <img src="TryBooksteplogo.svg" />
          Prova Bookstep
        </li>
      </ul>
    </div>
  );
}
