import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { RootState } from "../rootReducer";

export const PrivateRoute = (props: RouteProps) => {
  const user = useSelector((state: RootState) => state.auth.user);

  const { children, ...rest } = props;

  return (
    <Route
      {...rest}
      render={() => (user ? children : <Redirect to="/login" />)}
    />
  );
};
