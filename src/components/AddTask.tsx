import React, { ChangeEvent, FC, useState } from "react";
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
      <input value={task} onChange={onChange} type="text" name="task" placeholder="Input task title" />
      <button onClick={onClick}>Add note</button>
    </div>
  );
};

export default AddTask;
