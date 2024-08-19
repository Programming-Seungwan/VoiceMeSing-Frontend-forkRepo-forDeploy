import InfoIconSVG from '@public/all/vocalNameSearchInput/infoIcon.svg';
import MagnifyingGlassSMSVG from '@public/all/vocalNameSearchInput/magnifyingGlassSM.svg';

export default function VocalNameSearchInput() {
  return (
    <div className="w-[50%] h-[50px] flex items-center px-[15px] border-[2px] border-white rounded-[20px]">
      <InfoIconSVG className="mr-[15px]" />
      <input
        type="text"
        placeholder="Search by model name!"
        className="grow text-[14px]"
      />
      <MagnifyingGlassSMSVG />
    </div>
  );
}
