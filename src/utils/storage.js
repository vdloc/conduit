const { localStorage } = window;
const key = process.env.REACT_APP_TOKEN_KEY;

export const getToken = () => {
  try {
    return localStorage.getItem(key);
  } catch (e) {
    return '';
  }
};

export const saveToken = (token) => {
  localStorage.setItem(key, token);
};

export const clearToken = () => {
  localStorage.setItem(key, '');
};
