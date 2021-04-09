import { Action } from "./taskActions";

export interface TasksState {
  tasks: string[];
}

const initialState = {
  tasks: []
};

export const taskReducer = (state: TasksState = initialState, action: Action): TasksState => {
  switch (action.type) {
    case "ADD_TASK": {
      return { ...state, tasks: [...state.tasks, action.payload] };
    }
    default:
      return state;
  }
};
