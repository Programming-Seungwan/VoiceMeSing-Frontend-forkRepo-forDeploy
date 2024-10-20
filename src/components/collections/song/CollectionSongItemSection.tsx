import CollectionsCommonItem, {
  collectionsCommonItemProp,
} from '@components/collections/CollectionsCommonItem';

const DUMMYCOLLECTIONSONG: collectionsCommonItemProp[] = [
  { logoString: '곡 이미지 로고', name: '1번 곡', itemType: 'song' },
  { logoString: '곡 이미지 로고', name: '2번 곡', itemType: 'song' },
  { logoString: '곡 이미지 로고', name: '3번 곡', itemType: 'song' },
  { logoString: '곡 이미지 로고', name: '4번 곡', itemType: 'song' },
  { logoString: '곡 이미지 로고', name: '5번 곡', itemType: 'song' },
];

export default function CollectionSongItemSection() {
  return (
    <section className="w-full grow grid grid-cols-3 mt-10 gap-x-[100px] scroll-box">
      {DUMMYCOLLECTIONSONG.map((element) => (
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
