import { songDeleteResponseType } from './songDeleteResponseType';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const deleteUserSong = async (
  coverSongId: number,
  accessToken: string | null
): Promise<songDeleteResponseType> => {
  try {
    const songData = {
      coverSongId: coverSongId.toString(),
    };

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/coversong-delete`,
      {
        method: 'DELETE',
        credentials: 'include',
        headers: {
          access: `${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(songData),
      }
    );

    if (!response.ok) {
      throw new Error('Failed to delete user AI cover song!');
    }

    return await response.json();
  } catch (err) {
    throw new Error('Failed to delete user AI cover song!');
  }
};

export const useDeleteUserSong = (
  coverSongId: number,
  accessToken: string | null
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => deleteUserSong(coverSongId, accessToken),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userSong', accessToken] });
    },
  });
};
