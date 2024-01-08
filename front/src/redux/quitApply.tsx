import { createSlice } from "@reduxjs/toolkit";

export interface cancelState {
    cancel: boolean
}

const initialState: cancelState = {
  cancel: false
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
    }
  },
});
export const { cancelToFalse, cancelToTrue } = quitSlice.actions;
export default quitSlice.reducer;