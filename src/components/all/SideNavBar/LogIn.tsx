import UnlockSVG from '@public/SideNavBar/UnlockSVG.svg';

export default function LogIn() {
  return (
    <div
      id="login-outerDiv"
      className="w-[275px] h-[50px] flex justify-center items-center hover:cursor-pointer"
    >
      <div
        id="login-innerDiv"
        className="w-[240px] h-[35px] rounded bg-lightNavy flex justify-center items-center gap-x-8"
      >
        <p>LOG IN</p>
        <UnlockSVG />
      </div>
    </div>
  );
}
