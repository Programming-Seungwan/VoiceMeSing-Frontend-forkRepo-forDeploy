import FacebookLogo from '@public/Logo/facebookLogo.svg';
import GoogleLogo from '@public/Logo/googleLogo.svg';
import KakaoLogo from '@public/Logo/kakaoLogo.svg';
import NaverLogo from '@public/Logo/naverLogo.svg';

interface SocialLoginItemProp {
  sns: 'facebook' | 'google' | 'kakao' | 'naver';
}

export default function SocialLoginItem({ sns }: SocialLoginItemProp) {
  return (
    <div className="w-[50%] h-[45px] shadow-whiteShadow flex items-center rounded-[15px] pl-[15px] gap-x-5">
      {sns === 'facebook' && <FacebookLogo />}
      {sns === 'google' && <GoogleLogo />}
      {sns === 'kakao' && <KakaoLogo />}
      {sns === 'naver' && <NaverLogo />}
      <span>{`Log In with ${sns}`}</span>
    </div>
  );
}
