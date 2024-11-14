'use client';

import ReactModal from 'react-modal';
import ModalCloseSVG from '@public/all/modal/modalClose.svg';
import { Dispatch, SetStateAction } from 'react';
import ModelingAISVG from '@public/home/modelingAI.svg';
import MakingSongSVG from '@public/home/makingSongAI.svg';
import SongToggleButton from '@components/collections/song/SongToggleButton';

interface playingSongModalProp {
  isPlayingSongModalOpen: boolean;
  playingSongId: number;
  playingSongName: string | null;
  playingSongAudio: File | null;
  playingSongAudioSourceString: string | null;
  setIsPlayingSongModalOpen: Dispatch<SetStateAction<boolean>>;
  setPlayingSongId: Dispatch<SetStateAction<number | null>>;
  setPlayingSongName: Dispatch<SetStateAction<string | null>>;
  setPlayingSongAudio: Dispatch<SetStateAction<File | null>>;
  setPlayingSongAudioSourceString: Dispatch<SetStateAction<string | null>>;
  isSongPublic: boolean;
  accessToken: string | null;
}

ReactModal.setAppElement('#root');

export default function PlayingSongModal({
  isPlayingSongModalOpen,
  playingSongId,
  playingSongName,
  playingSongAudio,
  playingSongAudioSourceString,
  setIsPlayingSongModalOpen,
  setPlayingSongId,
  setPlayingSongName,
  setPlayingSongAudio,
  setPlayingSongAudioSourceString,
  isSongPublic,
  accessToken,
}: playingSongModalProp) {
  const customStyle: ReactModal.Styles = {
    overlay: {
      marginLeft: '300px',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // 오버레이 반투명 설정
      opacity: '1',
    },
    content: {
      width: '70%',
      height: '70%',
      marginTop: '150px',
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingTop: '60px',
      paddingBottom: '40px',
      paddingRight: '20px',
      paddingLeft: '20px',
      backgroundColor: '#232333',
      outline: 'none',
      borderRadius: '15px',
      opacity: 1,
      position: 'relative',
      overflowY: 'scroll',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  };

  const handleClosePlayingSongModal = () => {
    setIsPlayingSongModalOpen(false);
    setPlayingSongId(null);
    setPlayingSongAudio(null);
    setPlayingSongName(null);
    URL.revokeObjectURL(playingSongAudioSourceString as string); // 메모리 누수를 위한 정리
    setPlayingSongAudioSourceString(null);
  };

  return (
    <ReactModal
      isOpen={isPlayingSongModalOpen}
      style={customStyle}
      className="modal-content scroll-modal"
      onRequestClose={handleClosePlayingSongModal}
      closeTimeoutMS={50}
      parentSelector={() => {
        return document.querySelector(
          '#collections-song-modal-container'
        ) as HTMLDivElement;
      }}
    >
      <ModalCloseSVG
        className="absolute top-[30px] right-[20px] hover:cursor-pointer"
        onClick={handleClosePlayingSongModal}
      />
      <div className="animate-imageFloat mt-5 py-5">
        <ModelingAISVG />
      </div>

      <div>{playingSongName}</div>
      <audio
        controls
        src={playingSongAudioSourceString as string}
        className="mt-[5%]"
      ></audio>

      <SongToggleButton
        label={isSongPublic}
        playingSongId={playingSongId}
        accessToken={accessToken}
      />
    </ReactModal>
  );
}
