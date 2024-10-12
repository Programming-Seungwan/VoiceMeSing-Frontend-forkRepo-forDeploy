'use client';
import Logo from './Logo';
import LogIn from './LogIn';
import Logout from './Logout';
import Tabs from './Tabs';
import { useAppSelector } from '@hooks/reduxHooks';

export default function SideNavBar() {
  const accessTokenSelector = useAppSelector(
    (selector) => selector.accessToken.accessToken
  );
  return (
    <nav className="w-[300px] h-full flex flex-col items-center bg-backgroundNavy text-white gap-x-4 overflow-y-scroll shadow-sideNavBarShadow">
      <Logo />
      {accessTokenSelector === null ? <LogIn /> : <Logout />}
      <Tabs />
    </nav>
  );
}
