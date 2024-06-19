import Logo from './Logo';
import LogIn from './LogIn';
import Tabs from './Tabs';

export default function SideNavBar() {
  return (
    <nav className="w-[300px] h-full flex flex-col items-center bg-backgroundNavy text-white gap-x-4 overflow-y-scroll shadow-sideNavBarShadow">
      <Logo />
      <LogIn />
      <Tabs />
    </nav>
  );
}
