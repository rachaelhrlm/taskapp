import { DeleteOutlined } from "@ant-design/icons";
import { Checkbox, CheckboxProps, List } from "antd";
import { CheckboxChangeEvent } from "antd/lib/checkbox";
import classNames from "classnames";
import React, { FC } from "react";
import { useState } from "react";
import { Task } from "../state/types";

interface ListItemProps extends CheckboxProps {
  task: Task;
  completeTask: (task: Task) => void;
  deleteTask: (task: Task) => void;
}

const ListItem: FC<ListItemProps> = ({ task, completeTask, deleteTask, ...props }: ListItemProps) => {
  const onComplete = () => {
    completeTask(task);
  };
  const onDelete = () => {
    deleteTask(task);
  };
  return (
    <List.Item className={classNames({ "c-listitem-completed": task.completed })}>
      <Checkbox {...props} onClick={onComplete} value={task.completed} />
      {task.title}, {task.id}, {task.completed ? "true" : "false"}
      <DeleteOutlined onClick={onDelete} />
    </List.Item>
  );
};

export default ListItem;
