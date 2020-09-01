import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../../store";
import { authPromise } from "./authPromise";

interface AuthState {
  username?: string;
  isLoading: boolean;
  error?: string;
}

const initialState: AuthState = {
  username: undefined,
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoading(state) {
      state.username = undefined;
      state.isLoading = true;
      state.error = undefined;
    },
    setLogged(state, action: PayloadAction<string>) {
      state.username = action.payload;
      state.isLoading = false;
      state.error = undefined;
    },
    setLoggedOut(state) {
      state.username = undefined;
      state.isLoading = false;
      state.error = undefined;
    },
    setLoginError(state, action: PayloadAction<string>) {
      state.username = undefined;
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  setLoading,
  setLogged,
  setLoggedOut,
  setLoginError,
} = authSlice.actions;
export default authSlice.reducer;

export const login = (username: string, password: string): AppThunk => async (
  dispatch
) => {
  try {
    dispatch(setLoading());
    const result = await authPromise(username, password);
    dispatch(setLogged(result));
  } catch (e) {
    dispatch(setLoginError(e));
  }
};
