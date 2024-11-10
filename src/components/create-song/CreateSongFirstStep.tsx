import MagnifyingGlassSVG from '@public/create-song/magnifyingGlass.svg';
import { Dispatch, SetStateAction } from 'react';

interface CreateSongFirstStepProp {
  coverModelName: string | null;
  setModelModalOpen: Dispatch<SetStateAction<boolean>>;
}

export default function CreateSongFirstStep({
  coverModelName,
  setModelModalOpen,
}: CreateSongFirstStepProp) {
  function handeleClickGlassSVG() {
    setModelModalOpen(true);
  }

  return (
    <div className="w-[90%] mt-[50px] mb-[70px] flex flex-col items-center">
      <span className="text-[30px] text-white mb-[50px]">
        Select your Voice Model
      </span>
      <section
        className="w-[60%] h-[250px] flex justify-center items-center rounded-[20px] bg-[#222227] hover:cursor-pointer mb-[10px]"
        onClick={handeleClickGlassSVG}
      >
        <MagnifyingGlassSVG />
      </section>
      {coverModelName !== null && (
        <div className="w-[60%]">{coverModelName}</div>
      )}
    </div>
  );
}
