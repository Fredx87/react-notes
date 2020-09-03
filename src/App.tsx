import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { Layout } from "./components/Layout";
import { PrivateRoute } from "./components/PrivateRoute";
import { Login } from "./features/auth/Login";
import { NotesContainer } from "./features/notes/NotesContainer";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <PrivateRoute exact path="/">
          <Redirect to="/notes" />
        </PrivateRoute>
        <PrivateRoute path="/notes">
          <Layout>
            <NotesContainer />
          </Layout>
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default App;
