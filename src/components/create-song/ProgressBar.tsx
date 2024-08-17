import GreenOneSVG from '@public/all/ProgressBar/GreenOne.svg';
import GreenTwoSVG from '@public/all/ProgressBar/GreenTwo.svg';
import GreenThreeSVG from '@public/all/ProgressBar/GreenThree.svg';
import GreenFourSVG from '@public/all/ProgressBar/GreenFour.svg';
import BlackTwoSVG from '@public/all/ProgressBar/BlackTwo.svg';
import BlackThreeSVG from '@public/all/ProgressBar/BlackThree.svg';
import BlackFourSVG from '@public/all/ProgressBar/BlackFour.svg';

interface progressBarProp {
  progressState: 1 | 2 | 3 | 4;
}

export default function ProgressBar({ progressState }: progressBarProp) {
  return (
    <div className="w-[95%] flex justify-center items-center gap-x-2 mt-[70px]">
      <div className="flex items-center gap-x-3">
        <GreenOneSVG />
        <p className="text-5 normalFont text-prgressBarGray">
          Select Voice Model
        </p>
      </div>

      <div className="w-[70px] h-[1px] bg-[#86878C]" />

      <div className="flex items-center gap-x-3">
        {progressState >= 2 ? <GreenTwoSVG /> : <BlackTwoSVG />}
        <p className="text-5 normalFont text-prgressBarGray">
          Upload Cover Voice
        </p>
      </div>

      <div className="w-[70px] h-[1px] bg-[#86878C]" />

      <div className="flex items-center gap-x-3">
        {progressState >= 3 ? <GreenThreeSVG /> : <BlackThreeSVG />}
        <p className="text-5 normalFont text-prgressBarGray">
          Set Covering Voice Key
        </p>
      </div>

      <div className="w-[70px] h-[1px] bg-[#86878C]" />

      <div className="flex items-center gap-x-3">
        {progressState === 4 ? <GreenFourSVG /> : <BlackFourSVG />}
        <p className="text-5 normalFont text-prgressBarGray">
          Cover Song Title
        </p>
      </div>
    </div>
  );
}
