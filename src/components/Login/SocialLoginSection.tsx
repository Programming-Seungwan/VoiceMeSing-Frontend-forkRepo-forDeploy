import SocialLoginItem from './SocialLoginItem';

export default function SocialLoginSection() {
  return (
    <div className="w-[90%] flex flex-col items-center gap-y-10 mt-10">
      <SocialLoginItem sns="google" />
      {/* <SocialLoginItem sns="facebook" /> */}
      <SocialLoginItem sns="kakao" />
      <SocialLoginItem sns="naver" />
    </div>
  );
}
