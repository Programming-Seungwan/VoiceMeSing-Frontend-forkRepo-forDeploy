import { collectionSongType } from '@_type/collection/song/collectionSongType';
import CollectionSongItem from './CollectionSongItem';

interface collectionSongItemSectionProp {
  songData: collectionSongType[] | null;
  accessToken: string | null;
}

export default function CollectionSongItemSection({
  songData,
  accessToken,
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
          accessToken={accessToken}
        />
      ))}
    </section>
  );
}
