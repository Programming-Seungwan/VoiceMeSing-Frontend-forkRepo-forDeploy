'use client';
import Footer from '@components/all/Footer/Footer';
import CommunityContentSections from '@components/community/CommunityContentSection';
import { useState } from 'react';
import CommunityPlayingSongModal from '@components/community/CommunityPlayingSongModal';

export default function Community() {
  const [isCommunityPlayingSongModalOpen, setIsCommunityPlayingSongModalOpen] =
    useState<boolean>(false);

  const [communityPlayingSongName, setCommunityPlayingSongName] = useState<
    string | null
  >(null);

  const [communityPlayingSongAudio, setCommunityPlayingSongAudio] =
    useState<File | null>(null);

  const [
    communityPlayingSongAudioSourceString,
    setCommunityPlayingSongAudioSourceString,
  ] = useState<string | null>(null);

  return (
    <section
      className="rightMain items-center overflow-y-scroll relative"
      id="community-song-modal-container"
    >
      <div className="w-[90%] flex justify-start items-center mt-[50px]">
        <span className="text-white fontNormal text-[35px]">Community</span>
      </div>
      <CommunityContentSections
        setIsCommunityPlayingSongModalOpen={setIsCommunityPlayingSongModalOpen}
        setCommunityPlayingSongName={setCommunityPlayingSongName}
        setCommunityPlayingSongAudio={setCommunityPlayingSongAudio}
        setCommunityPlayingSongAudioSourceString={
          setCommunityPlayingSongAudioSourceString
        }
      />
      <CommunityPlayingSongModal
        isCommunityPlayingSongModalOpen={isCommunityPlayingSongModalOpen}
        setIsCommunityPlayingSongModalOpen={setIsCommunityPlayingSongModalOpen}
        communityPlayingSongName={communityPlayingSongName}
        setCommunityPlayingSongName={setCommunityPlayingSongName}
        communityPlayingSongAudioSourceString={
          communityPlayingSongAudioSourceString
        }
        setCommunityPlayingSongAudio={setCommunityPlayingSongAudio}
        setCommunityPlayingSongAudioSourceString={
          setCommunityPlayingSongAudioSourceString
        }
      />
      <Footer />
    </section>
  );
}
