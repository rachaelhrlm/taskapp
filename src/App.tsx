import React, { FC } from "react";
import AddTask from "./components/AddTask";
import { TasksState } from "./state/task/taskReducer";
import { useDispatch, useSelector } from "react-redux";
import "./styles/main.scss";
import { addTask, completeTask } from "./state/task/taskActions";
import { TasksContainer } from "./components";
import { Task } from "./state/types";

const App: FC = () => {
  const tasks = useSelector<TasksState, TasksState["tasks"]>(state => state.tasks);
  const dispatch = useDispatch();

  const onAddTask = (tasks: Task) => {
    dispatch(addTask(tasks));
  };
  const onCompleteTask = (tasks: Task) => {
    dispatch(completeTask(tasks));
  };

  return (
    <div>
      <AddTask addTask={onAddTask} />
      <div>
        <hr />
        <ul>
          <TasksContainer tasks={tasks} completeTask={onCompleteTask} />
        </ul>
      </div>
    </div>
  );
};

export default App;
