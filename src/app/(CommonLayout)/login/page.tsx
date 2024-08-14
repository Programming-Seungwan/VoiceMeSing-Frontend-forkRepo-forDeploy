// 로그인 페이지, 백엔드로 보낼 pw와 id를 받을 form이 필요함
import Footer from '@components/all/Footer/Footer';
import EmailPasswordLoginSection from '@components/Login/EmailPasswordLoginSection';
import Divider from '@components/Login/Divider';
import SocialLoginSection from '@components/Login/SocialLoginSection';

export default function LoginPage() {
  return (
    <main className="rightMain items-center overflow-y-scroll relative">
      <span className="normalFont text-[45px] mt-[70px]">LogIn Page</span>
      <EmailPasswordLoginSection />
      <Divider />
      <SocialLoginSection />
      <Footer />
    </main>
  );
}
