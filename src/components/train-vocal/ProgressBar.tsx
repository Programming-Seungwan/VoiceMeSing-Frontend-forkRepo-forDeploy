import GreenOneSVG from '@public/all/ProgressBar/GreenOne.svg';
import GreenTwoSVG from '@public/all/ProgressBar/GreenTwo.svg';
import GreenThreeSVG from '@public/all/ProgressBar/GreenThree.svg';
import BlackTwoSVG from '@public/all/ProgressBar/BlackTwo.svg';
import BlackThreeSVG from '@public/all/ProgressBar/BlackThree.svg';

interface progressBarProp {
  progressState: 1 | 2 | 3;
}

export default function ProgressBar({ progressState }: progressBarProp) {
  return (
    <div className="w-[90%] flex justify-center items-center gap-x-5 mt-[70px]">
      <div className="flex items-center gap-x-5">
        <GreenOneSVG />
        <p className="text-5 normalFont text-prgressBarGray">
          Upload Voice file
        </p>
      </div>

      <div className="w-[100px] h-[1px] bg-[#86878C]" />

      <div className="flex items-center gap-x-5">
        {progressState >= 2 ? <GreenTwoSVG /> : <BlackTwoSVG />}
        <p className="text-5 normalFont text-prgressBarGray">
          Enter Model Name
        </p>
      </div>

      <div className="w-[100px] h-[1px] bg-[#86878C]" />

      <div className="flex items-center gap-x-5">
        {progressState === 3 ? <GreenThreeSVG /> : <BlackThreeSVG />}
        <p className="text-5 normalFont text-prgressBarGray">
          Confirm Generation
        </p>
      </div>
    </div>
  );
}
