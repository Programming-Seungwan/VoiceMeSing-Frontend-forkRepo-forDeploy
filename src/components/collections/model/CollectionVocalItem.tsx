import RecyclingBinSVG from '@public/collections/recyclingBin.svg';
import WandooKongLogoSVG from '@public/SideNavBar/wandookongLogo.svg';
import { collectionModelType } from '@_type/collection/model/collectionModelType';
import { usePathname } from 'next/navigation';
import { Dispatch, SetStateAction } from 'react';
import { cn } from '@utils/cn';

interface coverRelatedProp {
  coverModelId: number | null;
  setCoverModelId: Dispatch<SetStateAction<number | null>>;
}

type collectionVocalItemProp = collectionModelType & coverRelatedProp;

export default function CollectionVocalItem({
  coverModelId,
  setCoverModelId,
  voiceModelId,
  voiceModelName,
}: collectionVocalItemProp) {
  const pathname = usePathname();

  const isNotCreateSongPage = pathname !== '/create-song' ? true : false;

  const handleClickVocalItem = () => {
    if (coverModelId === voiceModelId) {
      setCoverModelId(null);
      return;
    }

    setCoverModelId(voiceModelId);
  };

  return (
    <div
      className={cn(
        'rounded-[20px] relative flex flex-col items-center py-10 gap-y-4 hover:cursor-pointer',
        {
          'shadow-whiteShadow': coverModelId === voiceModelId,
          'h-[300px]': isNotCreateSongPage,
          'h-[250px]': !isNotCreateSongPage,
        }
      )}
      onClick={handleClickVocalItem}
    >
      {isNotCreateSongPage && (
        <RecyclingBinSVG className="absolute top-5 right-5" />
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
