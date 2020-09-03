import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import { NoteForm } from "./NoteForm";
import { Note } from "./notesSlice";

export const NoteCreate = () => {
  const note: Note = {
    id: nanoid(),
    timestamp: Date.now(),
    title: "",
    content: "",
  };

  return <NoteForm note={note}></NoteForm>;
};
