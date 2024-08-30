'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function EmailPasswordSignupSection() {
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const [nickname, setNickname] = useState<string | null>(null);

  const router = useRouter();

  const handleChangeEmail = (email: string) => {
    setEmail(email);
  };

  const handleChangePassword = (password: string) => {
    setPassword(password);
  };

  const handleChangeNickname = (nickname: string) => {
    setNickname(nickname);
  };

  const handleCLickSignUpButton = async () => {
    if (!email || !password || !nickname) return;

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/signup`,
      {
        method: 'POST',
        body: JSON.stringify({
          email: email,
          password: password,
          nickname: nickname,
        }),
      }
    );

    if (!response.ok) {
      throw new Error('회원 가입에 실패했습니다!');
    }

    router.push('/');
  };

  return (
    <section className="flex flex-col mt-[40px] w-[90%] items-center grow">
      <div className="w-[60%] h-fit flex flex-col gap-y-[35px] py-5">
        <span className="text-[30px] normalFont">Email</span>
        <input
          type="email"
          placeholder="name.domain.com"
          className="shadow-whiteShadow w-full h-10 rounded-[5px] pl-3"
          onChange={(event) => handleChangeEmail(event.target.value)}
        />
      </div>
      <div className="w-[60%] h-fit flex flex-col gap-y-[35px] py-5">
        <span className="text-[30px] normalFont">Enter your password</span>
        <input
          type="text"
          placeholder="Enter your secret password"
          className="shadow-whiteShadow w-full h-10 rounded-[5px] pl-3"
          onChange={(event) => handleChangePassword(event.target.value)}
        />
      </div>
      <div className="w-[60%] h-fit flex flex-col gap-y-[35px] py-5">
        <span className="text-[30px] normalFont">Enter your nickname</span>
        <input
          type="text"
          placeholder="Enter your secret nickname"
          className="shadow-whiteShadow w-full h-10 rounded-[5px] pl-3"
          onChange={(event) => handleChangeNickname(event.target.value)}
        />
      </div>
      <div className="w-[60%] h-fit flex justify-center items-center pt-5">
        <button
          className="bg-themeColor text-white rounded-[10px] w-[120px] h-[50px]"
          onClick={handleCLickSignUpButton}
        >
          signup
        </button>
      </div>
    </section>
  );
}

// 해당 로직은 추후에 유효성 검사가 진행되어야 함
