import React, { FC } from "react";
import { Task } from "../state/types";
import { ListItem } from "./";

interface TasksContainerProps {
  tasks: Task[];
  completeTask: (task: Task) => void;
}

const TasksContainer: FC<TasksContainerProps> = ({ tasks, completeTask }: TasksContainerProps) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <ListItem key={task.title + index} task={task} completeTask={completeTask} />
      ))}
    </div>
  );
};

export default TasksContainer;
