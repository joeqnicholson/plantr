import * as APIUtil from '../util/session_api_util';
import jwt_decode from 'jwt-decode';

export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";

export const logoutUser = () => ({
  type: RECEIVE_USER_LOGOUT
});

export const logout = () => dispatch => {
  // first remove the token from local storage
  localStorage.removeItem('jwtToken');

  // then remove the token from the common axios headers
  APIUtil.setAuthToken(false);

  // then dispatch the action to logout the user
  dispatch(logoutUser());
};