import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";
import { Login } from "./features/auth/Login";

function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/">
          Welcome to my app!
        </PrivateRoute>
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
