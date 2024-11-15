import { getCommunitySongResponseType } from './getCommunitySongResponseType';
import { useQuery } from '@tanstack/react-query';

export const getCommunitySongs =
  async (): Promise<getCommunitySongResponseType> => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/community`,
        {
          method: 'GET',
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch community open songs!');
      }

      return await response.json();
    } catch (err) {
      throw new Error('Failed to fetch community open songs!');
    }
  };

export const useGetCommunitySongs = () => {
  return useQuery({
    queryKey: ['communitySong'],
    queryFn: getCommunitySongs,
  });
};
