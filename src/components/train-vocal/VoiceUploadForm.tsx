'use client';
import TipUI from '@components/all/UploadForm/TipUI';
import FileUploadUISVG from '@public/all/UploadForm/FileUploadUI.svg';
import { ChangeEvent, useRef } from 'react';
import { Dispatch, SetStateAction } from 'react';

interface voiceUploadFromProp {
  audioFile: File | null;
  setAudioFile: Dispatch<SetStateAction<File | null>>;
}

export default function VoiceUploadForm({
  audioFile,
  setAudioFile,
}: voiceUploadFromProp) {
  const voiceFileInputRef = useRef<HTMLInputElement>(null);
  const handleClickVoiceUploadForm = () => {
    voiceFileInputRef.current?.click();
  };

  const handleChangeAudioFile = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files && files.length > 0) {
      const selectedFile = files[0];

      setAudioFile(selectedFile);
    }
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
          accept=".wav,.mp3, .pdf"
          required
          ref={voiceFileInputRef}
          className="hidden"
          onChange={handleChangeAudioFile}
        />
      </form>
      {audioFile?.name && <div>{audioFile.name}</div>}
    </div>
  );
}
