import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../rootReducer";

export interface Note {
  id: string;
  timestamp: number;
  title: string;
  content: string;
}

const notesAdapter = createEntityAdapter<Note>({
  sortComparer: (a, b) => b.timestamp - a.timestamp,
});

const notesSlice = createSlice({
  name: "notes",
  initialState: notesAdapter.getInitialState(),
  reducers: {
    upsertNote: notesAdapter.upsertOne,
    deleteNote: notesAdapter.removeOne,
  },
});

export const { upsertNote, deleteNote } = notesSlice.actions;

export default notesSlice.reducer;

export const notesSelectors = notesAdapter.getSelectors<RootState>(
  (state) => state.notes
);
