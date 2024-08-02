import React, { useState } from 'react';
import logodark from '../Filedash/image/logodark.png'
import { IoEyeSharp } from "react-icons/io5";
import { IoEyeOffSharp } from "react-icons/io5";
import { useFormik } from 'formik';
import * as yup from 'yup'
import { Link } from 'react-router-dom';

const Signup = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState('text')
  // console.log(isPasswordVisible);

  const handlePasswordVisible = () => {
    setIsPasswordVisible(!isPasswordVisible)
  }

  let lower = new RegExp(`(?=.*[a-z])`);
  let upper = new RegExp(`(?=.*[A-Z])`);
  let number = new RegExp(`(?=.*[0-9])`);
  let length = new RegExp(`(?=.{8,})`);

  let formik = useFormik({
    initialValues:{
      firstname: '',
      lastname: '',
      email: '',
      password: '',
    },
    onSubmit:(values)=>{
      console.log(values);
    },
    validationSchema:yup.object({
      firstname: yup.string().required( <span className='flex'><span>This field is required</span></span> ),
      lastname: yup.string().required( <span className='flex'><span>This field is required</span></span> ),
      email: yup.string().email('Invalid email format').required( <span className='flex'><span>This field is required</span></span> ),
      password: yup.string().matches(lower, "Must include lowercase letter").matches(upper, "Must include uppercase letter").matches(number, "Must include a number").matches(length, "Must not be less than 8 characters").required("This field is required"),
    })
  })
  return (
    <section id='background' className='flex flex-col py-20 lg:py-8 md:py-8 pb-20 items-center justify-center'>
      <div className='content bg-white shadow rounded lg:w-[30%] md:w-[50%] w-[80%] p-5 px-5 mt-10'>
        <div className=''>
          <img className='mx-auto' src={logodark} alt="" />
        </div>
        <h1 className='my-3 text-center text-black'>Create account</h1>
        <form onSubmit={formik.handleSubmit} className='px-5'>
        <div className='my-3 h-[50px]'>
            <input className='border mt-1 h-[35px] rounded border-gray-300 py-2 px-4 w-full focus:outline-blue-700' onBlur={formik.handleBlur} onChange={formik.handleChange} type="firstname" placeholder="Firstname" name='firstname' />
            <span className='text-red-500 text-[12px]'>{formik.touched.firstname && formik.errors.firstname}</span>
          </div>
          <div className='my-3 h-[50px]'>
            <input className='border mt-1 rounded h-[35px] border-gray-300 py-2 px-4 w-full focus:outline-blue-700' onBlur={formik.handleBlur} onChange={formik.handleChange} type="lastname" placeholder="Lastname" name='lastname' />
            <span className='text-red-500 text-[12px]'>{formik.touched.lastname && formik.errors.lastname}</span>
          </div>
          <div className='my-3 h-[50px]'>
            <input className='border mt-1 rounded h-[35px] border-gray-300 py-2 px-4 w-full focus:outline-blue-700' onBlur={formik.handleBlur} onChange={formik.handleChange} type="email" placeholder="email" name='email' />
            <span className='text-red-500 text-[12px]'>{formik.touched.email && formik.errors.email}</span>
          </div>
          <div className='relative my-3 h-[50px]'>
            <input className='border rounded h-[35px] border-gray-300 py-2 px-4 w-full focus:outline-blue-700' type={isPasswordVisible ? 'text' : 'password'} placeholder="Password" onBlur={formik.handleBlur} onChange={formik.handleChange} name='password' />
            <span onClick={() => handlePasswordVisible('text')} className='absolute top-[12px] right-5'>{isPasswordVisible ? <span><IoEyeSharp /></span> : <span><IoEyeOffSharp /></span>}</span>
            <span className='text-red-500 text-[12px]'>{formik.touched.password && formik.errors.password}</span>
          </div>
          
          <button type='submit' className='btn font-bold w-full hover:bg-blue-900 bg-blue-700 p-1 my-3 rounded text-white'>Register</button>
        </form>
        <div className='border-b border-gray-300 my-5'></div>
        <div className='text-center text-gray-500 my-5'>Already have an account</div>
        <div className='text-center border font-bold text-sm w-[20%] mx-auto border-gray-300  my-5 hover:bg-gray-400 hover:border-gray-300 rounded'>
        <Link to="/signin" >Sign in!</Link>
        </div>
      </div>
    </section>
  );
};

export default Signup;
