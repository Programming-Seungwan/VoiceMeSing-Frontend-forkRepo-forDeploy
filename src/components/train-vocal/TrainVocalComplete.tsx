'use client';
import { useAppSelector } from '@hooks/reduxHooks';
import { useRouter } from 'next/navigation';

interface trainVocalCompleteProp {
  audioFile: File | null;
  modelName: string | null;
}

export default function TrainVocalComplete({
  audioFile,
  modelName,
}: trainVocalCompleteProp) {
  const accessToken = useAppSelector(
    (selector) => selector.accessToken.accessToken
  );

  const router = useRouter();

  const handleClickMakeModelButton = async (): Promise<void> => {
    const voiceFormData = new FormData();
    if (audioFile && modelName) {
      voiceFormData.append('voiceModelName', modelName);
      voiceFormData.append('voiceFile', audioFile);
    }
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/train-voice`,
      {
        method: 'POST',
        credentials: 'include',
        headers: {
          access: accessToken as string,
        },
        body: voiceFormData,
      }
    );

    if (!response.ok) {
      throw new Error('모델명과 음성 파일 전송 요청에 오류가 발생했습니다!');
    }

    router.push('/');
  };

  return (
    <section className="w-[90%] flex flex-col mt-[90px] items-center">
      <span className="text-white normalFont text-[35px]">
        Let{"'s"} Make your Own Voice Model!
      </span>
      <span className="text-[15px] text-progressBarGray mt-[50px]">
        Click {"'Make Model'"} button below
      </span>
      <button
        className="w-[150px] h-[60px] text-white bg-themeColor rounded-[10px] mt-[100px]"
        onClick={handleClickMakeModelButton}
      >
        Make Model
      </button>
    </section>
  );
}
