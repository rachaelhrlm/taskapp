import { createStore } from "redux";
import { taskReducer } from "./task/taskReducer";

export const store = createStore(taskReducer);
