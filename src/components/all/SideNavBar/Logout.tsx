import LockSVG from '@public/SideNavBar/LockSVG.svg';

export default function Logout() {
  return (
    <div
      id="logout-outerDiv"
      className="w-[275px] h-[50px] flex justify-center items-center hover:cursor-pointer"
    >
      <div
        id="logout-innerDiv"
        className="w-[240px] h-[35px] rounded bg-lightNavy flex justify-center items-center gap-x-8"
      >
        <p>LOG OUT</p>
        <LockSVG />
      </div>
    </div>
  );
}
