import React, { useState } from 'react';
import Button from './components/Button';
import Slideshow from './components/Slideshow';
import Popup from './components/Popup';
import Signup from './components/Signup';

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [buttonPopup, setButtonPopup] = useState(false);

  const handleLogin = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false);
    } else {
      setButtonPopup(true);
    }
  };
  return (
    <>
      <Slideshow />
      <div className="heading">
        <h4>
          Lås upp ljudböcker med motion och håll tränings- motivationen igång
        </h4>
        <Button
          color="black"
          bgColor="white"
          className="account-btn"
          onClick={handleLogin}
        >
          Skapa konto gratis
        </Button>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <Signup />
        </Popup>
      </div>
    </>
  );
}
