import React from "react";
import AddTaskForm from "../../../features/add-task/ui/AddTaskForm";
import TaskList from "../../../entities/task/ui/TaskList";
import Filter from "../../../features/filter-task/ui/Filter";
import styles from "./TodoPage.module.css";

const TodoPage: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>Список задач</h1>
        <AddTaskForm />
        <Filter />
        <TaskList />
      </div>
    </div>
  );
};

export default TodoPage;
