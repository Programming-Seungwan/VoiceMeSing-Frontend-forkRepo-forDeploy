import Footer from '@components/all/Footer/Footer';
import EmailPasswordLoginSection from '@components/Login/EmailPasswordLoginSection';
import Divider from '@components/Login/Divider';
import SocialLoginSection from '@components/Login/SocialLoginSection';
import GoToSignUpPageSection from '@components/Login/GoToSignUpPageSection';

export default function LoginPage() {
  return (
    <main className="rightMain items-center overflow-y-scroll relative">
      <span className="normalFont text-[45px] mt-[70px]">LogIn Page</span>
      <EmailPasswordLoginSection />
      <GoToSignUpPageSection />
      <Divider />
      <SocialLoginSection />
      <Footer />
    </main>
  );
}
