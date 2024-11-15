import Footer from '@components/all/Footer/Footer';
import CommunityContentSections from '@components/community/CommunityContentSection';

export default function Community() {
  return (
    <main className="rightMain items-center overflow-y-scroll relative">
      <div className="w-[90%] flex justify-start items-center mt-[50px]">
        <span className="text-white fontNormal text-[35px]">Community</span>
      </div>
      <CommunityContentSections />
      <Footer />
    </main>
  );
}
