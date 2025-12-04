import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext';
import LoginPage from './LoginPage';

import { AppThemeProvider } from '../context/ThemeContext';

const MockLoginPage = () => {
  return (
    <AppThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <LoginPage />
        </BrowserRouter>
      </AuthProvider>
    </AppThemeProvider>
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
    const emailInput = screen.getByLabelText(/adresse email/i);
    const passwordInput = screen.getByLabelText(/mot de passe/i);
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  it('doit afficher le bouton de soumission', () => {
    render(<MockLoginPage />);
    const submitButton = screen.getByRole('button', { name: /se connecter/i });
    expect(submitButton).toBeInTheDocument();
  });

  it('doit afficher les liens "Mot de passe oublié ?" et "Retour à l\'accueil"', () => {
    render(<MockLoginPage />);
    const forgotPasswordLink = screen.getByText(/mot de passe oublié \?/i);
    const backHomeLink = screen.getByText(/retour à l'accueil/i);
    expect(forgotPasswordLink).toBeInTheDocument();
    expect(backHomeLink).toBeInTheDocument();
  });
});