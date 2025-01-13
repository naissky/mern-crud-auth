import { createContext, useContext, useState } from 'react';

const TaskContext = createContext();

export const useTask = () => {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error('useTask must be used within a TaskProvider');
  }

  return context;
};

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  return <TaskContext.Provider value={{tasks, }}>{children}</TaskContext.Provider>;
}
