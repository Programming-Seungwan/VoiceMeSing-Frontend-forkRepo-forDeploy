import { Dispatch, SetStateAction } from 'react';
import ReactModal from 'react-modal';
import ModalCloseSVG from '@public/all/modal/modalClose.svg';

interface selectModelModalProp {
  isSelectModelModalOpen: boolean;
  setModelModalOpen: Dispatch<SetStateAction<boolean>>;
  coverSongId: number | null;
  setCoverSongId: Dispatch<SetStateAction<number | null>>;
}

ReactModal.setAppElement('#root');

export default function SelectModelModal({
  isSelectModelModalOpen,
  setModelModalOpen,
  coverSongId,
  setCoverSongId,
}: selectModelModalProp) {
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
      backgroundColor: '#232333',
      outline: 'none',
      borderRadius: '15px',
      opacity: 1,
      display: 'flex',
      position: 'relative',
    },
  };

  const handleCloseModal = () => {
    setModelModalOpen((prev) => !prev);
  };

  return (
    <ReactModal
      isOpen={isSelectModelModalOpen}
      style={customStyle}
      className="modal-content"
      onRequestClose={handleCloseModal}
      closeTimeoutMS={50}
      parentSelector={() => {
        return document.querySelector(
          '#create-song-modal-container'
        ) as HTMLDivElement;
      }}
    >
      <ModalCloseSVG
        className="absolute top-[30px] right-[20px] hover:cursor-pointer"
        onClick={handleCloseModal}
      />
    </ReactModal>
  );
}
