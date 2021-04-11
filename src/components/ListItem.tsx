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
    <List.Item className={classNames("c-listitem", { "c-listitem-completed": task.completed })}>
      <span className="c-listitem-row">
        <Checkbox className="c-checkbox" {...props} onClick={onComplete} checked={task.completed} />
        <span className="c-listitem-description">
          {task.title}, {task.id}, {task.completed ? "true" : "false"}, {isEditing ? "true" : "false"}
        </span>
        <span className="c-icons">
          <DeleteOutlined onClick={onDelete} />
          <EditOutlined onClick={() => setIsEditing(!isEditing)} />
        </span>
      </span>
      <span className="c-listitem-row">
        <TaskInput hidden={!isEditing} task={task} />
      </span>
    </List.Item>
  );
};

export default ListItem;
