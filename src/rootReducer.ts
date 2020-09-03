import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import notesReducer from "./features/notes/notesSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  notes: notesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
