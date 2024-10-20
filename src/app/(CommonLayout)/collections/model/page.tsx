'use client';
import Footer from '@components/all/Footer/Footer';
import NameSearchInput from '@components/collections/model/NameSearchInput';
import CollectionVocalItemSection from '@components/collections/model/CollectionVocalItemSection';
import useAccessTokenRedirect from '@hooks/useAccessTokenRedirect';
import CollectionsModelSkeleton from '@components/collections/model/CollectionsModelSkeleton';
import { useEffect, useState } from 'react';

interface voiceModelProp {
  voiceModelId: number;
  voiceModelName: string;
}

export default function CollectionsModelPage() {
  const accessToken = useAccessTokenRedirect();
  const [collectionModelList, setCollectionModelList] = useState(null);

  useEffect(() => {
    async function getUserColletionModels() {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/collection-model`,
        {
          method: 'GET',
          credentials: 'include',
          headers: {
            access: `${accessToken}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(
          '사용자의 collecion model 페이지의 음성 모델을 불러오는 데에 실패했습니다!'
        );
      }

      const data = await response.json();

      console.log(data);
    }

    getUserColletionModels();
  }, [accessToken]);

  return (
    <>
      {accessToken === null ? (
        <CollectionsModelSkeleton />
      ) : (
        <main className="rightMain items-center overflow-y-scroll relative">
          <div className="w-[90%] flex justify-between items-center mt-[50px]">
            <span className="text-white fontNormal text-[35px]">
              Collections / Vocal
            </span>
            <NameSearchInput category="model" />
          </div>
          <CollectionVocalItemSection />
          <Footer />
        </main>
      )}
    </>
  );
}
