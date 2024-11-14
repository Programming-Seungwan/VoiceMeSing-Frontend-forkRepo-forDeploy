'use client';

import RecyclingBinSVG from '@public/collections/recyclingBin.svg';
import { collectionSongType } from '@_type/collection/song/collectionSongType';
import WandooKongLogoSVG from '@public/SideNavBar/wandookongLogo.svg';
import { useDeleteUserSong } from '@hooks/collections/song/useDeleteUserSong';
import { Dispatch, SetStateAction } from 'react';
import makeMusicBase64DataToURL from '@utils/makeMusicBase64DataToURL';

interface collectionSongItemProp extends collectionSongType {
  accessToken: string | null;
  setIsPlayingSongModalOpen: Dispatch<SetStateAction<boolean>>;
  setPlayingSongId: Dispatch<SetStateAction<number | null>>;
  setPlayingSongName: Dispatch<SetStateAction<string | null>>;
  setPlayingSongAudio: Dispatch<SetStateAction<File | null>>;
  setPlayingSongAudioSourceString: Dispatch<SetStateAction<string | null>>;
}

export default function CollectionSongItem({
  coverSongId,
  coverSongName,
  coverSongFile,
  public: ispublic,
  accessToken,
  setIsPlayingSongModalOpen,
  setPlayingSongId,
  setPlayingSongName,
  setPlayingSongAudio,
  setPlayingSongAudioSourceString,
}: collectionSongItemProp) {
  const { mutate: deleteUserSong } = useDeleteUserSong(
    coverSongId,
    accessToken
  );

  const handleClickSongItemForPlayingModal = () => {
    setIsPlayingSongModalOpen(true);
    setPlayingSongId(coverSongId);
    setPlayingSongName(coverSongName);
    setPlayingSongAudio(coverSongFile);
    const audioUrl = makeMusicBase64DataToURL(coverSongFile);
    setPlayingSongAudioSourceString(audioUrl);
  };

  // 모달창에 띄워질 곡의 이름, 파일, 그리고 id에 대한 상태를 만들고 이를 모달에 띄운다.
  return (
    <div
      className="h-fit rounded-[20px] relative flex flex-col items-center py-10 gap-y-4 hover:cursor-pointer bg-lightNavy"
      onClick={handleClickSongItemForPlayingModal}
    >
      <RecyclingBinSVG
        className="absolute top-5 right-5 hover:cursor-pointer"
        onClick={deleteUserSong}
      />
      <div className="w-[80%] h-fit flex justify-center items-center">
        <WandooKongLogoSVG />
      </div>
      <span className="w-[80%] h-fit flex justify-center items-center text-[20px] text-white normalFont">
        {coverSongName}
      </span>
      <div className="w-[80%] h-fit flex text-[15px] normalFont justify-center">
        <span className="text-themeColor">Show Details</span>
      </div>
    </div>
  );
}
