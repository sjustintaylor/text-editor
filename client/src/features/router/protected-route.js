import React from "react";
import { Route, Redirect } from "react-router-dom";
import useAuthentication from "hooks/authentication";

export default ({ component: Component, ...rest }) => {
  const { loggedIn } = useAuthentication();

  return (
    <Route
      {...rest}
      render={(props) => {
        if (loggedIn) {
          return <Component {...rest} {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/authorization",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};
