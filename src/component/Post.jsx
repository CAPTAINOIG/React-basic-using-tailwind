import React, { useState } from 'react';
import { FaThumbsUp, FaRegThumbsUp, FaCommentDots, FaUserCircle } from 'react-icons/fa';
import { format } from 'date-fns';
import image1 from '../assets/image1.jpg'

const Post = () => {
  const [likeCount, setLikeCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');
  const [identity, setIdentity] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showComments, setShowComments] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
  };

  const handleCommentSubmit = () => {
    const newComment = {
      text: commentText,
      identity: identity || 'Anonymous',
      date: new Date(),
    };
    setComments([...comments, newComment]);
    setCommentText('');
    setIdentity('');
    setIsModalOpen(false);
  };

  return (
    <div id='background' className='py-20'>
    <div className="relative z-50 max-w-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <img 
        src={image1} 
        alt="Post" 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">Beautiful Post Title</h2>
        <p className="text-gray-600 mb-4">
          This is a beautiful post description that entices users to engage with the content.
        </p>
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={handleLike}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full transition ${
              isLiked ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
            }`}
          >
            {isLiked ? <FaThumbsUp /> : <FaRegThumbsUp />}
            <span>{likeCount}</span>
          </button>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-200 rounded-full text-gray-600 hover:bg-blue-600 hover:text-white transition"
          >
            <FaCommentDots />
            <span>Comment</span>
          </button>
        </div>
        
        <div className="mb-4">
          <button
            onClick={() => setShowComments(!showComments)}
            className="text-blue-600 hover:underline"
          >
            {showComments ? 'Hide Comments' : `Show Comments (${comments.length})`}
          </button>
        </div>
        
        {showComments && (
          <div>
            {comments.map((comment, index) => (
              <div 
                key={index} 
                className="p-2 mb-2 border border-gray-300 rounded-lg bg-gray-50 flex items-start space-x-2"
              >
                <FaUserCircle className="text-3xl text-gray-500" />
                <div>
                  <div className="text-gray-800 font-semibold">{comment.identity}</div>
                  <div className="text-gray-600 text-sm">{format(comment.date, 'PPpp')}</div>
                  <div className="mt-1 text-gray-700">{comment.text}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg max-w-md w-full shadow-lg">
            <input
              value={identity}
              onChange={(e) => setIdentity(e.target.value)}
              placeholder="Your identity (optional)"
              className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Write a comment..."
              className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex justify-end space-x-3">
              <button
                onClick={handleCommentSubmit}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              >
                Submit
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-200 text-gray-600 rounded-md hover:bg-gray-300 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default Post;
