import React from 'react';

export default function Sidemenu({ trigger }) {
  return trigger ? (
    <div className="sidemenu">
      <ul>
        <li>Hem</li>
        <li>Om oss</li>
        <li>Kontakt</li>
        <li>Logga in</li>
        <li>Prova Bookstep</li>
      </ul>
    </div>
  ) : (
    ''
  );
}
