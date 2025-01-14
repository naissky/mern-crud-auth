import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';

export function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signin, errors: signinError, isAuthenticated } = useAuth();
  const navegate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  useEffect(() => {
    if (isAuthenticated) navegate('/tasks');
  }, [isAuthenticated]);

  
  return (
    <div className='min-h-[100vh] flex justify-center items-center'>
      <div className='w-full max-w-lg p-5'>
        {signinError.map((error, i) => (
          <div
            className='bg-red-500 text-white py-2 px-4 mb-2 font-medium'
            key={i}
          >
            {error}
          </div>
        ))}
        <form
          className='p-5 rounded-xl flex flex-col items-center gap-3 bg-zinc-100'
          onSubmit={onSubmit}
        >
          <input
            placeholder='email'
            className='w-full text-black bg-transparent border-b-2 px-2 py-4'
            type='email'
            {...register('email', { required: true })}
          />
          {errors.email && <p className='text-red-400'>Email is required</p>}
          <input
            placeholder='password'
            className='w-full text-black bg-transparent border-b-2 px-2 py-4'
            type='password'
            {...register('password', { required: true })}
          />
          {errors.password && (
            <p className='text-red-400'>Password is required</p>
          )}
          <button
            type='submit'
            className='w-full px-4 py-4 rounded-xl bg-[#534a93]'
          >
            Login
          </button>
        </form>

        <p>
          Dont have an account?{' '}
          <Link className='underline text-purple-900' to='/register'>
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
