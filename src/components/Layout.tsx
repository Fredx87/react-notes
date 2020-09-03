import React from "react";
import { Link } from "react-router-dom";
import { User } from "../features/auth/User";

export const Layout: React.FC = (props) => {
  const { children } = props;
  return (
    <div className="container mx-auto">
      <header className="flex items-center justify-between flex-wrap py-6 mb-8 border-b border-gray-300">
        <h1 className="font-semibold text-3xl">
          <Link to="/">React Notes</Link>
        </h1>
        <User />
      </header>
      <main>{children}</main>
    </div>
  );
};
