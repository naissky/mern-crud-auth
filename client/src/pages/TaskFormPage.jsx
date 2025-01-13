import { useForm } from 'react-hook-form';
import { useTask } from '../context/TaskContext';

export function TaskFormPage() {
  const { register, handleSubmit } = useForm();
  const { tasks } = useTask();

  const onSubmit = handleSubmit((data) => {
    console.log(tasks);
  });

  return (
    <div className='min-h-[100vh] flex flex-col justify-center items-center'>
      <h1 className='text-3xl font-bold'>Task Form</h1>
      <form action='' onSubmit={onSubmit} className='mt-2 flex flex-col gap-2 w-full max-w-lg'>
        <input
          type='text'
          placeholder='Title'
          {...register('title')}
          autoFocus
          className='bg-zinc-100 text-zinc-950 p-2 rounded-xl'
        />
        <textarea
          rows='3'
          placeholder='Description'
          {...register('description')}
          className='bg-zinc-100 text-zinc-950 p-2 rounded-xl'
        ></textarea>
        <button type='submit' className='bg-[#f9bb3b] py-2 rounded-xl hover:bg-[#f9bb3b]/80'>save</button>
      </form>
    </div>
  );
}
