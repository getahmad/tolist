import React from "react";
import { Route } from "react-router-dom";
import Auth from "../views/Auth";
import Task from "../views/Task";
import PrivateRoutes from "./PrivateRoutes";

const Routes = () => {
  return (
    <>
      <PrivateRoutes exact path="/task" component={Task} />
      <Route exact path="/" component={Auth} />
    </>
  );
};

export default Routes;
