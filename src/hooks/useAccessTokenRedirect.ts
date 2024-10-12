import { useAppSelector } from './reduxHooks';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const useAccessTokenRedirect = () => {
  const router = useRouter();
  const accessToken = useAppSelector(
    (selector) => selector.accessToken.accessToken
  );

  useEffect(() => {
    if (accessToken === null) {
      router.replace('/NoneLoginUser');
    }
  }, [accessToken]);
};

export default useAccessTokenRedirect;
