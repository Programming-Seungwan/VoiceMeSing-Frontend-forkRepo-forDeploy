// 해당 컴포넌트에서는 다른 페이지로 이동할 수 있는 경로들이 포함됨
import Link from 'next/link';
import HomeSVG from '@public/SideNavBar/HomeSVG.svg';
import SongCoverSVG from '@public/SideNavBar/SongCoverSVG.svg';
import CollectionSVG from '@public/SideNavBar/CollectionSVG.svg';
import ProfileSVG from '@public/SideNavBar/ProfileSVG.svg';
import CommunitySVG from '@public/SideNavBar/CommunitySVG.svg';

export default function Tabs() {
  return (
    <div className="w-[275px] h-fit flex flex-col justify-start items-center gap-x-7">
      <div
        id="home"
        className="w-[260px] h-[60px] rounded-lg hover:bg-hoverGray"
      >
        <Link
          className="flex w-full h-full pl-4 justify-start items-center gap-x-8"
          href="/"
        >
          <HomeSVG />
          <span>Home</span>
        </Link>
      </div>
      <div id="songCover" className="w-[260px] h-fit flex flex-col">
        <div
          id="songCoverTitle"
          className="w-[260px] h-[60px] flex pl-4 justify-start items-center gap-x-8"
        >
          <SongCoverSVG />
          <span className="text-lightGray">AI Song Cover</span>
        </div>
        <Link
          href="/train-vocal"
          className="w-[260px] h-[60px] rounded-lg pl-[80px] flex justify-start items-center hover:bg-hoverGray"
        >
          Train Vocal
        </Link>
        <Link
          href="/create-song"
          className="w-[260px] h-[60px] rounded-lg pl-[80px] flex justify-start items-center hover:bg-hoverGray"
        >
          Create Song
        </Link>
        <div id="create-song"></div>
      </div>
      <div id="collection" className="w-[260px] h-fit flex flex-col">
        <div
          id="CollectionTitle"
          className="w-[260px] h-[60px] flex pl-4 justify-start items-center gap-x-8"
        >
          <CollectionSVG />
          <span className="text-lightGray">Collection</span>
        </div>
        <Link
          href="/collections/model"
          className="w-[260px] h-[60px] rounded-lg pl-[80px] flex justify-start items-center hover:bg-hoverGray"
        >
          Vocal
        </Link>
        <Link
          href="/collections/song"
          className="w-[260px] h-[60px] rounded-lg pl-[80px] flex justify-start items-center hover:bg-hoverGray"
        >
          Song
        </Link>
        <div id="create-song"></div>
      </div>
      <div
        id="profile"
        className="w-[260px] h-[60px] rounded-lg hover:bg-hoverGray"
      >
        <Link
          className="flex w-full h-full pl-4 justify-start items-center gap-x-8"
          href="/profile"
        >
          <ProfileSVG />
          <span>Profile</span>
        </Link>
      </div>
      <div
        id="community"
        className="w-[260px] h-[60px] rounded-lg hover:bg-hoverGray"
      >
        <Link
          className="flex w-full h-full pl-4 justify-start items-center gap-x-8"
          href="/community"
        >
          <CommunitySVG />
          <span>Community</span>
        </Link>
      </div>
    </div>
  );
}
