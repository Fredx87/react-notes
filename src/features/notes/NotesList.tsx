import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { Button } from "../../components/Button";

export const NotesList = () => {
  const { url } = useRouteMatch();
  const history = useHistory();

  const createNewNote = () => {
    history.push(`${url}/create`);
  };

  return (
    <Button variant="primary" onClick={createNewNote}>
      Create
    </Button>
  );
};
