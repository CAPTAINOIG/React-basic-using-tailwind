// src/hooks/useDeletePost.js
import { useMutation, useQueryClient } from '@tanstack/react-query';
import AxiosInstance from '../AxiosInstance';

const deletePost = async (postId) => {
  await AxiosInstance.delete(`posts/${postId}`);
};

export const useDeletePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries(['posts']);
    },
  });
};
