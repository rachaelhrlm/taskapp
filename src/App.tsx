import React, { FC } from "react";
import AddTask from "./components/AddTask";
import { TasksState } from "./state/task/taskReducer";
import { useDispatch, useSelector } from "react-redux";
import "./styles/main.scss";
import { addTask } from "./state/task/taskActions";

const App: FC = () => {
  const tasks = useSelector<TasksState, TasksState["tasks"]>(state => state.tasks);
  const dispatch = useDispatch();

  const onAddTask = (tasks: string) => {
    dispatch(addTask(tasks));
  };

  return (
    <div>
      <AddTask addTask={onAddTask} />
      <div>
        <hr />
        <ul>
          {tasks.map((task: string) => (
            <li key={task}>{task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
