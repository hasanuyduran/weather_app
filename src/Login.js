import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';



const SignupForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const navigate = useNavigate();


  return (
    <div class="flex items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit(onSubmit)} class="bg-blue-700 p-4 text-white container mx-auto w-1/4 rounded shadow-2xl ">
        <div class="m-7 " >
          <label class="me-5 w-1/3" >Username</label>
          <input class="rounded w-2/3" {...register("username", { required: "Username is required" })} />
          {errors.username && <p>{errors.username.message}</p>}
        </div>
        
        <div class="m-7 ">
          <label class="me-6 w-1/3">Password</label>
          <input class="rounded w-2/3" type="password" {...register("password", { required: "Password is required" })} />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <div class="grid justify-items-end">
          <button onClick={navigate('/users')} class="bg-green-700 px-10 py-2 rounded-md " type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;