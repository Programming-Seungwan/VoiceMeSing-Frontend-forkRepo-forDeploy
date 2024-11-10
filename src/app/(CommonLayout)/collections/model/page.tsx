'use client';
import Footer from '@components/all/Footer/Footer';
import NameSearchInput from '@components/collections/model/NameSearchInput';
import CollectionVocalItemSection from '@components/collections/model/CollectionVocalItemSection';
import useAccessTokenRedirect from '@hooks/useAccessTokenRedirect';
import CollectionsModelSkeleton from '@components/collections/model/CollectionsModelSkeleton';
import { useGetUserModel } from '@hooks/model/useGetUserModel';

export default function CollectionsModelPage() {
  const accessToken = useAccessTokenRedirect();

  const { data: collectionModelList } = useGetUserModel(accessToken as string);

  return (
    <>
      {accessToken === null || collectionModelList === undefined ? (
        <CollectionsModelSkeleton />
      ) : (
        <main className="rightMain items-center overflow-y-scroll relative">
          <div className="w-[90%] flex justify-between items-center mt-[50px]">
            <span className="text-white fontNormal text-[35px]">
              Collections / Vocal
            </span>
            <NameSearchInput category="model" />
          </div>
          <CollectionVocalItemSection modelData={collectionModelList} />
          <Footer />
        </main>
      )}
    </>
  );
}
