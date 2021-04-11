import React, { FC } from "react";
import TaskInput from "../components/TaskInput";
import { TasksState } from "../state/task/taskReducer";
import { useSelector } from "react-redux";
import { List } from "../components";
import { Divider } from "antd";

const Tasks: FC = () => {
  const tasks = useSelector<TasksState, TasksState["tasks"]>(state => state.tasks);

  return (
    <div>
      <TaskInput />
      <div className="task-container">
        <Divider />
        <List tasks={tasks} />
      </div>
    </div>
  );
};

export default Tasks;
