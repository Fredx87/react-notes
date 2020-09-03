import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../rootReducer";
import { NoteForm } from "./NoteForm";
import { notesSelectors } from "./notesSlice";

export const NoteEdit = () => {
  const { noteId } = useParams();
  const note = useSelector((state: RootState) =>
    notesSelectors.selectById(state, noteId)
  );

  return note ? <NoteForm note={note}></NoteForm> : <p>Note not found</p>;
};
