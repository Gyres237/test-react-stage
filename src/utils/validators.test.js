import { isValidEmail } from './validators';

describe('isValidEmail', () => {

  it('doit retourner true pour un email valide', () => {
 
    expect(isValidEmail('test@example.com')).toBe(true);
    expect(isValidEmail('john.doe@sub.domain.co.uk')).toBe(true);
  });

  it('doit retourner false pour un email invalide', () => {
    expect(isValidEmail('test@example')).toBe(false);
    expect(isValidEmail('test.example.com')).toBe(false);
    expect(isValidEmail('@example.com')).toBe(false);
  });

  it('doit retourner false pour une chaîne vide ou null', () => {
    expect(isValidEmail('')).toBe(false);
    expect(isValidEmail(null)).toBe(false);
    expect(isValidEmail(undefined)).toBe(false);
  });
});