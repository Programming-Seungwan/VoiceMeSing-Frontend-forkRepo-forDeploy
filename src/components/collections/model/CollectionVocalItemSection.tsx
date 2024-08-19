import CollectionsCommonItem from '@components/collections/CollectionsCommonItem';
import { collectionsCommonItemProp } from '@components/collections/CollectionsCommonItem';

// 해당 페이지에서 백엔드 단에 요청하여 데이터를 받아 온다

const DUMMYCOLLECTIONVOCAL: collectionsCommonItemProp[] = [
  { logoString: '모델 이미지 로고', name: '1번 모델', itemType: 'model' },
  { logoString: '모델 이미지 로고', name: '2번 모델', itemType: 'model' },
  { logoString: '모델 이미지 로고', name: '3번 모델', itemType: 'model' },
  { logoString: '모델 이미지 로고', name: '4번 모델', itemType: 'model' },
  { logoString: '모델 이미지 로고', name: '5번 모델', itemType: 'model' },
];

export default function CollectionVocalItemSection() {
  return (
    <section className="w-full grow grid grid-cols-3 mt-10 gap-x-[100px] scroll-box">
      {DUMMYCOLLECTIONVOCAL.map((element) => (
        <CollectionsCommonItem
          key={element.name}
          logoString={element.logoString}
          name={element.name}
          itemType={element.itemType}
        />
      ))}
    </section>
  );
}
