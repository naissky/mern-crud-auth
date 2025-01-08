import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../context/AuthContext';

export function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const navegate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navegate('/tasks');
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  return (
    <div className='flex flex-col min-h-[100vh] items-center justify-center'>
      <div className='max-w-lg w-full bg-zinc-100 p-5 rounded-2xl'>
        <h2 className='text-[#f9bb3b] font-medium'>Create an account</h2>
        {
          registerErrors.map((error, i) => (
            <div className='text-red-500 py-4 font-medium' key={i}>
              {error}
            </div>
          ))
        }
        <form
          className='flex flex-col items-center gap-3 bg-zinc-100'
          onSubmit={onSubmit}
        >
          <input
            placeholder='username'
            className='w-full text-black bg-transparent border-b-2 px-2 py-4'
            type='text'
            {...register('username', { required: true })}
          />
          {
            errors.username && ( 
              <p className='text-red-400'>Username is required</p>
             )
          }
          <input
            placeholder='email'
            className='w-full text-black bg-transparent border-b-2 px-2 py-4'
            type='email'
            {...register('email', { required: true })}
          />
          {
            errors.email && (
              <p className='text-red-400'>Email is required</p>
              )
          }
          <input
            placeholder='password'
            className='w-full text-black bg-transparent border-b-2 px-2 py-4'
            type='password'
            {...register('password', { required: true })}
          />
          {
            errors.password && (
              <p className='text-red-400'>Password is required</p>
            )
          }
          <button
            type='submit'
            className='w-full px-4 py-4 rounded-xl bg-[#534a93]'
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
