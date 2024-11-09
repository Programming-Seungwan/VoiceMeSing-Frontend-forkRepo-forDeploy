'use client';
import Footer from '@components/all/Footer/Footer';
import NameSearchInput from '@components/collections/model/NameSearchInput';
import CollectionVocalItemSection from '@components/collections/model/CollectionVocalItemSection';
import useAccessTokenRedirect from '@hooks/useAccessTokenRedirect';
import CollectionsModelSkeleton from '@components/collections/model/CollectionsModelSkeleton';
import { useEffect, useState } from 'react';
import { collectionModelType } from '@_type/collection/model/collectionModelType';
import { useGetUserModel } from '@hooks/model/useGetUserModel';

export default function CollectionsModelPage() {
  const accessToken = useAccessTokenRedirect();
  // const [collectionModelList, setCollectionModelList] = useState<
  //   collectionModelType[] | null
  // >(null);

  // useEffect(() => {
  //   async function getUserColletionModels() {
  //     const response = await fetch(
  //       `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/collection-model`,
  //       {
  //         method: 'GET',
  //         credentials: 'include',
  //         headers: {
  //           access: `${accessToken}`,
  //         },
  //       }
  //     );

  //     if (!response.ok) {
  //       throw new Error(
  //         '사용자의 collecion model 페이지의 음성 모델을 불러오는 데에 실패했습니다!'
  //       );
  //     }

  //     const responseData = await response.json();

  //     setCollectionModelList(responseData.data);
  //   }

  //   if (accessToken !== null) {
  //     getUserColletionModels();
  //   }
  // }, [accessToken]);

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
