import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Task {
  id: string;
  text: string;
  completed: boolean;
}

interface TaskState {
  tasks: Task[];
}

const initialState: TaskState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      const newTask: Task = {
        id: Date.now().toString(),
        text: action.payload,
        completed: false,
      };
      state.tasks.push(newTask);
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    toggleTask: (state, action: PayloadAction<string>) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    editTask: (state, action: PayloadAction<{ id: string; text: string }>) => {
      const task = state.tasks.find((task) => task.id === action.payload.id);
      if (task) {
        task.text = action.payload.text;
      }
    },
    reorderTasks: (state, action: PayloadAction<{ tasks: Task[] }>) => {
      state.tasks = action.payload.tasks;
    },
  },
});

export const { addTask, deleteTask, toggleTask, editTask, reorderTasks } =
  taskSlice.actions;
export default taskSlice.reducer;
