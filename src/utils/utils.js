export const createSerializedErrorMessages = (errors) =>
  Object.entries(errors).flatMap(([header, body]) =>
    body.map((error) => toCapitalized(`${header} ${error}.`))
  );

export const getToken = () => {
  try {
    return window.localStorage.getItem(process.env.REACT_APP_TOKEN_KEY);
  } catch (e) {
    return '';
  }
};

export const saveToken = (token) => {
  window.localStorage.setItem(process.env.REACT_APP_TOKEN_KEY, token);
};

export const clearToken = () => {
  window.localStorage.setItem(process.env.REACT_APP_TOKEN_KEY, '');
};

function toCapitalized(str) {
  return str.replace(
    /(^.)(.+)/,
    (_match, p1, p2) => `${p1.toUpperCase()}${p2}`
  );
}
