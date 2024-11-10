'use client';

import EditPencilSVG from '@public/all/modelNameForm/editPencil.svg';
import SendAirplaneSVG from '@public/all/modelNameForm/sendAirplane.svg';
import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { useAppSelector } from '@hooks/reduxHooks';
import { useRouter } from 'next/navigation';

interface createSongCompleteProp {
  createSongName: string | null;
  setCreateSongName: Dispatch<SetStateAction<string | null>>;
  coverModelId: number | null;
  audioFile: File | null;
}

export default function CreateSongComplete({
  createSongName,
  setCreateSongName,
  coverModelId,
  audioFile,
}: createSongCompleteProp) {
  const handleChangeSongName = (event: ChangeEvent<HTMLInputElement>) => {
    setCreateSongName(event.target.value);
  };

  const accessToken = useAppSelector(
    (selector) => selector.accessToken.accessToken
  );

  const router = useRouter();

  const handleClickCreateCoverSongButton = async (): Promise<void> => {
    const createSongFormData = new FormData();
    if (createSongName && coverModelId && audioFile) {
      createSongFormData.append('resultSongName', createSongName);
      createSongFormData.append('songFile', audioFile);
      createSongFormData.append('voiceModelId', coverModelId.toString());
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/create-song`,
        {
          method: 'POST',
          credentials: 'include',
          headers: {
            access: accessToken as string,
          },
          body: createSongFormData,
        }
      );

      if (!response.ok) {
        throw new Error(
          "Failed to make ai cover song based on user's voice model"
        );
      } else {
        if (response.status === 413) {
          alert('cover 대상 곡의 크기가 너무 큽니다! 다른 곡을 골라주세요');
        }
        router.push('/');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="w-[90%] flex flex-col items-center">
      <span className="text-white text-[35px] normalFont mt-[90px]">
        Enter Cover Song Name
      </span>
      <span className="text-[15px] normalFont text-progressBarGray mt-[30px]">
        This Cover Song Name can not be edited later, so choose carefully.
      </span>

      <div className="w-[80%] h-[50px] mt-[50px] shadow-whiteShadow rounded-[25px] flex justify-between items-center px-[30px]">
        {/* 연필 로고 UI */}
        <EditPencilSVG />
        {/* input */}
        <input
          type="text"
          placeholder="Enter Your Own Song Name"
          className="grow ml-3"
          value={createSongName ? createSongName : ''}
          onChange={handleChangeSongName}
        />
        {/* 비행기 로고 UI */}
        <SendAirplaneSVG className="hover:cursor-pointer" />
      </div>
      <button
        className="w-[150px] h-[60px] text-white bg-themeColor rounded-[10px] mt-[100px]"
        onClick={handleClickCreateCoverSongButton}
      >
        Make Model
      </button>
    </section>
  );
}
