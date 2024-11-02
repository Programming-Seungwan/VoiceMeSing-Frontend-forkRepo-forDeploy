import Link from 'next/link';

export default function GoToSignUpPageSection() {
  return (
    <div className="mt-[20px]">
      <div>{"Don't have an account?"} </div>
      <Link
        href={'/signup'}
        className="flex justify-center items-center text-themeColor"
      >
        sign up
      </Link>
    </div>
  );
}
