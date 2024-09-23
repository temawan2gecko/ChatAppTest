import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import TodoPage from "./pages/todo-page/ui/TodoPage";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <DndProvider backend={HTML5Backend}>
      <TodoPage />
    </DndProvider>
  </Provider>
);
