import { Empty, List as AntList } from "antd";
import React, { FC } from "react";
import { Task } from "../state/types";
import { ListItem } from ".";

interface ListProps {
  tasks: Task[];
}

const List: FC<ListProps> = ({ tasks }: ListProps) => {
  return (
    <AntList
      className="c-list"
      dataSource={tasks}
      locale={{ emptyText: <Empty description="No tasks." /> }}
      renderItem={(task, index) => <ListItem key={task.title + index} task={task} />}
    />
  );
};

export default List;
