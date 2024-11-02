'use client';
import Footer from '@components/all/Footer/Footer';
import useReissueAccessTokenWithRefreshToken from '@hooks/useReissueAccessTokenWithRefreshToken';
import ModelingAISVG from '@public/home/modelingAI.svg';
import MakingSongSVG from '@public/home/makingSongAI.svg';

export default function HomePage() {
  useReissueAccessTokenWithRefreshToken();

  return (
    <main className="rightMain items-center overflow-y-scroll">
      <div className="h-[200px] flex justify-center items-center text-2xl tracking-[3px] py-[30px]">
        Train Your Own Voice and Create Cover!
      </div>

      <div className="flex gap-x-[60px] h-[200px] mb-[50px]">
        <ModelingAISVG className="h-[200px] animate-imageFloat" />

        <div className="w-[300px]  flex flex-col gap-y-5 normalFont">
          <span className="font-[45px] text-white">STEP 1</span>
          <span className="font-[30px] text-lightGray">
            train AI Vocal providing your own voice
          </span>
          {/* 추후 사용 이미지가 들어갈 UI 위치 */}
        </div>
      </div>

      <div className="flex gap-x-[60px] h-[200px]">
        <MakingSongSVG className="animate-imageFloat" />
        <div className="w-[300px] h-[200px] flex flex-col gap-y-5 normalFont">
          <span className='font-[45px] text-white"'>STEP 2</span>
          <span className="font-[30px] text-lightGray">
            Make AI Cover by using your voice model
          </span>
          {/* 추후 사용 이미지가 들어갈 UI 위치 */}
        </div>
      </div>
      <div className="grow"></div>

      <Footer />
    </main>
  );
}
