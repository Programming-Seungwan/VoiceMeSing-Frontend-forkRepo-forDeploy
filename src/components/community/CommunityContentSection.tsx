'use client';

import { useGetCommunitySongs } from '@hooks/community/useGetCommunitySongs';
import { Dispatch, SetStateAction } from 'react';
import CommunitySongItem from '@components/community/CommunitySongItem';

interface communityContentSectionProp {
  setIsCommunityPlayingSongModalOpen: Dispatch<SetStateAction<boolean>>;
  setCommunityPlayingSongName: Dispatch<SetStateAction<string | null>>;
  setCommunityPlayingSongAudio: Dispatch<SetStateAction<File | null>>;
  setCommunityPlayingSongAudioSourceString: Dispatch<
    SetStateAction<string | null>
  >;
}

export default function CommunityContentSection({
  setIsCommunityPlayingSongModalOpen,
  setCommunityPlayingSongName,
  setCommunityPlayingSongAudio,
  setCommunityPlayingSongAudioSourceString,
}: communityContentSectionProp) {
  const { data: communitySongsData } = useGetCommunitySongs();

  return (
    <main className="w-full grow grid grid-cols-3 mt-10 gap-x-[50px] gap-y-[50px] scroll-modal">
      {communitySongsData?.data.map((el) => (
        <CommunitySongItem
          key={el.coverSongId}
          itemSongAudio={el.coverSongFile}
          itemSongName={el.resultSongName}
          setCommunityPlayingSongAudio={setCommunityPlayingSongAudio}
          setCommunityPlayingSongName={setCommunityPlayingSongName}
          setIsCommunityPlayingSongModalOpen={
            setIsCommunityPlayingSongModalOpen
          }
          setCommunityPlayingSongAudioSourceString={
            setCommunityPlayingSongAudioSourceString
          }
        />
      ))}
    </main>
  );
}
