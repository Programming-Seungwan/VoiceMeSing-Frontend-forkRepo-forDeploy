'use client';
import Footer from '@components/all/Footer/Footer';
import ProfileLogoSVG from '@public/profile/profileLogo.svg';
import SeungwanImageSVG from '@public/profile/seungwanImage.svg';
import ProfileForm from '@components/profile/ProfileForm';
import useReissueAccessTokenWithRefreshToken from '@hooks/useReissueAccessTokenWithRefreshToken';
import { useRouter } from 'next/navigation';
import useAccessTokenRedirect from '@hooks/useAccessTokenRedirect';
import ProfileSkeleton from '@components/profile/ProfileSkeleton';

export default function ProfilePage() {
  const accessToken = useAccessTokenRedirect();

  if (accessToken === null) {
    return <ProfileSkeleton />;
  }

  return (
    <main className="rightMain items-center overflow-y-scroll">
      <div className="flex h-[150px] items-center gap-x-[50px]">
        <ProfileLogoSVG />
        <span className="normalFont text-white text-[30px]">
          Manage Your Profile and Account
        </span>
      </div>
      <div>
        {/* 해당 영역은 추후에 알맞는 이미지로 대체될 것임 */}
        <SeungwanImageSVG />
      </div>
      <ProfileForm />
      <Footer />
    </main>
  );
}
