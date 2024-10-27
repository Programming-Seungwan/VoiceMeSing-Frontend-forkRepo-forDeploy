'use client';
import RedirectSpinning from '@components/oauth2/redirect/RedirectSpinning';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAppDispatch } from '@hooks/reduxHooks';
import { replaceAccessTokenState } from '@context/slices/accessToken';

export default function OauthRedirectPage() {
  const router = useRouter();
  const accessTokenDispatcher = useAppDispatch();

  useEffect(() => {
    // 백엔드 api 호출

    if (true) {
      // 백엔드에서 받아온 api reponse로 도착한 accessToken을 프론트엔드 상태로 관리
      // accessTokenDispatcher(replaceAccessTokenState('sd'));
      // router.replace('/');
    } else {
      router.replace('/NoneLoginUser');
    }
  }, []);

  return (
    <main className="rightMain">
      <RedirectSpinning />
    </main>
  );
}
