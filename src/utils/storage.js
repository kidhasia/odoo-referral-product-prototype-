/**
 * Local storage utilities for persistent data
 */

const STORAGE_KEYS = {
  AUTH_TOKEN: 'beaverhub_auth_token',
  USER_DATA: 'beaverhub_user_data',
  PREFERENCES: 'beaverhub_preferences',
};

export const storage = {
  // Auth
  setAuthToken: (token) => localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, token),
  getAuthToken: () => localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN),
  removeAuthToken: () => localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN),

  // User Data
  setUserData: (user) => localStorage.setItem(STORAGE_KEYS.USER_DATA, JSON.stringify(user)),
  getUserData: () => {
    const data = localStorage.getItem(STORAGE_KEYS.USER_DATA);
    return data ? JSON.parse(data) : null;
  },
  removeUserData: () => localStorage.removeItem(STORAGE_KEYS.USER_DATA),

  // Preferences
  setPreferences: (prefs) => localStorage.setItem(STORAGE_KEYS.PREFERENCES, JSON.stringify(prefs)),
  getPreferences: () => {
    const data = localStorage.getItem(STORAGE_KEYS.PREFERENCES);
    return data ? JSON.parse(data) : {};
  },

  // Clear all
  clear: () => {
    Object.values(STORAGE_KEYS).forEach(key => localStorage.removeItem(key));
  },
};

export default storage;
