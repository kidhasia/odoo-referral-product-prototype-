/**
 * Validation utilities
 */

export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const validatePhone = (phone) => {
  const regex = /^\+?[\d\s\-()]+$/;
  return regex.test(phone) && phone.replace(/\D/g, '').length >= 10;
};

export const validateURL = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export const validatePassword = (password) => {
  // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password);
};

export const validateLeadForm = (lead) => {
  const errors = {};

  if (!lead.companyName?.trim()) {
    errors.companyName = 'Company name is required';
  }

  if (!lead.contactPerson?.trim()) {
    errors.contactPerson = 'Contact person is required';
  }

  if (!validateEmail(lead.email)) {
    errors.email = 'Valid email is required';
  }

  if (!validatePhone(lead.phone)) {
    errors.phone = 'Valid phone number is required';
  }

  if (!lead.industry) {
    errors.industry = 'Industry is required';
  }

  if (lead.estimatedBudget && lead.estimatedBudget < 0) {
    errors.estimatedBudget = 'Budget must be positive';
  }

  if (lead.probability < 0 || lead.probability > 100) {
    errors.probability = 'Probability must be between 0 and 100';
  }

  return errors;
};

export const validateRegistrationForm = (data) => {
  const errors = {};

  if (!data.fullName?.trim()) {
    errors.fullName = 'Full name is required';
  }

  if (!validateEmail(data.email)) {
    errors.email = 'Valid email is required';
  }

  if (!validatePhone(data.phone)) {
    errors.phone = 'Valid phone number is required';
  }

  if (!data.country?.trim()) {
    errors.country = 'Country is required';
  }

  if (!validatePassword(data.password)) {
    errors.password = 'Password must be at least 8 characters with uppercase, lowercase, and number';
  }

  if (data.password !== data.confirmPassword) {
    errors.confirmPassword = 'Passwords do not match';
  }

  return errors;
};
