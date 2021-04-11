import React, { FC } from "react";
import TaskInput from "../components/TaskInput";
import { TasksState } from "../state/task/taskReducer";
import { useSelector } from "react-redux";
import { List } from "../components";
import { Divider, Row } from "antd";

const Tasks: FC = () => {
  const tasks = useSelector<TasksState, TasksState["tasks"]>(state => state.tasks);

  return (
    <div className="c-tasks">
      <Row className="c-row">
        <List tasks={tasks} />
      </Row>
      <Row className="c-row">
        <TaskInput className="c-tasks-input" />
      </Row>
    </div>
  );
};

export default Tasks;
