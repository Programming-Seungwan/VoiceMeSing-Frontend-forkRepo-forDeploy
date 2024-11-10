import RecyclingBinSVG from '@public/collections/recyclingBin.svg';
import WandooKongLogoSVG from '@public/SideNavBar/wandookongLogo.svg';
import { collectionModelType } from '@_type/collection/model/collectionModelType';
import { usePathname } from 'next/navigation';

export default function CollectionVocalItem({
  voiceModelName,
}: collectionModelType) {
  const pathname = usePathname();

  const isOkayTrashBin = pathname !== '/create-song' ? true : false;
  return (
    <div className="h-[300px] rounded-[20px] relative flex flex-col items-center py-10 gap-y-4 hover:cursor-pointer">
      {isOkayTrashBin && <RecyclingBinSVG className="absolute top-5 right-5" />}
      <div className="w-[80%] h-fit flex justify-center items-center">
        <WandooKongLogoSVG />
      </div>
      <span className="w-[80%] h-fit flex justify-center items-center text-[20px] text-white normalFont">
        {voiceModelName}
      </span>
      <div className="w-[80%] h-fit flex flex-col text-[15px] normalFont items-start">
        <span className="text-themeColor">Show Details</span>
      </div>
    </div>
  );
}
