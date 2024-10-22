import ProfileLogoSVG from '@public/profile/profileLogo.svg';
import Footer from '@components/all/Footer/Footer';

export default function ProfileSkeleton() {
  return (
    <main className="rightMain items-center overflow-y-scroll">
      <div className="flex h-[150px] items-center gap-x-[50px]">
        <ProfileLogoSVG />
        <span className="normalFont text-white text-[30px]">
          Manage Your Profile and Account
        </span>
      </div>
      <div className="w-[200px] h-[200px] rounded-full bg-gray-800">
        {/* 해당 영역은 추후에 알맞는 이미지로 대체될 것임 */}
      </div>
      <form className="flex flex-col items-center grow">
        <div className="w-full flex justify-start items-center">
          <div className="w-[30%] h-[45px] text-[20px] mb-[15px] bg-gray-800"></div>
        </div>

        <div className="w-[600px] h-[45px] bg-gray-800 rounded-[5px] flex items-center pl-3 pr-2 mb-[60px]">
          <input type="text" id="nickname" className="grow" />
        </div>

        <div className="w-full flex justify-start items-center">
          <div className="w-[30%] h-[45px] text-[20px] mb-[15px] bg-gray-800"></div>
        </div>

        <div className="w-[600px] h-[45px] bg-gray-800 rounded-[5px] flex items-center pl-3 pr-2 mb-[60px]">
          <input type="password" id="password" className="grow" />
        </div>

        <div className="w-[150px] h-[60px] rounded-[10px] bg-themeColor flex justify-center items-center">
          Save
        </div>
      </form>
      <Footer />
    </main>
  );
}
