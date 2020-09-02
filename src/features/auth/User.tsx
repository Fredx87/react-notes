import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button } from "../../components/Button";
import { RootState } from "../../rootReducer";
import { setLoggedOut } from "./authSlice";

export const User = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();

  const logout = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(setLoggedOut());
    history.replace("/");
  };

  return user ? (
    <div className="space-x-2">
      <span>
        Welcome, {user.firstName} {user.lastName}
      </span>
      <Button variant="link" onClick={logout}>
        Logout
      </Button>
    </div>
  ) : null;
};
