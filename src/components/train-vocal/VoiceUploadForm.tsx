'use client';
import TipUI from '@components/all/UploadForm/TipUI';
import FileUploadUISVG from '@public/all/UploadForm/FileUploadUI.svg';
import { useRef } from 'react';

export default function VoiceUploadForm() {
  const voiceFileInputRef = useRef<HTMLInputElement>(null);
  const handleClickVoiceUploadForm = () => {
    voiceFileInputRef.current?.click();
  };

  return (
    <div className="w-[70%] mt-[100px] flex flex-col gap-y-[22px]">
      <TipUI />
      <form
        className="shadow-whiteShadow border-[3px] h-[70px] rounded-[20px] flex justify-center items-center gap-x-10 hover:cursor-pointer"
        encType="multipart/form-data"
        onClick={handleClickVoiceUploadForm}
      >
        <FileUploadUISVG />
        <span className="normalFont text-xl">Add Your Own Voice Files</span>
        <input
          type="file"
          name="audiofile"
          accept=".wav"
          required
          ref={voiceFileInputRef}
          className="hidden"
        />
      </form>
    </div>
  );
}
