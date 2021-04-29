import React from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../views/Auth";
import Task from "../views/Task";
import PrivateRoutes from "./PrivateRoutes";

const Routes = () => {
  return (
    <Switch>
      <PrivateRoutes exact path="/task" component={Task} />
      <Route exact path="/" component={Auth} />
    </Switch>
  );
};

export default Routes;
