'use client';

import RecyclingBinSVG from '@public/collections/recyclingBin.svg';
import { collectionSongType } from '@_type/collection/song/collectionSongType';
import WandooKongLogoSVG from '@public/SideNavBar/wandookongLogo.svg';
import { useDeleteUserSong } from '@hooks/collections/song/useDeleteUserSong';

interface collectionSongItemProp extends collectionSongType {
  accessToken: string | null;
}

export default function CollectionSongItem({
  coverSongId,
  coverSongName,
  coverSongFile,
  isPublic,
  accessToken,
}: collectionSongItemProp) {
  const { mutate: deleteUserSong } = useDeleteUserSong(
    coverSongId,
    accessToken
  );

  // 모달창에 띄워질 곡의 이름, 파일, 그리고 id에 대한 상태를 만들고 이를 모달에 띄운다.
  return (
    <div className="rounded-[20px] relative flex flex-col items-center py-10 gap-y-4 hover:cursor-pointer">
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
