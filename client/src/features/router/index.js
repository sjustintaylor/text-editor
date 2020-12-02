import React from "react";
import { Switch, Route } from "react-router-dom";
import Test from "features/test";

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={Test} />
    </Switch>
  );
};
