import React from 'react';
import { usePosts } from './hooks/usePosts'; // Ensure correct import path
import PostItem from './PostItem';

const PostsList = () => {
  const { data, error, isLoading } = usePosts();

  if (isLoading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-center text-red-500">An error occurred: {error.message}</div>;

  return (
    <ul className="space-y-2">
      {data.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </ul>
  );
};

export default PostsList;
