import { createContext, useEffect, useState } from "react"

export const TaskContext = createContext(null)

export const TasksProvider = ({children}) => {

    const [tasks, setTasks] = useState(null)

    useEffect(() => {
       const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
       setTasks(storedTasks);
   }, []);

   useEffect(() => {
       localStorage.setItem('tasks', JSON.stringify(tasks));
     }, [tasks]);

     return (
       <TaskContext.Provider value={{ tasks, setTasks }}>{children}</TaskContext.Provider>
     );
};
