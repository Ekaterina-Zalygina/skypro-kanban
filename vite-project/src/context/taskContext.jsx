import { createContext, useContext, useState } from "react";

export const TaskContext = createContext(null);

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState(null);

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
};

export function useTaskContext() {
  return useContext(TaskContext);
}
