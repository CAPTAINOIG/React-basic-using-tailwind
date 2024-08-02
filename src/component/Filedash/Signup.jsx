import React from 'react';
import logodark from '../Filedash/image/logodark.png'
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div id='background' className="form-membership min-h-screen flex items-center justify-center py-10">
      <div className="preloader absolute inset-0 flex items-center justify-center">
        <div className="preloader-icon animate-spin"></div>
      </div>
      <div className="content bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <div id="logo" className="mb-6">
        <img className='mx-auto' src={logodark} alt="" />
        </div>
        <h5 className="text-center mb-6">Create account</h5>
        <form>
          <div className="form-group mb-4">
            <input type="text" className="form-control w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Firstname" required autoFocus />
          </div>
          <div className="form-group mb-4">
            <input type="text" className="form-control w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Lastname" required />
          </div>
          <div className="form-group mb-4">
            <input
              type="email" className="form-control w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Email" required/>
          </div>
          <div className="form-group mb-4">
            <input type="password" className="form-control w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Password" required />
          </div>
          <button className="btn btn-primary btn-block w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700"> Register</button>
          <hr className="my-6" />
          <p className="text-center text-gray-600 mb-4">Already have an account?</p>
          <div className='text-center border font-bold text-sm w-[20%] mx-auto border-gray-300  my-5 hover:bg-gray-400 hover:border-gray-300 rounded'>
        <Link to="/signin" >Sign in!</Link>
        </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
