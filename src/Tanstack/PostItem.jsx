import React from 'react';
import { useDeletePost } from './hooks/useDeletePost'; // Ensure this hook exists and is correctly implemented

const PostItem = ({ post }) => {
  const { mutate: deletePost, isLoading, isError, isSuccess, error } = useDeletePost();

  return (
    <li className="flex justify-between items-center p-2 border-b">
      <div>
        <h3 className="font-bold">{post.title}</h3>
        <p>{post.body}</p>
      </div>
      <button
        onClick={() => deletePost(post.id)}
        disabled={isLoading}
        className="bg-red-500 text-white p-1 rounded hover:bg-red-600"
      >
        Delete
      </button>
      {isError && <div className="text-red-500">An error occurred: {error.message}</div>}
      {isSuccess && <div className="text-green-500">Post deleted!</div>}
    </li>
  );
};

export default PostItem;
