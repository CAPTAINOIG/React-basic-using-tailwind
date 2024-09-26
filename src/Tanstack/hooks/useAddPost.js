// src/hooks/useAddPost.js
import { useMutation, useQueryClient } from '@tanstack/react-query';
import AxiosInstance from '../AxiosInstance';

const addPost = async (newPost) => {
  const { data } = await AxiosInstance.post('posts', newPost);
  return data;
};

export const useAddPost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addPost,
    onSuccess: () => {
      queryClient.invalidateQueries(['posts']);
    },
  });
};
