import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useTextInput } from "../../hooks/useTextInput";
import { Note, upsertNote } from "./notesSlice";

export const NoteEditor = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [title, titleChange] = useTextInput("");
  const [content, contentChange] = useTextInput("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const note: Note = {
      id: nanoid(),
      timestamp: Date.now(),
      title,
      content,
    };
    dispatch(upsertNote(note));
    goBack();
  };

  const goBack = () => {
    history.push("/notes");
  };

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <Input
        type="text"
        id="note-title"
        label="Title:"
        value={title}
        onChange={titleChange}
        required
      />
      <Input
        type="textarea"
        id="note-content"
        label="Content"
        value={content}
        onChange={contentChange}
        required
      />
      <div className="text-center space-x-3">
        <Button variant="secondary" onClick={goBack}>
          Cancel
        </Button>
        <Button type="submit" variant="primary">
          Save
        </Button>
      </div>
    </form>
  );
};
