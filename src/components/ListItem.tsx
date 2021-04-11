import { Checkbox, CheckboxProps } from "antd";
import { CheckboxChangeEvent } from "antd/lib/checkbox";
import classNames from "classnames";
import React, { FC } from "react";
import { useState } from "react";
import { Task } from "../state/types";

interface ListItemProps extends CheckboxProps {
  task: Task;
  completeTask: (task: Task) => void;
}

const ListItem: FC<ListItemProps> = ({ task, completeTask, ...props }: ListItemProps) => {
  const onComplete = () => {
    completeTask(task);
  };
  return (
    <div className={classNames("c-listitem", { "c-listitem-completed": task.completed })}>
      <Checkbox {...props} onClick={onComplete} value={task.completed} />
      {task.title}, {task.id}, {task.completed ? "true" : "false"}
    </div>
  );
};

export default ListItem;
