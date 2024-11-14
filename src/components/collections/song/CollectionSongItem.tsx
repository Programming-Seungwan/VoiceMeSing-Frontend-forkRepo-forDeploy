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
  return (
    <div className="h-[300px] rounded-[20px] relative flex flex-col py-10">
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
      <div className="w-[80%] h-fit flex flex-col text-[15px] normalFont items-start">
        <span className="text-themeColor">Show Details</span>
      </div>
    </div>
  );
}
