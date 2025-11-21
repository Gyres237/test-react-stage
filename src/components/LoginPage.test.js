import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext';
import LoginPage from './LoginPage';

const MockLoginPage = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    </AuthProvider>
  );
};

describe('LoginPage', () => {

  it("doit afficher le titre 'Connexion'", () => {
    render(<MockLoginPage />);

    const titleElement = screen.getByRole('heading', { name: /connexion/i });

    expect(titleElement).toBeInTheDocument();
  });

  it('doit afficher les champs de saisie pour l\'email et le mot de passe', () => {
    render(<MockLoginPage />);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/mot de passe/i);

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  it('doit afficher le bouton de soumission', () => {
    render(<MockLoginPage />);

    const submitButton = screen.getByRole('button', { name: /se connecter/i });

    expect(submitButton).toBeInTheDocument();
  });
});