import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./types";
import dayjs from "dayjs";
import { apply_host } from "../api/fetch";

export const applySlice = createSlice({
  name: "apply",
  initialState: initialState,
  reducers: {
    resetApplyState: (state) => {
      Object.assign(state, initialState);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(apply_host.pending, (state) => {
        state.loading = true;
      })
      .addCase(apply_host.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.date = dayjs(new Date()).format("YY.MM.DD");
        state.check = true;
      })
      .addCase(apply_host.rejected, (state, action) => {
        state.loading = false;
        state.check = false;
        state.error = action.error.message;
      });
  },
});

export default applySlice.reducer;
export const { resetApplyState } = applySlice.actions;
