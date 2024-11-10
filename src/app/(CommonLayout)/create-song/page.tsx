'use client';
import Footer from '@components/all/Footer/Footer';
import { useState } from 'react';
import ProgressBar from '@components/create-song/ProgressBar';
import CreateSongFirstStep from '@components/create-song/CreateSongFirstStep';
import CreateSongSecondStep from '@components/create-song/CreateSongSecondStep';
import CreateSongThirdStep from '@components/create-song/CreateSongThirdStep';
import CreateSongComplete from '@components/create-song/CreateSongComplete';
import CreateSongPageNavigator from '@components/all/PageNavigator/CreateSongPageNavigator';
import CreateSongSkeleton from '@components/create-song/CreateSongSkeleton';
import useAccessTokenRedirect from '@hooks/useAccessTokenRedirect';
import SelectModelModal from '@components/create-song/SelectModelModal';

export default function CreateSongPage() {
  const [progressState, setProgressState] = useState<1 | 2 | 3 | 4>(1);
  const handleProgressState = (newState: 1 | 2 | 3 | 4) => {
    setProgressState(newState);
  };
  const [coverModelId, setCoverModelId] = useState<number | null>(null);
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [coverSongName, setCoverSongName] = useState<string | null>(null);
  const accessToken = useAccessTokenRedirect();
  const [isSelectModelModalOpen, setIsSelectModelModalOpen] =
    useState<boolean>(false);

  return (
    <>
      {accessToken === null ? (
        <CreateSongSkeleton />
      ) : (
        <main
          className="rightMain items-center overflow-y-scroll relative"
          id="create-song-modal-container"
        >
          <div className="w-[90%] flex justify-start items-center mt-[50px]">
            <span className="text-white fontNormal text-[35px]">
              Create Song
            </span>
          </div>
          <ProgressBar progressState={progressState} />
          {progressState === 1 && (
            <CreateSongFirstStep
              setModelModalOpen={setIsSelectModelModalOpen}
            />
          )}
          {progressState === 2 && (
            <CreateSongSecondStep
              audioFile={audioFile}
              setAudioFile={setAudioFile}
            />
          )}
          {progressState === 3 && <CreateSongThirdStep />}
          {/* third step은 현재 auto tune으로 ai를 모델링하기에 일단은 백엔드에 전달하는 데이터는 없다 */}
          {progressState === 4 && (
            <CreateSongComplete
              createSongName={coverSongName}
              setCreateSongName={setCoverSongName}
            />
          )}
          <CreateSongPageNavigator
            coverModelId={coverModelId}
            audioFile={audioFile}
            coverSongName={coverSongName}
            progressState={progressState}
            handleProgressState={handleProgressState}
          />

          <SelectModelModal
            isSelectModelModalOpen={isSelectModelModalOpen}
            setModelModalOpen={setIsSelectModelModalOpen}
            coverModelId={coverModelId}
            setCoverModelId={setCoverModelId}
            accessToken={accessToken}
          />

          <Footer />
        </main>
      )}
    </>
  );
}
