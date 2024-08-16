import BulbSVG from '@public/all/UploadForm/bulb.svg';

export default function TipUI() {
  return (
    <div className="flex justify-start items-center gap-x-4">
      <BulbSVG />
      <span className="font-[25px] text-white fontNormal">TIP</span>
    </div>
  );
}
