'use client';
import Logo from './Logo';
import LogIn from './LogIn';
import Logout from './Logout';
import Tabs from './Tabs';
import { useAppSelector, useAppDispatch } from '@hooks/reduxHooks';
import { replaceAccessTokenState } from '@context/slices/accessToken';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import SideNavBarSkeleton from './SideNavBarSkeleton';

export default function SideNavBar() {
  const accessTokenSelector = useAppSelector(
    (selector) => selector.accessToken.accessToken
  );

  const [ifFirstSideBarRender, setIfFirstSideBarRender] =
    useState<boolean>(true);

  useEffect(() => {
    setIfFirstSideBarRender(false);
  }, []);

  const accessTokenDispatcher = useAppDispatch();
  const router = useRouter();

  const invalidateRefreshToken = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/logout`,
      {
        method: 'POST',
        credentials: 'include',
      }
    );

    if (!response.ok) {
      throw new Error('로그아웃에 실패했습니다!');
    }
  };

  const handleLogout = (): void => {
    invalidateRefreshToken();
    accessTokenDispatcher(replaceAccessTokenState(null));
    router.replace('/');
  };

  if (ifFirstSideBarRender === true) {
    return <SideNavBarSkeleton />;
  }

  return (
    <nav className="w-[300px] h-full flex flex-col items-center bg-backgroundNavy text-white gap-x-4 overflow-y-scroll shadow-sideNavBarShadow">
      <Logo />
      {accessTokenSelector === null ? (
        <LogIn />
      ) : (
        <Logout handleClickLogout={handleLogout} />
      )}
      <Tabs />
    </nav>
  );
}
