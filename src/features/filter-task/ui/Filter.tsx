import React from "react";
import { useDispatch } from "react-redux";
import { setFilterStatus } from "../model/filterSlice";
import styles from "./Filter.module.css";

const Filter: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.filter}>
      <button onClick={() => dispatch(setFilterStatus("all"))}>Все</button>
      <button onClick={() => dispatch(setFilterStatus("completed"))}>
        Выполненные
      </button>
      <button onClick={() => dispatch(setFilterStatus("incomplete"))}>
        Невыполненные
      </button>
    </div>
  );
};

export default Filter;
