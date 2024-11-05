import CollectionsCommonItem, {
  collectionsCommonItemProp,
} from '@components/collections/CollectionsCommonItem';
import { collectionSongType } from '@_type/collection/song/collectionSongType';
import CollectionSongItem from './CollectionSongItem';

const DUMMYCOLLECTIONSONG: collectionsCommonItemProp[] = [
  { logoString: '곡 이미지 로고', name: '1번 곡', itemType: 'song' },
  { logoString: '곡 이미지 로고', name: '2번 곡', itemType: 'song' },
  { logoString: '곡 이미지 로고', name: '3번 곡', itemType: 'song' },
  { logoString: '곡 이미지 로고', name: '4번 곡', itemType: 'song' },
  { logoString: '곡 이미지 로고', name: '5번 곡', itemType: 'song' },
];

interface collectionSongItemSectionProp {
  songData: collectionSongType[] | null;
}

export default function CollectionSongItemSection({
  songData,
}: collectionSongItemSectionProp) {
  return (
    <section className="w-full grow grid grid-cols-3 mt-10 gap-x-[100px] scroll-box">
      {songData?.map((element) => (
        <CollectionSongItem
          key={element.coverSongId}
          coverSongId={element.coverSongId}
          coverSongFile={element.coverSongFile}
          coverSongName={element.coverSongName}
          isPublic={element.isPublic}
        />
      ))}
    </section>
  );
}
