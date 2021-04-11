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
  switch (action.type) {
    case TaskActionTypes.ADD_TASK: {
      return { ...state, tasks: [...state.tasks, action.payload] };
    }
    case TaskActionTypes.COMPLETE_TASK: {
      return {
        ...state,
        tasks: [
          ...state.tasks.map(task => {
            if (task.id === action.payload.id) {
              return { ...task, completed: !task.completed };
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
