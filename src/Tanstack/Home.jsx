// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    
  return (
    <div>
      <h1>Welcome to the Post Management App</h1>
      <p>Select an option below:</p>
      <ul>
        <li>
          <Link to="/posts">View Posts</Link>
        </li>
        <li>
          <Link to="/add-post">Add New Post</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
