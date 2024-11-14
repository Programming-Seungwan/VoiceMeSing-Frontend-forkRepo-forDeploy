'use client';
import RecyclingBinSVG from '@public/collections/recyclingBin.svg';
import WandooKongLogoSVG from '@public/SideNavBar/wandookongLogo.svg';
import { collectionModelType } from '@_type/collection/model/collectionModelType';
import { usePathname } from 'next/navigation';
import { cn } from '@utils/cn';
import { useAppSelector } from '@hooks/reduxHooks';
import { useDeleteUserModel } from '@hooks/collections/model/useDeleteUserModel';

export default function CollectionVocalItem({
  voiceModelId,
  voiceModelName,
}: collectionModelType) {
  const pathname = usePathname();
  const accessToken = useAppSelector(
    (selector) => selector.accessToken.accessToken
  );

  const { mutate: deleteUserModel } = useDeleteUserModel(
    voiceModelId,
    accessToken
  );

  const isNotCreateSongPage = pathname !== '/create-song' ? true : false;

  return (
    <div
      className={cn(
        'rounded-[20px] relative flex flex-col items-center py-10 gap-y-4 hover:cursor-pointer',
        {
          'h-[300px]': isNotCreateSongPage,
          'h-[250px]': !isNotCreateSongPage,
        }
      )}
    >
      {isNotCreateSongPage && (
        <RecyclingBinSVG
          className="absolute top-5 right-5"
          onClick={deleteUserModel}
        />
      )}
      <div className="w-[80%] h-fit flex justify-center items-center">
        <WandooKongLogoSVG />
      </div>
      <span className="w-[80%] h-fit flex justify-center items-center text-[20px] text-white normalFont">
        {voiceModelName}
      </span>
      <div className="'w-[80%] h-fit flex flex-col text-[15px] normalFont items-start'">
        <span className="text-themeColor">Show Details</span>
      </div>
    </div>
  );
}
