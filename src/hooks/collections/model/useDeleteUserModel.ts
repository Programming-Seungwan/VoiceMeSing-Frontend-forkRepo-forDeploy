import { useMutation, useQueryClient } from '@tanstack/react-query';
import { modelDeleteResponseType } from './modelDeleteResponseType';

export const deleteUserModel = async (
  voiceModelId: number,
  accessToken: string | null
): Promise<modelDeleteResponseType> => {
  try {
    const modelData = {
      voiceModelId: voiceModelId.toString(),
    };

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/model-delete`,
      {
        method: 'DELETE',
        credentials: 'include',
        headers: {
          access: `${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(modelData),
      }
    );

    if (!response.ok) {
      throw new Error('Failed to delete user model!');
    }

    return await response.json();
  } catch (err) {
    throw new Error('Failed to delete user model!');
  }
};

export const useDeleteUserModel = (
  voiceModelId: number,
  accessToken: string | null
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => deleteUserModel(voiceModelId, accessToken),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userModel', accessToken] });
    },
  });
};
