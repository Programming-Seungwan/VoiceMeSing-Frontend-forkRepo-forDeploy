import { collectionModelType } from '@_type/collection/model/collectionModelType';
import CollectionVocalItem from './CollectionVocalItem';

interface collectionVocalItemSectionProp {
  modelData: collectionModelType[] | null;
}

export default function CollectionVocalItemSection({
  modelData,
}: collectionVocalItemSectionProp) {
  return (
    <section className="w-full grow grid grid-cols-3 mt-10 gap-x-[100px] scroll-box">
      {modelData?.map((element) => (
        <CollectionVocalItem
          key={element.voiceModelId}
          voiceModelId={element.voiceModelId}
          voiceModelName={element.voiceModelName}
        />
      ))}
    </section>
  );
}
