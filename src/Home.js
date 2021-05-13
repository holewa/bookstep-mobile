import React from 'react';
import Button from './components/Button';
import Slideshow from './components/Slideshow';

export default function Home() {
  return (
    <>
      <Slideshow />
      <div className="heading">
        <h4>
          Lås upp ljudböcker med motion och håll tränings- motivationen igång
        </h4>
        <Button color="black" bgColor="white" className="account-btn">
          Skapa konto gratis
        </Button>
      </div>
    </>
  );
}
