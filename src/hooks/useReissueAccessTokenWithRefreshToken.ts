import { useAppDispatch, useAppSelector } from './reduxHooks';
import { useEffect } from 'react';
import { replaceAccessTokenState } from '@context/slices/accessToken';

// 기존의 accessToken이 사라지면 다시 받아올 필요가 있음
// 먼저 rt가 있는지를 검사해서 없으면 종료시키고, 있다면 access Token을 새로 받아와서 전역 상태로 만듬
const useReissueAccessTokenWithRefreshToken = () => {
  const accessTokenGlobalState = useAppSelector(
    (selector) => selector.accessToken.accessToken
  );
  const accessTokenDispatch = useAppDispatch();

  useEffect(() => {
    async function reissueAccessTokenWithRefreshToken(): Promise<void> {
      const ifRtResponse = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/refresh-check`,
        {
          method: 'POST',
          credentials: 'include',
        }
      );

      if (!ifRtResponse.ok) {
        throw new Error('/refresh API 접근이 실패했습니다.');
      }

      const ifRtResponseData = await ifRtResponse.json();
      if (!ifRtResponseData.data) {
        // rt가 쿠키에 없는 사용자는 reissue 요청을 보내지 않음
        return;
      }

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/reissue`,
        {
          method: 'POST',
          credentials: 'include',
        }
      );

      if (!response.ok) {
        throw new Error('accessToken의 재발급에 실패했습니다!');
      }
      const at = response.headers.get('access');

      if (typeof at === 'string') {
        accessTokenDispatch(replaceAccessTokenState(at));
      }
    }

    // 추후에 백엔드로 요청을 보내 rt가 발급된 적이 없다면 재발급 요청을 보내지도 말아야 하는 if 문 작성 필요

    if (accessTokenGlobalState === null) {
      reissueAccessTokenWithRefreshToken();
    }
  }, [accessTokenGlobalState]);

  return accessTokenGlobalState;
};

export default useReissueAccessTokenWithRefreshToken;
