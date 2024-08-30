import Footer from '@components/all/Footer/Footer';
import EmailPasswordSignupSection from '@components/signup/EmailPasswordSignupSection';

export default function SignUpPage() {
  return (
    <main className="rightMain items-center overflow-y-scroll h-full">
      <span className="normalFont text-[45px] mt-[70px]">Signup Page</span>
      <EmailPasswordSignupSection />
      <Footer />
    </main>
  );
}
