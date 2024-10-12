'use client';
import Footer from '@components/all/Footer/Footer';
import { useState, useEffect } from 'react';
import ProgressBar from '@components/create-song/ProgressBar';
import CreateSongFirstStep from '@components/create-song/CreateSongFirstStep';
import CreateSongSecondStep from '@components/create-song/CreateSongSecondStep';
import CreateSongThirdStep from '@components/create-song/CreateSongThirdStep';
import CreateSongComplete from '@components/create-song/CreateSongComplete';
import CreateSongPageNavigator from '@components/all/PageNavigator/CreateSongPageNavigator';
import { useAppSelector } from '@hooks/reduxHooks';
import { useRouter } from 'next/navigation';
import CreateSongSkeleton from '@components/create-song/CreateSongSkeleton';

export default function CreateSongPage() {
  const [progressState, setProgressState] = useState<1 | 2 | 3 | 4>(1);
  const handleProgressState = (newState: 1 | 2 | 3 | 4) => {
    setProgressState(newState);
  };
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const accessTokenSelector = useAppSelector(
    (selector) => selector.accessToken.accessToken
  );
  const router = useRouter();

  useEffect(() => {
    if (accessTokenSelector === null) {
      router.replace('/NoneLoginUser');
    }
  }, []);

  return (
    <main className="rightMain items-center overflow-y-scroll relative">
      <div className="w-[90%] flex justify-start items-center mt-[50px]">
        <span className="text-white fontNormal text-[35px]">Create Song</span>
      </div>
      <ProgressBar progressState={progressState} />
      {progressState === 1 && <CreateSongFirstStep />}
      {progressState === 2 && (
        <CreateSongSecondStep
          audioFile={audioFile}
          setAudioFile={setAudioFile}
        />
      )}
      {progressState === 3 && <CreateSongThirdStep />}
      {progressState === 4 && <CreateSongComplete />}
      <CreateSongPageNavigator
        progressState={progressState}
        handleProgressState={handleProgressState}
      />

      <Footer />
    </main>
  );
}
