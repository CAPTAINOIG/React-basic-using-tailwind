import React, { useState } from 'react';
import logodark from '../Filedash/image/logodark.png'
import { IoEyeSharp } from "react-icons/io5";
import { IoEyeOffSharp } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareDribbble } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaSquareBehance } from "react-icons/fa6";
import { useFormik } from 'formik';
import * as yup from 'yup'
import { Link } from 'react-router-dom';

const Signin = () => {
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
      email: '',
      password: '',
    },
    onSubmit:(values)=>{
      console.log(values);
    },
    validationSchema:yup.object({
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
        <h1 className='my-5 text-center text-black'>Sign In</h1>
        <form onSubmit={formik.handleSubmit} className='px-5'>
          <div className='my-3 h-[50px]'>
            <input className='border mt-1 h-[35px] rounded border-gray-300 py-2 px-4 w-full focus:outline-blue-700' onBlur={formik.handleBlur} onChange={formik.handleChange} type="email" placeholder="email" name='email' />
            <span className='text-red-500 text-[12px]'>{formik.touched.email && formik.errors.email}</span>
          </div>
          <div className='relative my-5 h-[50px]'>
            <input className='border mt-1 h-[35px] rounded border-gray-300 py-2 px-4 w-full focus:outline-blue-700' type={isPasswordVisible ? 'text' : 'password'} placeholder="Password" onBlur={formik.handleBlur} onChange={formik.handleChange} name='password' />
            <span onClick={() => handlePasswordVisible('text')} className='absolute top-[15px] right-5'>{isPasswordVisible ? <span><IoEyeSharp /></span> : <span><IoEyeOffSharp /></span>}</span>
            <span className='text-red-500 text-[12px]'>{formik.touched.password && formik.errors.password}</span>
          </div>

          <div>
            <div className='flex justify-between my-5'>
              <div className='flex gap-1'>
                <span><input type="checkbox" /></span>
                <span>Remember Me</span>
              </div>
              <div>
                <Link to="">Reset password</Link>
              </div>
            </div>
          </div>
          <button type='submit' className='btn font-bold w-full hover:bg-blue-900 bg-blue-700 p-1 my-3 rounded text-white'>Sign in</button>
        </form>
        <div className='border-b border-gray-300 my-5'></div>
        <p class="text-muted text-center">Login with your social media account.</p>
        <ul className='flex text-blue-700 gap-7 my-5 lg:px-5 md:px-5 '>
          <li className='border border-blue-700 rounded-full bg-blue-700 p-1 text-white'>
            <a href="#" class="btn btn-floating btn-facebook">
              <i class="fa fa-facebook"><FaFacebook /></i>
            </a>
          </li>
          <li className='border border-blue-700 rounded-full bg-blue-700 p-1 text-white'>
            <a href="#" class="btn btn-floating btn-twitter">
              <i class="fa fa-twitter"><FaSquareXTwitter /></i>
            </a>
          </li>
          <li className='border border-blue-700 rounded-full bg-blue-700 p-1 text-white'>
            <a href="#" class="btn btn-floating btn-dribbble">
              <i class="fa fa-dribbble"><FaSquareDribbble /></i>
            </a>
          </li>
          <li className='border border-blue-700 rounded-full bg-blue-700 p-1 text-white'>
            <a href="#" class="btn btn-floating btn-linkedin">
              <i class="fa fa-linkedin"><FaLinkedin /></i>
            </a>
          </li>
          <li className='border border-blue-700 rounded-full bg-blue-700 p-1 text-white'>
            <a href="#" class="btn btn-floating btn-google">
              <i class="fa fa-google"><AiFillGoogleCircle /></i>
            </a>
          </li>
          <li className='border border-blue-700 rounded-full bg-blue-700 p-1 text-white'>
            <a href="#" class="btn btn-floating btn-behance">
              <i class="fa fa-behance"><FaSquareBehance /></i>
            </a>
          </li>
        </ul>
        <hr />
        <div className='text-center text-gray-500 my-5'>Dont have an Account?</div>
        <div className='text-center border font-bold text-sm w-[40%] mx-auto border-gray-300  my-5 hover:bg-gray-400 hover:border-gray-300 rounded'>
        <Link to="/signup" >Register now!</Link>
        </div>
      </div>
    </section>
  );
};

export default Signin;
