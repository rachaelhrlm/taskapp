import { List } from "antd";
import React, { FC } from "react";
import { Task } from "../state/types";
import { ListItem } from "./";

interface TasksContainerProps {
  tasks: Task[];
  completeTask: (task: Task) => void;
  deleteTask: (task: Task) => void;
}

const TasksContainer: FC<TasksContainerProps> = ({ tasks, completeTask, deleteTask }: TasksContainerProps) => {
  return (
    <List>
      {tasks.map((task, index) => (
        <ListItem key={task.title + index} task={task} completeTask={completeTask} deleteTask={deleteTask} />
      ))}
    </List>
  );
};

export default TasksContainer;
