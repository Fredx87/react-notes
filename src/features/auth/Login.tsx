import React from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export const Login = () => {
  return (
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-sm">
      <Input label="Username" id="username" required />
      <Input
        className="mt-6"
        label="Password"
        id="password"
        type="password"
        required
      />
      <div className="mt-6 text-center">
        <Button variant="primary" type="submit">
          Login
        </Button>
      </div>
    </form>
  );
};
