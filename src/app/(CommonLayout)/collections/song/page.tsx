'use client';

import Footer from '@components/all/Footer/Footer';
import NameSearchInput from '@components/collections/model/NameSearchInput';
import CollectionSongItemSection from '@components/collections/song/CollectionSongItemSection';
import useAccessTokenRedirect from '@hooks/useAccessTokenRedirect';
import CollectionsModelSkeleton from '@components/collections/model/CollectionsModelSkeleton';
import { useGetUserSong } from '@hooks/song/useGetUserSong';
import { useState } from 'react';
import PlayingSongModal from '@components/collections/song/PlayingSongModal';

export default function CollectionsSongPage() {
  const accessToken = useAccessTokenRedirect();

  const { data: collectionSongList } = useGetUserSong(accessToken as string);
  const [isPlayingSongModalOpen, setIsPlayingSongModalOpen] =
    useState<boolean>(false);
  const [playingSongId, setPlayingSongId] = useState<number | null>(null);
  const [playingSongName, setPlayingSongName] = useState<string | null>(null);
  const [playingSongAudio, setPlayingSongAudio] = useState<File | null>(null);
  const [playingSongAudioSourceString, setPlayingSongAudioSourceString] =
    useState<string | null>(null);

  return (
    <>
      {accessToken === null || collectionSongList === undefined ? (
        <CollectionsModelSkeleton />
      ) : (
        <main
          className="rightMain items-center overflow-y-scroll relative"
          id="collections-song-modal-container"
        >
          <div className="w-[90%] flex justify-between items-center mt-[50px]">
            <span className="text-white fontNormal text-[35px]">
              Collections / Song
            </span>
            <NameSearchInput category="song" />
          </div>
          <CollectionSongItemSection
            songData={collectionSongList}
            accessToken={accessToken}
            setIsPlayingSongModalOpen={setIsPlayingSongModalOpen}
            setPlayingSongId={setPlayingSongId}
            setPlayingSongName={setPlayingSongName}
            setPlayingSongAudio={setPlayingSongAudio}
            setPlayingSongAudioSourceString={setPlayingSongAudioSourceString}
          />
          <PlayingSongModal
            isPlayingSongModalOpen={isPlayingSongModalOpen}
            setIsPlayingSongModalOpen={setIsPlayingSongModalOpen}
            playingSongId={playingSongId as number}
            setPlayingSongId={setPlayingSongId}
            playingSongName={playingSongName}
            setPlayingSongName={setPlayingSongName}
            playingSongAudio={playingSongAudio}
            setPlayingSongAudio={setPlayingSongAudio}
            playingSongAudioSourceString={playingSongAudioSourceString}
            setPlayingSongAudioSourceString={setPlayingSongAudioSourceString}
            isSongPublic={
              collectionSongList.find((el) => el.coverSongId === playingSongId)
                ?.public as boolean
            }
            accessToken={accessToken}
          />
          <Footer />
        </main>
      )}
    </>
  );
}
