'use client';

import Footer from '@components/all/Footer/Footer';
import NameSearchInput from '@components/collections/model/NameSearchInput';
import CollectionSongItemSection from '@components/collections/song/CollectionSongItemSection';
import useAccessTokenRedirect from '@hooks/useAccessTokenRedirect';
import CollectionsModelSkeleton from '@components/collections/model/CollectionsModelSkeleton';

import { useGetUserSong } from '@hooks/song/useGetUserSong';

export default function CollectionsSongPage() {
  const accessToken = useAccessTokenRedirect();

  const { data: collectionSongList } = useGetUserSong(accessToken as string);

  return (
    <>
      {accessToken === null || collectionSongList === undefined ? (
        <CollectionsModelSkeleton />
      ) : (
        <main className="rightMain items-center overflow-y-scroll relative">
          <div className="w-[90%] flex justify-between items-center mt-[50px]">
            <span className="text-white fontNormal text-[35px]">
              Collections / Song
            </span>
            <NameSearchInput category="song" />
          </div>
          <CollectionSongItemSection
            songData={collectionSongList}
            accessToken={accessToken}
          />
          <Footer />
        </main>
      )}
    </>
  );
}
