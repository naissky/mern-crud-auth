import { useTask } from '../context/TaskContext';
import { useEffect } from 'react';

export function TasksPage() {
  const { getTasks, tasks } = useTask();

  useEffect(() => {
    getTasks();
  }, []);

  if (tasks.length === 0) return <div>No tasks</div>;

  return (
    <div>
      <div className='grid grid-cols-9 gap-2 p-5'>
        {tasks.map((task) => (
          <div className='col-span-9 md:col-span-3 bg-zinc-100 p-5 rounded-xl text-zinc-950' key={task._id}>
            <h2 className='font-bold text-xl'>{task.title}</h2>
            <p className='text-sm text-zinc-600'>{task.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
