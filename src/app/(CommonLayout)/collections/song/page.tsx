'use client';

import Footer from '@components/all/Footer/Footer';
import NameSearchInput from '@components/collections/model/NameSearchInput';
import CollectionSongItemSection from '@components/collections/song/CollectionSongItemSection';
import useAccessTokenRedirect from '@hooks/useAccessTokenRedirect';
import CollectionsModelSkeleton from '@components/collections/model/CollectionsModelSkeleton';
import { useState, useEffect } from 'react';
import { collectionSongType } from '@_type/collection/song/collectionSongType';

export default function CollectionsSongPage() {
  const accessToken = useAccessTokenRedirect();
  const [collectionSongList, setCollectionSongList] = useState<
    collectionSongType[] | null
  >(null);

  useEffect(() => {
    async function getUserColletionSongs() {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/collection-coversong`,
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
          '사용자의 collecion song 페이지의 커버곡을 불러오는 데에 실패했습니다!'
        );
      }

      const responseData = await response.json();

      setCollectionSongList(responseData.data);
    }

    if (accessToken === null) {
      return;
    } else {
      getUserColletionSongs();
    }
  }, [accessToken]);

  console.log(collectionSongList);
  return (
    <>
      {accessToken === null || collectionSongList === null ? (
        <CollectionsModelSkeleton />
      ) : (
        <main className="rightMain items-center overflow-y-scroll relative">
          <div className="w-[90%] flex justify-between items-center mt-[50px]">
            <span className="text-white fontNormal text-[35px]">
              Collections / Song
            </span>
            <NameSearchInput category="song" />
          </div>
          <CollectionSongItemSection songData={collectionSongList} />
          <Footer />
        </main>
      )}
    </>
  );
}
