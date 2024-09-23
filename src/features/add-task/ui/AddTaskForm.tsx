import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../../entities/task/model/taskSlice";
import styles from "./AddTaskForm.module.css";

const AddTaskForm: React.FC = () => {
  const [taskText, setTaskText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskText.trim()) {
      dispatch(addTask(taskText));
      setTaskText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        className={styles.input}
        placeholder="Добавить новую задачу"
      />
      <button type="submit" className={styles.button}>
        Добавить
      </button>
    </form>
  );
};

export default AddTaskForm;
