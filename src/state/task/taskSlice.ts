import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../types";
import * as ls from "local-storage";

const initialState: Task[] = ls.get<Task[]>("tasks") || [];
export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    createTask: (state: Task[], action: PayloadAction<Task>) => {
      state.push(action.payload);
      ls.set<Task[]>("tasks", state);
    },
    completeTask: (state: Task[], action: PayloadAction<Task>) => {
      const task = state.find(task => task.id === action.payload.id);
      if (task) task.completed = !task.completed;
      ls.set<Task[]>("tasks", state);
    },
    deleteTask: (state: Task[], action: PayloadAction<Task>): Task[] => {
      state = state.filter(task => task.id !== action.payload.id);
      ls.set<Task[]>("tasks", state);
      return state;
    },
    updateTask: (state: Task[], action: PayloadAction<Task>): Task[] => {
      state = state.map(task => {
        if (task.id === action.payload.id) {
          return { ...action.payload };
        }
        return task;
      });
      ls.set<Task[]>("tasks", state);
      return state;
    }
  }
});

export const { createTask, completeTask, updateTask, deleteTask } = tasksSlice.actions;

export default tasksSlice.reducer;
