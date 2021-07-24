export const getSerializedErrorMessages = (errors) =>
  Object.entries(errors).flatMap(([subject, subjectErros]) =>
    subjectErros.map((error) => `${subject} ${error}`)
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
