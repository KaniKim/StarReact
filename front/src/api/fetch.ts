import { createAsyncThunk } from "@reduxjs/toolkit";
import { HostAttributes } from "../redux/types";
import axios from "axios";

export const cancel_host = createAsyncThunk<HostAttributes>(
  "apply/post",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.patch("/back/streaming/cancel_host_apply", {
        request_id: 256,
      });
      return response.data;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        return rejectWithValue({ errorMessage: err.response?.data });
      }
    }
  },
);

export const apply_host = createAsyncThunk<HostAttributes>(
  "apply/post",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.post("/back/streaming/apply_host", {
        artist_id: 56,
        sns: ["INSTAGRAM"],
        indtroduction: "hello",
        email: "test@email.com",
      });
      return response.data;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        return rejectWithValue({ errorMessage: err.response?.data });
      }
    }
  },
);
