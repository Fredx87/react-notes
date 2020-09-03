import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { NoteEditor } from "./NoteEditor";
import { NotesList } from "./NotesList";

export const NotesContainer = () => {
  const { path } = useRouteMatch();
  console.log("path", path);

  return (
    <Switch>
      <Route exact path={path}>
        <NotesList />
      </Route>
      <Route path={`${path}/create`}>
        <NoteEditor />
      </Route>
      <Route path={`${path}/:noteId`}>
        <NoteEditor />
      </Route>
    </Switch>
  );
};
