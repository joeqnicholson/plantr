import axios from 'axios';

// if token argument is truthy, all response headers will contain the token
// if token argument is falsey, token is removed from response headers

export const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};