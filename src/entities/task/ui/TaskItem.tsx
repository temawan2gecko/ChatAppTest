import React from "react";
import { useDispatch } from "react-redux";
import { useDrag, useDrop } from "react-dnd";
import { toggleTask, deleteTask } from "../model/taskSlice";
import styles from "./TaskList.module.css";

interface TaskItemProps {
  task: {
    id: string;
    text: string;
    completed: boolean;
  };
  index: number;
  moveTask: (dragIndex: number, hoverIndex: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, index, moveTask }) => {
  const dispatch = useDispatch();

  const [, drag] = useDrag({
    type: "TASK",
    item: { index },
  });

  const [, drop] = useDrop({
    accept: "TASK",
    hover: (item: { index: number }) => {
      if (item.index !== index) {
        moveTask(item.index, index);
        item.index = index;
      }
    },
  });

  return (
    <li ref={(node) => drag(drop(node))} className={styles.item}>
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={task.completed}
        onChange={() => dispatch(toggleTask(task.id))}
      />
      <span
        className={`${styles.text} ${task.completed ? styles.completed : ""}`}
      >
        {task.text}
      </span>
      <button
        className={styles.button}
        onClick={() => dispatch(deleteTask(task.id))}
      >
        Delete
      </button>
    </li>
  );
};

export default TaskItem;
