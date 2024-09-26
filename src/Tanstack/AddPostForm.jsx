// src/components/AddPostForm.js
import React, { useState } from 'react';
import { useAddPost } from './hooks/useAddPost';

const AddPostForm = () => {
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const { mutate: addPost, isLoading, isError, isSuccess, error } = useAddPost();

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost({ title: postTitle, body: postBody, userId: 1 });
    setPostTitle('');
    setPostBody('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        value={postTitle}
        onChange={(e) => setPostTitle(e.target.value)}
        placeholder="Post title"
        required
        className="border rounded p-2 w-full"
      />
      <textarea
        value={postBody}
        onChange={(e) => setPostBody(e.target.value)}
        placeholder="Post body"
        required
        className="border rounded p-2 w-full"
      />
      <button
        type="submit"
        disabled={isLoading}
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Add Post
      </button>
      {isError && <div className="text-red-500">An error occurred: {error.message}</div>}
      {isSuccess && <div className="text-green-500">Post added!</div>}
    </form>
  );
};

export default AddPostForm;
