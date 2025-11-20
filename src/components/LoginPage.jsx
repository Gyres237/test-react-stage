import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  const [errors, setErrors] = useState({});
  const { login } = useAuth();
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};

    if (!email) {
      newErrors.email = "L'email est requis.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Le format de l'email est invalide.";
    }

    if (!password) {
      newErrors.password = 'Le mot de passe est requis.';
    } else if (password.length < 8) {
      newErrors.password = 'Le mot de passe doit contenir au moins 8 caractères.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    
    if (!validateForm()) {
      return; 
    }

    
    if (email === 'user@example.com' && password === 'password123') {
      const fakeToken = '12345abcdef';
      login(fakeToken);
      navigate('/');
    } else {
   
      setErrors({ form: 'Email ou mot de passe incorrect.' });
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
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="password">Mot de passe :</label>
          <input
            type="password"
            id= "password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
        </div>
        {errors.form && <p style={{ color: 'red' }}>{errors.form}</p>}
        <button type="submit">Se connecter</button>
      </form>
      <p>Utilisez <strong>user@example.com</strong> et <strong>password123</strong> (mot de passe d'au moins 8 caractères).</p>
    </div>
  );
};

export default LoginPage;