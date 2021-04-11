import React, { ChangeEvent, FC, useState } from "react";
import { Button, Input } from "./";
import { PlusOutlined } from "@ant-design/icons";
import { Form } from "antd";
import { Task } from "../state/types";
interface AddTaskProps {
  addTask: (task: Task) => void;
}

const AddTask: FC<AddTaskProps> = ({ addTask }: AddTaskProps) => {
  const [task, setTask] = useState<Task | null>(null);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTask({ id: new Date().getTime(), title: event.target.value, completed: false });
  };

  const onClick = () => {
    if (task) {
      addTask(task);
      setTask(null);
    }
  };

  return (
    <Form layout="inline" size="small">
      <Input value={task?.title} onChange={onChange} type="text" name="task" placeholder="Input task title" />
      <Button icon={<PlusOutlined />} onClick={onClick} text="Add task" type="primary" />
    </Form>
  );
};

export default AddTask;
