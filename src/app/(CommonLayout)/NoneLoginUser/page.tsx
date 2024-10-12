import Link from 'next/link';

export default function NoneLoginUserPage() {
  return (
    <div className="rightMain h-full justify-center items-center">
      <span className="text-white normalFont text-[35px]">None Login User</span>
      <span className="text-[15px] text-progressBarGray mt-[50px]">
        Oops! You have to login before using some pages
      </span>
      <Link
        href={'/login'}
        className="w-[150px] h-[60px] text-white bg-themeColor rounded-[10px] mt-[100px] flex justify-center items-center text-base"
      >
        Go to Login Page
      </Link>
    </div>
  );
}
