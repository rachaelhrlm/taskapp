import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../types";

const initialState: Task[] = [];

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    createTask: (state: Task[], action: PayloadAction<Task>) => {
      state.push(action.payload);
    },
    completeTask: (state: Task[], action: PayloadAction<Task>) => {
      console.log("complete", action.payload);
      const task = state.find(task => task.id === action.payload.id);
      if (task) task.completed = !task.completed;
    },
    deleteTask: (state: Task[], action: PayloadAction<Task>): Task[] => {
      return state.filter(task => task.id !== action.payload.id);
    },
    updateTask: (state: Task[], action: PayloadAction<Task>) => {
      return state.map(task => {
        if (task.id === action.payload.id) {
          return { ...task, title: action.payload.title };
        }
        return task;
      });
    }
  }
});

export const { createTask, completeTask, updateTask, deleteTask } = tasksSlice.actions;

export default tasksSlice.reducer;
