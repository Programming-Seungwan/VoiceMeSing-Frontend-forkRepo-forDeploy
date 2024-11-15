'use client';

import WandooKongLogoSVG from '@public/SideNavBar/wandookongLogo.svg';
import makeMusicBase64DataToURL from '@utils/makeMusicBase64DataToURL';
import { Dispatch, SetStateAction } from 'react';

interface communitySongItemProp {
  itemSongName: string | null;
  itemSongAudio: any;
  setIsCommunityPlayingSongModalOpen: Dispatch<SetStateAction<boolean>>;
  setCommunityPlayingSongName: Dispatch<SetStateAction<string | null>>;
  setCommunityPlayingSongAudio: Dispatch<SetStateAction<File | null>>;
  setCommunityPlayingSongAudioSourceString: Dispatch<
    SetStateAction<string | null>
  >;
}

export default function CommunitySongItem({
  itemSongAudio,
  itemSongName,
  setCommunityPlayingSongAudio,
  setCommunityPlayingSongName,
  setIsCommunityPlayingSongModalOpen,
  setCommunityPlayingSongAudioSourceString,
}: communitySongItemProp) {
  const handleClickSongItemForPlayingModal = () => {
    setIsCommunityPlayingSongModalOpen(true);
    setCommunityPlayingSongName(itemSongName);
    setCommunityPlayingSongAudio(itemSongAudio);
    const audioURL = makeMusicBase64DataToURL(itemSongAudio);
    setCommunityPlayingSongAudioSourceString(audioURL);
  };

  // 모달창에 띄워질 곡의 이름, 파일, 그리고 id에 대한 상태를 만들고 이를 모달에 띄운다.
  return (
    <div
      className="h-fit rounded-[20px] relative flex flex-col items-center py-10 gap-y-4 hover:cursor-pointer bg-lightNavy"
      onClick={handleClickSongItemForPlayingModal}
    >
      <div className="w-[80%] h-fit flex justify-center items-center">
        <WandooKongLogoSVG />
      </div>
      <span className="w-[80%] h-fit flex justify-center items-center text-[20px] text-white normalFont">
        {itemSongName}
      </span>
      <div className="w-[80%] h-fit flex text-[15px] normalFont justify-center">
        <span className="text-themeColor">Show Details</span>
      </div>
    </div>
  );
}
