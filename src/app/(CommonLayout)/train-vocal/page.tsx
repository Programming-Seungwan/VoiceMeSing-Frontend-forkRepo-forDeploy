// 사용자가 ai 커버 음원을 만들 수 있는 페이지. 사용자로부터 여러 음원 파일들을 받아 백엔드로 전송해야 하므로 form 태그가 필요함
'use client';
import Footer from '@components/all/Footer/Footer';
import ProgressBar from '@components/train-vocal/ProgressBar';
import VoiceUploadForm from '@components/train-vocal/VoiceUploadForm';
import ModelNameForm from '@components/all/ModelNameForm/ModelNameForm';
import TrainVocalPageNavigator from '@components/all/PageNavigator/TrainVocalPageNavigator';
import TrainVocalComplete from '@components/train-vocal/TrainVocalComplete';
import { useState } from 'react';
import TrainVocalSkeleton from '@components/train-vocal/TrainVocalSkeleton';
import useAccessTokenRedirect from '@hooks/useAccessTokenRedirect';
import useReissueAccessTokenWithRefreshToken from '@hooks/useReissueAccessTokenWithRefreshToken';

export default function TrainVocalPage() {
  const [progressState, setProgressState] = useState<1 | 2 | 3>(1);
  const handleProgressState = (newState: 1 | 2 | 3) => {
    setProgressState(newState);
  };
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [modelName, setModelName] = useState<string | null>(null);

  const accessToken = useAccessTokenRedirect();

  return (
    <>
      {accessToken === null ? (
        <TrainVocalSkeleton />
      ) : (
        <main className="rightMain items-center overflow-y-scroll relative">
          <div className="w-[90%] flex justify-start items-center mt-[50px]">
            <span className="text-white fontNormal text-[35px]">
              Train Vocal
            </span>
          </div>
          <ProgressBar progressState={progressState} />
          {progressState === 1 && (
            <VoiceUploadForm
              audioFile={audioFile}
              setAudioFile={setAudioFile}
            />
          )}
          {progressState === 2 && (
            <ModelNameForm modelName={modelName} setModelName={setModelName} />
          )}
          {progressState === 3 && (
            <TrainVocalComplete audioFile={audioFile} modelName={modelName} />
          )}
          <TrainVocalPageNavigator
            progressState={progressState}
            handleProgressState={handleProgressState}
            audioFile={audioFile}
            modelName={modelName}
          />
          <Footer />
        </main>
      )}
    </>
  );
}
