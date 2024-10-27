'use client';
import Footer from '@components/all/Footer/Footer';
import ProfileLogoSVG from '@public/profile/profileLogo.svg';
import SeungwanImageSVG from '@public/profile/seungwanImage.svg';
import ProfileForm from '@components/profile/ProfileForm';
import { useState, useEffect } from 'react';
import useAccessTokenRedirect from '@hooks/useAccessTokenRedirect';
import ProfileSkeleton from '@components/profile/ProfileSkeleton';

interface userProfileProp {
  nickname: string;
}

export default function ProfilePage() {
  const [userProfileInfo, setUserProfileInfo] =
    useState<userProfileProp | null>(null);
  const accessToken = useAccessTokenRedirect();

  useEffect(() => {
    async function getUserInfoByAccessToken() {
      try {
        const reponse = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/profile`,
          {
            method: 'GET',
            headers: {
              access: `${accessToken}`,
            },
          }
        );

        if (!reponse.ok) {
          throw new Error('개인 프로필 정보를 가져오는 데에 실패했습니다!');
        }

        const refinedData = await reponse.json();

        setUserProfileInfo(refinedData.data);
      } catch (err) {
        console.log(err);
      }
    }

    if (accessToken !== null) {
      getUserInfoByAccessToken();
    }
  }, [accessToken]);

  if (accessToken === null || userProfileInfo === null) {
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
      <ProfileForm nickname={userProfileInfo.nickname} />
      <Footer />
    </main>
  );
}
