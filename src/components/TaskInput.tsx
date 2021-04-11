import React, { ChangeEvent, FC, useState } from "react";
import { Button, Input } from ".";
import { PlusOutlined } from "@ant-design/icons";
import { Form } from "antd";
import { Task } from "../state/types";
import { useDispatch } from "react-redux";
import { addTask, editTask } from "../state/task/taskActions";
interface TaskInputProps {
  hidden?: boolean;
  task?: Task;
}

const TaskInput: FC<TaskInputProps> = ({ hidden, task }: TaskInputProps) => {
  const [newTask, setNewTask] = useState<Task | null>(null);

  const dispatch = useDispatch();
  const onSubmit = (newTask: Task) => {
    if (task) {
      dispatch(editTask(newTask));
    } else {
      dispatch(addTask(newTask));
    }
  };

  const text = task ? "Edit task" : "Add task";

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (task) {
      setNewTask({ id: task.id, title: event.target.value, completed: task.completed });
    } else {
      setNewTask({ id: new Date().getTime(), title: event.target.value, completed: false });
    }
  };

  const onClick = () => {
    if (newTask) {
      onSubmit(newTask);
      setNewTask(null);
    }
  };

  if (hidden) {
    return null;
  }
  return (
    <Form layout="inline" size="small">
      <Input value={newTask?.title} onChange={onChange} type="text" name="textInput" placeholder="Input task title" />
      <Button icon={<PlusOutlined />} onClick={onClick} text={text} type="primary" />
    </Form>
  );
};

export default TaskInput;
