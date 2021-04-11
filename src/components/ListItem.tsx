import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Checkbox, CheckboxProps, Divider, List } from "antd";
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
    <List.Item className={classNames("c-listitem", { "c-listitem-completed": task.completed })}>
      <span className="c-listitem-row">
        <span className="c-checkbox">
          <Checkbox onClick={onComplete} checked={task.completed} />
        </span>
        <span className="c-listitem-description">{task.title}</span>
        <span className="c-icons">
          <EditOutlined onClick={() => setIsEditing(!isEditing)} />
          <DeleteOutlined onClick={onDelete} />
        </span>
      </span>
      <span className={classNames({ "c-hidden": !isEditing })}>
        <Divider />
        <span className="c-listitem-input">
          <TaskInput hidden={!isEditing} task={task} />
        </span>
      </span>
    </List.Item>
  );
};

export default ListItem;
