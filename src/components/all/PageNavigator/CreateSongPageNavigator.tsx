import LeftGrayArrowSVG from '@public/all/PageNavigator/leftGrayArrow.svg';
import RightGreenArrowSVG from '@public/all/PageNavigator/rightGreenArrow.svg';

interface PageNavigatorProp {
  coverModelId: number | null;
  audioFile: File | null;
  coverSongName: string | null;
  progressState: 1 | 2 | 3 | 4;
  handleProgressState: (nextState: 1 | 2 | 3 | 4) => void;
}

export default function CreateSongPageNavigator({
  coverModelId,
  audioFile,
  coverSongName,
  progressState,
  handleProgressState,
}: PageNavigatorProp) {
  const clickRightArrow = () => {
    if (progressState === 1) {
      if (coverModelId === null) {
        return;
      }
      handleProgressState(2);
    } else if (progressState === 2) {
      if (audioFile === null) {
        return;
      }
      handleProgressState(3);
    } else if (progressState === 3) {
      handleProgressState(4);
    } else if (progressState === 4) {
      handleProgressState(4);
    }
  };

  const clickLeftArrow = () => {
    if (progressState === 1) {
      handleProgressState(1);
    } else if (progressState === 2) {
      handleProgressState(1);
    } else if (progressState === 3) {
      handleProgressState(2);
    } else if (progressState === 4) {
      handleProgressState(3);
    }
  };

  return (
    <div className="w-[530px] flex flex-col grow justify-end">
      <section className="flex justify-center items-center">
        <LeftGrayArrowSVG
          className="mr-[45px] hover:cursor-pointer"
          onClick={clickLeftArrow}
        />
        <span className="w-[60px] text-[30px] normalFont text-progressBarGray mr-[50px]">
          Prev
        </span>
        <span className="w-[60px] text-[30px] normalFont text-themeColor ml-[50px]">
          Next
        </span>

        <RightGreenArrowSVG
          className="ml-[45px] hover:cursor-pointer"
          onClick={clickRightArrow}
        />
      </section>
    </div>
  );
}
