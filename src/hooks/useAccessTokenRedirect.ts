import { useAppSelector, useAppDispatch } from './reduxHooks';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { replaceAccessTokenState } from '@context/slices/accessToken';

// 로그인되지 않은 사용자가 접근하려고 하면 다른 곳으로 보내야 함.
// accessToken이 없다면 refreshtoken 여부를 확인하고 그거도 없으면 논로그인 유저로 보내고 있으면 재발급
const useAccessTokenRedirect = () => {
  const router = useRouter();
  const accessToken = useAppSelector(
    (selector) => selector.accessToken.accessToken
  );
  const accessTokenDispatch = useAppDispatch();

  useEffect(() => {
    async function checkRtUsr() {
      const ifRtResponse = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/refresh`,
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
        router.replace('/NoneLoginUser');
      } else {
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
    }

    if (accessToken === null) {
      checkRtUsr();
    }
  }, [accessToken, router]);

  return accessToken;
};

export default useAccessTokenRedirect;
