import React from "react";
import { Switch, Route } from "react-router-dom";
import Test from "features/test";
import Authorization from "features/authorization";

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={Test} />
      <Route exact path="/authorization" component={Authorization} />
    </Switch>
  );
};
