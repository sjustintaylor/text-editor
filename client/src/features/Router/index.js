import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "features/Landing-Page";
import Authorization from "features/Authorization";
import ProtectedRoute from "./protected-route";
import Editor from "features/Editor/Editor";
import Projects from "features/Projects";

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/app/authorization" component={Authorization} />
      <ProtectedRoute path="/app/editor" component={Editor} />
      <ProtectedRoute path="/app/projects" component={Projects} />
    </Switch>
  );
};
