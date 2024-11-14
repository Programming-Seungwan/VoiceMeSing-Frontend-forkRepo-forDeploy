import { toggleSongOpenessResponseType } from './toggleSongOpenessResponseType';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const toggleSongOpeness = async (
  coverSongId: number,
  accessToken: string | null
): Promise<toggleSongOpenessResponseType> => {
  try {
    const toggleData = {
      coverSongId: coverSongId?.toString(),
    };

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/coversong-toggle`,
      {
        method: 'PATCH',
        credentials: 'include',
        headers: {
          access: `${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(toggleData),
      }
    );

    if (!response.ok) {
      throw new Error('Failed to toggle user song');
    }

    return await response.json();
  } catch (err) {
    throw new Error('Failed to toggle user song');
  }
};

export const useToggleSongOpeness = (
  coverSongId: number,
  accessToken: string | null
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => toggleSongOpeness(coverSongId, accessToken),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userSong', accessToken] });
    },
  });
};
