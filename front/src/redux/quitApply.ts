import { createSlice } from "@reduxjs/toolkit";
import { cancel_host } from "../api/fetch";

export interface cancelState {
  loading: boolean;
  cancel: boolean;
  data: {
    result: boolean;
    message: string;
    code: string;
  };
  error: string | undefined;
}

export interface HostAttributes {
  result: boolean;
  message: string;
  code: string;
}

const initialState: cancelState = {
  loading: false,
  cancel: false,
  data: {
    result: false,
    message: "",
    code: "",
  },
  error: "",
};

export const quitSlice = createSlice({
  name: "quit",
  initialState,
  reducers: {
    cancelToTrue: (state, action) => {
      state.cancel = action.payload;
    },
    cancelToFalse: (state, action) => {
      state.cancel = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(cancel_host.pending, (state) => {
        state.loading = true;
      })
      .addCase(cancel_host.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(cancel_host.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const { cancelToFalse, cancelToTrue } = quitSlice.actions;
export default quitSlice.reducer;
