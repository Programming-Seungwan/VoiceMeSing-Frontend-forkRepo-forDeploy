'use client';
import Footer from '@components/all/Footer/Footer';
import useReissueAccessTokenWithRefreshToken from '@hooks/useReissueAccessTokenWithRefreshToken';

export default function HomePage() {
  useReissueAccessTokenWithRefreshToken();

  return (
    <main className="rightMain items-center overflow-y-scroll">
      <div className="h-[250px] flex justify-center items-center text-2xl tracking-[3px]">
        Train Your Own Voice and Create Cover!
      </div>

      <div className="h-[450px] flex flex-col gap-y-5 normalFont">
        <span className="font-[45px] text-white">STEP 1</span>
        <span className="font-[30px] text-lightGray">
          train AI Vocal providing your own voice
        </span>
        {/* 추후 사용 이미지가 들어갈 UI 위치 */}
      </div>

      <div className="h-[450px] flex flex-col gap-y-5 normalFont">
        <span className='font-[45px] text-white"'>STEP 2</span>
        <span className="font-[30px] text-lightGray">
          Make AI Cover by using your voice model
        </span>
        {/* 추후 사용 이미지가 들어갈 UI 위치 */}
      </div>
      <Footer />
    </main>
  );
}
