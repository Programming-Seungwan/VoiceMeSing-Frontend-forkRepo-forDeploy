// 사용자가 ai 커버 음원을 만들 수 있는 페이지. 사용자로부터 여러 음원 파일들을 받아 백엔드로 전송해야 하므로 form 태그가 필요함
'use client';
import Footer from '@components/all/Footer/Footer';
import ProgressBar from '@components/train-vocal/ProgressBar';
import VoiceUploadForm from '@components/train-vocal/VoiceUploadForm';
import PageNavigator from '@components/all/PageNavigator/PageNavigator';
import { useState } from 'react';

export default function TrainVocalPage() {
  const [progressState, setProgressState] = useState<1 | 2 | 3>(1);
  const handleProgressState = (newState: 1 | 2 | 3) => {
    setProgressState(newState);
  };

  return (
    <main className="rightMain items-center overflow-y-scroll relative">
      <div className="w-[90%] flex justify-start items-center mt-[110px]">
        <span className="text-white fontNormal text-[35px]">Train Vocal</span>
      </div>
      <ProgressBar progressState={progressState} />
      {progressState === 1 && <VoiceUploadForm />}

      <PageNavigator
        progressState={progressState}
        handleProgressState={handleProgressState}
      />
      <Footer />
    </main>
  );
}
