import { TypedUseSelectorHook, useDispatch as _useDispatch, useSelector as _useSelector } from "react-redux";
import { Dispatch } from "redux";
import type { RootState, AppDispatch } from "./store";

export const useDispatch = (): Dispatch => _useDispatch<AppDispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = _useSelector;
