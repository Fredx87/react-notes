import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Layout } from "./components/Layout";
import { PrivateRoute } from "./components/PrivateRoute";
import { Login } from "./features/auth/Login";

function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/">
          <Layout>Welcome to my app!</Layout>
        </PrivateRoute>
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
