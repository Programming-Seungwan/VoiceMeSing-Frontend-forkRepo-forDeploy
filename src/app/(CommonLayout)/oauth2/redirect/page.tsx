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
    async function getTokenReformat() {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/token-reformat`,
        {
          method: 'POST',
          credentials: 'include',
        }
      );

      if (!response.ok) {
        throw new Error(
          'failed to reformat token based on at and rt in cookie!'
        );
      }

      const data = response.headers.get('access');
      accessTokenDispatcher(replaceAccessTokenState(data));
      router.replace('/');
    }

    try {
      getTokenReformat();
    } catch (err) {
      router.replace('/NoneLoginUser');
    }
  }, []);

  return (
    <main className="rightMain">
      <RedirectSpinning />
    </main>
  );
}
