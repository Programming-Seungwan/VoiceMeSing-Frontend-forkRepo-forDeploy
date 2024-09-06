import MicrophoneSVG from '@public/create-song/microphone.svg';
import TipUI from '@components/all/UploadForm/TipUI';
import VoiceUploadForm from '@components/train-vocal/VoiceUploadForm';
import { Dispatch, SetStateAction } from 'react';

interface createSongSecondStepProp {
  setAudioFile: Dispatch<SetStateAction<File | null>>;
}

export default function CreateSongSecondStep({
  setAudioFile,
}: createSongSecondStepProp) {
  return (
    <div className="w-[90%] mt-[50px] flex flex-col items-center">
      <div className=" w-[80%] h-[70px] flex justify-center items-center gap-x-[45px] bg-[#303343] rounded-[30px]">
        <MicrophoneSVG />
        <span className="text-[20px] normalFont">Upload your Own Voice</span>
      </div>
      <VoiceUploadForm setAudioFile={setAudioFile} />
    </div>
  );
}
