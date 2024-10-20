'use client';

import Footer from '@components/all/Footer/Footer';
import NameSearchInput from '@components/collections/model/NameSearchInput';
import CollectionSongItemSection from '@components/collections/song/CollectionSongItemSection';
import useAccessTokenRedirect from '@hooks/useAccessTokenRedirect';
import CollectionsModelSkeleton from '@components/collections/model/CollectionsModelSkeleton';
import { useState, useEffect } from 'react';

export default function CollectionsSongPage() {
  const accessToken = useAccessTokenRedirect();
  const [collectionSongList, setCollectionSongList] = useState();

  useEffect(() => {
    async function getUserColletionSongs() {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/collection-song`,
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

    getUserColletionSongs();
  }, [accessToken]);
  return (
    <>
      {accessToken === null ? (
        <CollectionsModelSkeleton />
      ) : (
        <main className="rightMain items-center overflow-y-scroll relative">
          <div className="w-[90%] flex justify-between items-center mt-[50px]">
            <span className="text-white fontNormal text-[35px]">
              Collections / Song
            </span>
            <NameSearchInput category="song" />
          </div>
          <CollectionSongItemSection />
          <Footer />
        </main>
      )}
    </>
  );
}
