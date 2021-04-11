import { Task } from "../types";
import { TaskActionTypes } from "./taskActionTypes";

interface AddTaskAction {
  type: TaskActionTypes;
  payload: Task;
}
interface CompleteTaskAction {
  type: TaskActionTypes;
  payload: Task;
}

export type Action = AddTaskAction | CompleteTaskAction;

export const addTask = (task: Task): Action => ({ type: TaskActionTypes.ADD_TASK, payload: task });
export const completeTask = (task: Task): Action => ({ type: TaskActionTypes.COMPLETE_TASK, payload: task });
