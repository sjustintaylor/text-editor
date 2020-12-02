import React from "react";
import { Switch, Route } from "react-router-dom";
import landingPage from "features/landing-page";
import authorization from "features/authorization";

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={landingPage} />
      <Route exact path="/app/authorization" component={authorization} />
    </Switch>
  );
};
