import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Alert } from "../../components/Alert";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useTextInput } from "../../hooks/useTextInput";
import { RootState } from "../../rootReducer";
import { login } from "./authSlice";

export const Login = () => {
  const [username, usernameChange] = useTextInput("");
  const [password, passwordChange] = useTextInput("");
  const history = useHistory();
  const dispatch = useDispatch();
  const { user, isLoading, error } = useSelector(
    (state: RootState) => state.auth
  );

  useEffect(() => {
    if (user) {
      history.replace("/");
    }
  }, [user, history]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(login(username, password));
  };

  return (
    <form
      onSubmit={onSubmit}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-sm mx-auto mt-10"
    >
      {error && (
        <div className="mb-6">
          <Alert>{error}</Alert>
        </div>
      )}
      <Input
        label="Username"
        id="username"
        required
        value={username}
        onChange={usernameChange}
      />
      <Input
        className="mt-6"
        label="Password"
        id="password"
        type="password"
        required
        value={password}
        onChange={passwordChange}
      />
      <div className="mt-6 text-center">
        <Button variant="primary" type="submit" isLoading={isLoading}>
          Login
        </Button>
      </div>
    </form>
  );
};
