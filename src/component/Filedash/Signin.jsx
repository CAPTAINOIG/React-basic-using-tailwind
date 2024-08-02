import React from 'react';
import logodark from '../Filedash/image/logodark.png'
import { FaFacebookF } from "react-icons/fa6";
import { TiSocialTwitter } from "react-icons/ti";
import { IoLogoDribbble } from "react-icons/io";
import { TiSocialLinkedin } from "react-icons/ti";
import { IoLogoGoogle } from "react-icons/io";
import { TbBrandBehance } from "react-icons/tb";
import { Link } from 'react-router-dom';


const SignIn = () => {
  return (
    <div id='background' className="min-h-screen flex items-center justify-center py-10">
      <div className="preloader">
        <div className="preloader-icon"></div>
      </div>
      <div className="content bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <div id="logo" className="mb-6">
        <img className='mx-auto' src={logodark} alt="" />
        </div>
        <h5 className="text-center mb-6 font-bold">Sign in</h5>
        <form>
          <div className="form-group mb-4">
            <input type="text" className="form-control w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="email"
            />
          </div>
          <div className="form-group mb-4">
            <input
              type="password" className="form-control w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Password"
            />
          </div>
          <div className="flex justify-between items-center mb-4">
            <div className="custom-control custom-checkbox flex items-center">
              <input type="checkbox" className="custom-control-input" id="customCheck1" defaultChecked/>
              <label className="custom-control-label ml-2" htmlFor="customCheck1">Remember me</label>
            </div>
            <Link to="#" className="text-blue-600 hover:underline">Reset password</Link>
          </div>
          <button className="btn btn-primary btn-block w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700">Sign in</button>
          <hr className="my-6" />
          <p className="text-center text-gray-600 mb-6">Login with your social media account.</p>
          <ul className="list-inline flex justify-center space-x-4 mb-6">
            <li className="list-inline-item">
              <Link to="#" className="btn btn-floating bg-blue-600 text-black w-10 h-10 flex items-center justify-center rounded-full">
              <i class="fa fa-behance"><FaFacebookF /></i>
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="#" className="btn btn-floating bg-blue-400 text-black w-10 h-10 flex items-center justify-center rounded-full">
              <i class="fa fa-behance"><TiSocialTwitter /></i>
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="#" className="btn btn-floating bg-pink-600 text-black w-10 h-10 flex items-center justify-center rounded-full">
              <i class="fa fa-behance"><IoLogoDribbble /></i>
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="#" className="btn btn-floating bg-blue-700 text-black w-10 h-10 flex items-center justify-center rounded-full">
              <i class="fa fa-behance"><TiSocialLinkedin /></i>
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="#" className="btn btn-floating bg-red-600 text-black w-10 h-10 flex items-center justify-center rounded-full">
              <i class="fa fa-behance"><IoLogoGoogle /></i>
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="#" className="btn btn-floating bg-blue-500 text-black w-10 h-10 flex items-center justify-center rounded-full">
              <i class="fa fa-behance"><TbBrandBehance /></i>
              </Link>
            </li>
          </ul>
          <hr className="my-6" />
          <p className="text-center text-gray-600 mb-4">Don't have an account?</p>
          <div className='text-center border font-bold text-sm w-[40%] mx-auto border-gray-300  my-5 hover:bg-gray-400 hover:border-gray-300 rounded'>
          <Link to="/signup" >Register now!</Link>
        </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
