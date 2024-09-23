import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../app/store";
import TaskItem from "./TaskItem";
import { reorderTasks } from "../model/taskSlice";
import styles from "./TaskList.module.css";

const TaskList: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const filterStatus = useSelector((state: RootState) => state.filter.status);
  const dispatch = useDispatch();

  const filteredTasks = tasks.filter((task) => {
    if (filterStatus === "completed") return task.completed;
    if (filterStatus === "incomplete") return !task.completed;
    return true;
  });

  const moveTask = (dragIndex: number, hoverIndex: number) => {
    const taskToMove = filteredTasks[dragIndex];
    const reorderedTasks = [...filteredTasks];
    reorderedTasks.splice(dragIndex, 1);
    reorderedTasks.splice(hoverIndex, 0, taskToMove);
    dispatch(reorderTasks({ tasks: reorderedTasks }));
  };

  return (
    <ul className={styles.list}>
      {filteredTasks.map((task, index) => (
        <TaskItem key={task.id} task={task} index={index} moveTask={moveTask} />
      ))}
    </ul>
  );
};

export default TaskList;
