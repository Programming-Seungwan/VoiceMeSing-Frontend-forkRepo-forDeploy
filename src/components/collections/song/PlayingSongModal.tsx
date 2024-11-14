'use client';

import ReactModal from 'react-modal';
import ModalCloseSVG from '@public/all/modal/modalClose.svg';
import { Dispatch, SetStateAction } from 'react';

interface playingSongModalProp {
  isPlayingSongModalOpen: boolean;
}

ReactModal.setAppElement('#root');

export default function PlayingSongModal() {
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
    },
  };

  return (
    <ReactModal
      isOpen={true}
      style={customStyle}
      className="modal-content scroll-modal"
    >
      <ModalCloseSVG className="absolute top-[30px] right-[20px] hover:cursor-pointer" />
    </ReactModal>
  );
}
