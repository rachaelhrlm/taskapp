import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Checkbox, CheckboxProps, List } from "antd";
import classNames from "classnames";
import React, { FC } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { TaskInput } from ".";
import { completeTask, deleteTask } from "../state/task/taskActions";
import { Task } from "../state/types";

interface ListItemProps extends CheckboxProps {
  task: Task;
}

const ListItem: FC<ListItemProps> = ({ task, ...props }: ListItemProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const dispatch = useDispatch();

  const onComplete = () => {
    dispatch(completeTask(task));
  };
  const onDelete = () => {
    dispatch(deleteTask(task));
  };

  return (
    <List.Item className={classNames({ "c-listitem-completed": task.completed })}>
      <Checkbox {...props} onClick={onComplete} checked={task.completed} />
      {task.title}, {task.id}, {task.completed ? "true" : "false"}, {isEditing ? "true" : "false"}
      <DeleteOutlined onClick={onDelete} />
      <EditOutlined onClick={() => setIsEditing(!isEditing)} />
      <TaskInput hidden={!isEditing} task={task} />
    </List.Item>
  );
};

export default ListItem;
