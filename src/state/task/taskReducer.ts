import { Task } from "../types";
import { Action } from "./taskActions";
import { TaskActionTypes } from "./taskActionTypes";

export interface TasksState {
  tasks: Task[];
}

const initialState = {
  tasks: []
};

export const taskReducer = (state: TasksState = initialState, action: Action): TasksState => {
  const payload = action.payload;
  switch (action.type) {
    case TaskActionTypes.ADD_TASK: {
      return { ...state, tasks: [...state.tasks, payload] };
    }
    case TaskActionTypes.COMPLETE_TASK: {
      return {
        ...state,
        tasks: [
          ...state.tasks.map(task => {
            if (task.id === payload.id) {
              return { ...task, completed: !task.completed };
            }
            return task;
          })
        ]
      };
    }
    case TaskActionTypes.DELETE_TASK: {
      return {
        ...state,
        tasks: [
          ...state.tasks.filter(task => {
            return task.id !== payload.id;
          })
        ]
      };
    }
    case TaskActionTypes.EDIT_TASK: {
      return {
        ...state,
        tasks: [
          ...state.tasks.map(task => {
            if (task.id === payload.id) {
              return { ...task, title: payload.title };
            }
            return task;
          })
        ]
      };
    }
    default:
      return state;
  }
};
