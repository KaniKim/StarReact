import { combineReducers, configureStore } from "@reduxjs/toolkit";
import applyReducer from "./applyHost";
import quitReducer from "./quitApply";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const reducer = combineReducers({
  apply: applyReducer,
  quit: quitReducer
});

export const store = configureStore({
  reducer: reducer
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;