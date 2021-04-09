import React, { ChangeEvent, FC, useState } from "react";
import Button from "./Button";
import Input from "./Input";
interface AddTaskProps {
  addTask: (task: string) => void;
}

const AddTask: FC<AddTaskProps> = ({ addTask }: AddTaskProps) => {
  const [task, setTask] = useState<string>("");

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const onClick = () => {
    addTask(task);
    setTask("");
  };

  return (
    <div>
      <Input value={task} onChange={onChange} type="text" name="task" placeholder="Input task title" />
      <Button onClick={onClick} text="Add task" />
    </div>
  );
};

export default AddTask;
