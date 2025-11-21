/**
 * Valide si une chaîne de caractères est un email bien formaté.
 * @param {string} email - L'email à valider.
 * @returns {boolean} - True si l'email est valide, false sinon.
 */
export const isValidEmail = (email) => {
  if (!email) return false;
  // Expression régulière  pour la validation d'email
  const emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
};