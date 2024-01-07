import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { HostAttributes, initialState } from "./types";

function getDate(): string {
  const today = new Date();

  const year = today.getFullYear().toString().slice(2); 
  const month = (today.getMonth() + 1).toString().padStart(2, "0"); 
  const day = today.getDate().toString().padStart(2, "0"); 

  const dateString = year + "." + month + "." + day;

  return dateString;
}

export const apply_host = createAsyncThunk<HostAttributes>("apply/post", async (_, {rejectWithValue}) => {
  try {
    const response = await axios.post("/back/streaming/apply_host", {
      artist_id: 56,
      sns: ["INSTAGRAM"],
      indtroduction: "hello",
      email: "test@email.com"
    });
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      return rejectWithValue({errorMessage: err.response?.data});
    }
  }
});

export const applySlice = createSlice({
  name: "apply",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(apply_host.pending, (state) => {
        state.loading = true;
      })
      .addCase(apply_host.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.date = getDate();
        state.check = true;
      })
      .addCase(apply_host.rejected, (state, action) => {
        state.loading = false;
        state.check = false;
        state.error = action.error.message;
      });
  }  
});

export default applySlice.reducer;