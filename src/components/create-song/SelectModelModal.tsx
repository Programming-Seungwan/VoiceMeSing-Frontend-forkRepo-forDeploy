import { Dispatch, SetStateAction } from 'react';
import ReactModal from 'react-modal';

interface selectModelModalProp {
  isSelectModelModalOpen: boolean;
  coverSongId: number | null;
  setCoverSongId: Dispatch<SetStateAction<number | null>>;
}

ReactModal.setAppElement('#root');

export default function SelectModelModal({
  isSelectModelModalOpen,
  coverSongId,
  setCoverSongId,
}: selectModelModalProp) {
  const customStyle: ReactModal.Styles = {
    overlay: {
      marginLeft: '300px',
      backgroundColor: '#0C0C11',
      opacity: '0.7',
    },
    content: {
      color: 'white',
      width: '70%',
      height: '70%',
      marginTop: '150px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  };

  return (
    <ReactModal
      isOpen={isSelectModelModalOpen}
      style={customStyle}
      parentSelector={() => {
        return document.querySelector(
          '#create-song-modal-container'
        ) as HTMLDivElement;
      }}
    ></ReactModal>
  );
}
