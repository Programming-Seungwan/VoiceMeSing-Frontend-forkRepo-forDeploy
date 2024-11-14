import { collectionSongType } from '@_type/collection/song/collectionSongType';
import CollectionSongItem from './CollectionSongItem';
import { Dispatch, SetStateAction } from 'react';

interface collectionSongItemSectionProp {
  songData: collectionSongType[] | null;
  accessToken: string | null;
  setIsPlayingSongModalOpen: Dispatch<SetStateAction<boolean>>;
  setPlayingSongId: Dispatch<SetStateAction<number | null>>;
  setPlayingSongName: Dispatch<SetStateAction<string | null>>;
  setPlayingSongAudio: Dispatch<SetStateAction<File | null>>;
  setPlayingSongAudioSourceString: Dispatch<SetStateAction<string | null>>;
}

export default function CollectionSongItemSection({
  songData,
  accessToken,
  setIsPlayingSongModalOpen,
  setPlayingSongId,
  setPlayingSongName,
  setPlayingSongAudio,
  setPlayingSongAudioSourceString,
}: collectionSongItemSectionProp) {
  return (
    <section className="w-full grow grid grid-cols-3 mt-10 gap-x-[100px] scroll-modal">
      {songData?.map((element) => (
        <CollectionSongItem
          key={element.coverSongId}
          coverSongId={element.coverSongId}
          coverSongFile={element.coverSongFile}
          coverSongName={element.coverSongName}
          isPublic={element.isPublic}
          accessToken={accessToken}
          setIsPlayingSongModalOpen={setIsPlayingSongModalOpen}
          setPlayingSongId={setPlayingSongId}
          setPlayingSongName={setPlayingSongName}
          setPlayingSongAudio={setPlayingSongAudio}
          setPlayingSongAudioSourceString={setPlayingSongAudioSourceString}
        />
      ))}
    </section>
  );
}
