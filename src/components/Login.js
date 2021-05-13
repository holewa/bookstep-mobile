import React, { useRef, useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import Signup from './Signup';
import { useHistory } from 'react-router-dom';
import Button from './Button';

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      setError('Välkommen!');
      history.push('/');
    } catch {
      setError('E-post och lösenord matchar inte');
    }
    setLoading(false);
  }

  return (
    <div class="login-window">
      {error && <Alert variant="danger">{error}</Alert>}
      <h3>Logga in</h3>
      <div className="credentials">
        <h6>Epost</h6>
        <input
          name="email"
          placeholder="Skriv här"
          type="text"
          ref={emailRef}
          required
        ></input>
        <h6>Lösenord</h6>
        <input
          name="password"
          placeholder="Skriv här"
          type="password"
          ref={passwordRef}
          required
        ></input>
      </div>
      <Button
        disabled={loading}
        text="Fortsätt"
        bgColor="#F0B5A4"
        onClick={handleSubmit}
      ></Button>
      <p style={{ borderBottom: '1px solid #AAAAAA' }}>Glömt lösenord?</p>
      <h6>Har du inget konto?</h6>
      <Button
        text="Skapa ett konto gratis"
        color="white"
        bgColor="#545454"
      ></Button>
    </div>
  );
}
