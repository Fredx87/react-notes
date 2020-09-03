import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { NoteCreate } from "./NoteCreate";
import { NoteEdit } from "./NoteEdit";
import { NotesList } from "./NotesList";

export const NotesContainer = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        <NotesList />
      </Route>
      <Route path={`${path}/create`}>
        <NoteCreate />
      </Route>
      <Route path={`${path}/:noteId/edit`}>
        <NoteEdit />
      </Route>
    </Switch>
  );
};
