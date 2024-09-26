import { useQuery } from '@tanstack/react-query';
import AxiosInstance from '../AxiosInstance';

export const usePosts = () => {
  return useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const { data } = await AxiosInstance.get('posts');
      return Array.isArray(data) ? data : [];
    },
  });
};


// useQuery is used for fetching data, while useMutation is used for creating/updating/deleting data.