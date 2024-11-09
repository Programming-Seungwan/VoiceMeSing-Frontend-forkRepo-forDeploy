import { collectionModelType } from '@_type/collection/model/collectionModelType';
import { useQuery } from '@tanstack/react-query';

type userModelsResponse = collectionModelType[];

export const getUserModel = async (
  accessToken: string
): Promise<userModelsResponse> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/collection-model`,
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
        '사용자의 collecion model 페이지의 음성 모델을 불러오는 데에 실패했습니다!'
      );
    }

    const responseData = await response.json();
    return responseData.data;
  } catch (err) {
    throw new Error(
      '사용자의 collecion model 페이지의 음성 모델을 불러오는 데에 실패했습니다!'
    );
  }
};

export const useGetUserModel = (accessToken: string) => {
  return useQuery({
    queryKey: ['userModel', accessToken],
    queryFn: () => getUserModel(accessToken),
  });
};
