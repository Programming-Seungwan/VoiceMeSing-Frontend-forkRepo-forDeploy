'use client';
import Footer from '@components/all/Footer/Footer';
import VocalNameSearchInput from '@components/collections/model/VocalNameSearchInput';
import CollectionVocalItemSection from '@components/collections/model/CollectionVocalItemSection';
import useAccessTokenRedirect from '@hooks/useAccessTokenRedirect';
import CollectionsModelSkeleton from '@components/collections/model/CollectionsModelSkeleton';

export default function CollectionsModelPage() {
  const accessToken = useAccessTokenRedirect();
  return (
    <>
      {accessToken === null ? (
        <CollectionsModelSkeleton />
      ) : (
        <main className="rightMain items-center overflow-y-scroll relative">
          <div className="w-[90%] flex justify-between items-center mt-[50px]">
            <span className="text-white fontNormal text-[35px]">
              Collections / Vocal
            </span>
            <VocalNameSearchInput />
          </div>
          <CollectionVocalItemSection />
          <Footer />
        </main>
      )}
    </>
  );
}
