import { useForm } from 'react-hook-form';
import { registerRequest } from '../api/auth'

export function RegisterPage() {
  const { register, handleSubmit } = useForm();

  return (
    <div className='flex flex-col min-h-[100vh] items-center justify-center'>
      <div className='max-w-lg w-full bg-zinc-100 p-5'>
        <h2 className='text-[#f9bb3b] font-medium'>Create an account</h2>
        <form
          className='flex flex-col items-center gap-3 bg-zinc-100'
          onSubmit={handleSubmit(async (values) => {
              console.log(values);
              const res = await registerRequest(values);
              console.log(res);
          })}
        >
          <input
            placeholder='username'
            className='w-full text-black bg-transparent border-b-2 px-2 py-4'
            type='text'
            {...register('username', { required: true })}
          />
          <input
            placeholder='email'
            className='w-full text-black bg-transparent border-b-2 px-2 py-4'
            type='email'
            {...register('email', { required: true })}
          />
          <input
            placeholder='password'
            className='w-full text-black bg-transparent border-b-2 px-2 py-4'
            type='password'
            {...register('password', { required: true })}
          />
          <button type='submit' className='w-full px-4 py-4 bg-[#534a93]'>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
