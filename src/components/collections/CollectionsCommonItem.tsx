import RecyclingBinSVG from '@public/collections/recyclingBin.svg';

export interface collectionsCommonItemProp {
  logoString: string; // 추후에 로고 타입으로 바뀔 수 있음
  name: string;
  itemType: 'model' | 'song';
}

export default function CollectionsCommonItem({
  logoString = '이미지 로고',
  name,
  itemType,
}: collectionsCommonItemProp) {
  return (
    <div className="h-[300px] rounded-[20px] relative flex flex-col py-10">
      <RecyclingBinSVG className="absolute top-5 right-5" />
      <div className="w-[80%] h-fit flex justify-center items-center">
        {logoString}
      </div>
      <span className="w-[80%] h-fit flex justify-center items-center text-[20px] text-white normalFont">
        {name}
      </span>
      <div className="w-[80%] h-fit flex flex-col text-[15px] normalFont items-start">
        {itemType === 'model' && (
          <span className="text-white">Create Song with this model</span>
        )}
        <span className="text-themeColor">Show Details</span>
      </div>
    </div>
  );
}
