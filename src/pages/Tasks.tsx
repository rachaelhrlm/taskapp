import React, { FC } from "react";
import TaskInput from "../components/TaskInput";
import { useSelector } from "react-redux";
import { List } from "../components";
import { Row } from "antd";
import { RootState } from "../state/store";

const Tasks: FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks);

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
