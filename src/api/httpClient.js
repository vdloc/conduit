import qs from 'qs';

const httpClient = async (
  endpoint,
  {
    body,
    method = 'GET',
    headers: customHeaders,
    params,
    isAuthRequired,
    unauthorizedHandler,
    ...otherConfigs
  } = {}
) => {
  let endpointURL = `${process.env.REACT_APP_API}/${endpoint}`;
  const defaultHeaders = { 'Content-Type': 'application/json' };
  const config = {
    method,
    headers: { ...defaultHeaders, ...customHeaders },
    ...otherConfigs,
  };

  if (params) {
    endpointURL += `?${qs.stringify(params)}`;
  }

  if (isAuthRequired) {
    const token = window.localStorage.getItem(process.env.REACT_APP_TOKEN_KEY);
    config.headers.Authorization = `Bearer ${token || ''}`;
  }

  if (body) {
    config.body = JSON.stringify(body);
  }

  let response;

  try {
    response = await window.fetch(endpointURL, config);

    if (response.status === 401 && unauthorizedHandler) {
      unauthorizedHandler();
    }

    if (response.ok) {
      return await response.json();
    }
  } catch (err) {
    return Promise.reject(err);
  }
};

export default httpClient;
