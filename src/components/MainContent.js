import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import Popup from './Popup';
import Home from '../Home';
import Books from './Books';
import Profile from './Profile';
import Player from './Player';
import Sidemenu from './Sidemenu';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

export default function MainContent() {
  const { currentUser } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  console.log(currentUser);

  if (currentUser) {
    return (
      <main className="content">
        <Route path="/Player" exact component={Player} />
        <Route path="/Profile" exact component={Profile} />
        <Route path="/Books" exact component={Books} />
        <Route path="/" exact component={Home} />
      </main>
    );
  } else {
    return (
      <main className="content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route to="/" component={notAuthorized} />
        </Switch>
      </main>
    );
  }
}

export function notAuthorized() {
  return <div>Not authorized</div>;
}
