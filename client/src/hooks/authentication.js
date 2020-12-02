import { useState } from "react";
import jwt_decode from "jwt-decode";
import { open } from "api/editorApi";

export default () => {
  const [loggedIn, setLoggedIn] = useState(false);
  // Session authentication token. Discarded on refresh/page close. Can be retrieved from server with the use of a refresh token
  const [token, setToken] = useState(false);
  // The decoded token for external use
  const [decodedToken, setDecodedToken] = useState(false);

  const login = async (email) => {
    try {
      setDecodedToken(jwt_decode(token));
    } catch (error) {
      console.error(error);
    }
  };
  const logout = async () => {
    try {
    } catch (error) {
      console.error(error);
    }
  };

  // Add a timeout to refresh the token every x minutes (set by token expiry) by call this
  const refreshToken = async () => {
    try {
      const { data: token } = await open.post("/sessions/refresh");
      setDecodedToken(jwt_decode(token));
    } catch (error) {
      console.error(error);
    }
  };
  // /**
  //  * Checks if a token is valid for use
  //  * @returns Boolean
  //  */
  // const validToken = () => {
  //   if (
  //     !token ||
  //     !loggedIn ||
  //     compareAsc(new Date(decodedToken.exp), new Date()) <= 0
  //   ) {
  //     return false;
  //   }
  //   return true;
  // };
  return {
    loggedIn,
    token,
    decodedToken,
    login,
    logout,
    refreshToken,
    validToken,
  };
};
