import { useState } from "react";
import jwt_decode from "jwt-decode";

export default () => {
  const [loggedIn, setLoggedIn] = useState(true);
  // Session authentication token. Discarded on refresh/page close. Can be retrieved from server with the use of a refresh token
  const [token, setToken] = useState(false);
  // The decoded token for external use
  const [decodedToken, setDecodedToken] = useState(false);

  const login = async (jwt) => {
    try {
      setToken(jwt);
      setDecodedToken(jwt_decode(jwt));
      setLoggedIn(true);
    } catch (error) {
      console.error(error);
    }
  };
  const logout = async () => {
    try {
      setToken(null);
      setDecodedToken(null);
      setLoggedIn(false);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    loggedIn,
    token,
    decodedToken,
    login,
    logout,
  };
};
