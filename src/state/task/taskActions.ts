export type Action = { type: "ADD_TASK"; payload: string };

export const addTask = (task: string): Action => ({ type: "ADD_TASK", payload: task });
