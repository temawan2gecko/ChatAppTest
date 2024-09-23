import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "../entities/task/model/taskSlice";
import filterSlice from "../features/filter-task/model/filterSlice";

export const store = configureStore({
  reducer: {
    tasks: taskSlice,
    filter: filterSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
