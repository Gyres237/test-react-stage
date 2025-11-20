import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); 

    // Logique de validation très simple
    if (email === 'user@example.com' && password === 'password123') {
     
      // Pour notre simulation, on crée un faux token.
      const fakeToken = '12345abcdef';
      login(fakeToken);
      
      // On redirige l'utilisateur vers la page d'accueil après connexion.
      navigate('/'); 
    } else {
      setError('Email ou mot de passe incorrect.');
    }
  };

  return (
    <div>
      <h2>Connexion</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Mot de passe :</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Se connecter</button>
      </form>
      <p>Utilisez <strong>user@example.com</strong> et <strong>password123</strong> pour vous connecter.</p>
    </div>
  );
};

export default LoginPage;