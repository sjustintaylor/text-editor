import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "features/landing-page";
import Authorization from "features/authorization";
import ProtectedRoute from "./protected-route";
import Editor from "features/editor/Editor";

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/app/authorization" component={Authorization} />
      <ProtectedRoute path="/app/editor" component={Editor} />
    </Switch>
  );
};
