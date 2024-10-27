import TipUI from '@components/all/UploadForm/TipUI';
import PolygonSVG from '@public/create-song/Polygon.svg';

export default function CreateSongThirdStep() {
  return (
    <div className="w-[90%] mt-[85px] flex flex-col items-center">
      <span className="text-[50px]  font-medium">Set Key</span>
      <div className="w-[80%] flex flex-col gap-y-[15px] justify-center items-start mt-[40px]">
        <TipUI />
        <select
          name="songKey"
          className="w-full h-[40px] bg-backgroundNavy shadow-whiteShadow rounded-[10px] relative px-5"
        >
          <option value="auto">auto</option>
        </select>
      </div>
    </div>
  );
}
