import { BrowserRouter as Router, Route } from 'react-router-dom';
import './styles.css';
import React, { useState } from 'react';
import Sidemenu from './components/Sidemenu';
import Home from './Home';
import Popup from './components/Popup';
import Player from './components/Player';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Router>
      <div className="container-fluid">
        <Header isOpen={isOpen} setTrigger={setIsOpen} />
        <section className="hider"></section>
        <main className="content">
          <Route path="/Player" component={Player} />
          <Route path="/" exact component={Home} />
          <Popup trigger={isOpen}>
            <Sidemenu setTrigger={setIsOpen} />
          </Popup>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
