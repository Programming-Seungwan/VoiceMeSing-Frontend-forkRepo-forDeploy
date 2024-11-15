import ReactModal from 'react-modal';
import ModalCloseSVG from '@public/all/modal/modalClose.svg';
import { Dispatch, SetStateAction } from 'react';
import ModelingAISVG from '@public/home/modelingAI.svg';
import MakingSongSVG from '@public/home/makingSongAI.svg';

ReactModal.setAppElement('#root');

interface communityPlayingSongModalProps {
  isCommunityPlayingSongModalOpen: boolean;
  setIsCommunityPlayingSongModalOpen: Dispatch<SetStateAction<boolean>>;
  communityPlayingSongName: string | null;
  setCommunityPlayingSongName: Dispatch<SetStateAction<string | null>>;
  setCommunityPlayingSongAudio: Dispatch<SetStateAction<File | null>>;
  communityPlayingSongAudioSourceString: string | null;
  setCommunityPlayingSongAudioSourceString: Dispatch<
    SetStateAction<string | null>
  >;
}

export default function CommunityPlayingSongModal({
  isCommunityPlayingSongModalOpen,
  communityPlayingSongName,
  communityPlayingSongAudioSourceString,
  setCommunityPlayingSongName,
  setCommunityPlayingSongAudio,
  setIsCommunityPlayingSongModalOpen,
  setCommunityPlayingSongAudioSourceString,
}: communityPlayingSongModalProps) {
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

  const handleCloseCommunityPlayingSongModal = () => {
    setIsCommunityPlayingSongModalOpen(false);
    setCommunityPlayingSongAudio(null);
    setCommunityPlayingSongName(null);
    URL.revokeObjectURL(communityPlayingSongAudioSourceString as string);
    setCommunityPlayingSongAudioSourceString(null);
  };

  return (
    <ReactModal
      isOpen={isCommunityPlayingSongModalOpen}
      style={customStyle}
      onRequestClose={handleCloseCommunityPlayingSongModal}
      className="modal-content scroll-modal"
      closeTimeoutMS={50}
      parentSelector={() => {
        return document.querySelector(
          '#community-song-modal-container'
        ) as HTMLDivElement;
      }}
    >
      <ModalCloseSVG
        className="absolute top-[30px] right-[20px] hover:cursor-pointer"
        onClick={handleCloseCommunityPlayingSongModal}
      />
      <div className="animate-imageFloat mt-5 py-5">
        <ModelingAISVG />
      </div>

      <div>{communityPlayingSongName}</div>
      <audio
        controls
        src={communityPlayingSongAudioSourceString as string}
        className="mt-[5%]"
      ></audio>
    </ReactModal>
  );
}
