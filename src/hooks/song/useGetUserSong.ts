import { collectionSongType } from '@_type/collection/song/collectionSongType';
import { useQuery } from '@tanstack/react-query';

type userSongsResponse = collectionSongType[];

export const getUserSong = async (
  accessToken: string
): Promise<userSongsResponse> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/collection-coversong`,
      {
        method: 'GET',
        credentials: 'include',
        headers: {
          access: `${accessToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        '사용자의 collection song 페이지의 AI cover song 목록을 불러오는 데에 실패했습니다!'
      );
    }

    const responseData = await response.json();
    return responseData.data;
  } catch (err) {
    throw new Error(
      '사용자의 collection song 페이지의 AI cover song 목록을 불러오는 데에 실패했습니다!'
    );
  }
};

export const useGetUserSong = (accessToken: string) => {
  return useQuery({
    queryKey: ['userSong', accessToken],
    queryFn: () => getUserSong(accessToken),
  });
};
