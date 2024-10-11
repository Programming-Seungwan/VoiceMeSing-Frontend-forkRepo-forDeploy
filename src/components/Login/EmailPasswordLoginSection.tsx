'use client';
import { useState } from 'react';
import { useAppDispatch } from '@hooks/reduxHooks';
import { replaceAccessTokenState } from '@context/slices/accessToken';
import { useRouter } from 'next/navigation';

export default function EmailPasswordLoginSection() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const dispatchAccessToken = useAppDispatch();
  const router = useRouter();

  const handleChangeEmail = (email: string): void => {
    setEmail(email);
  };

  const handleChangePassword = (password: string): void => {
    setPassword(password);
  };

  const handleClickLoginButton = async () => {
    if (!email || !password) return;

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/login`,
      {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      }
    );

    if (!response.ok) {
      throw new Error('로그인 로직에 실패했습니다!');
    }

    if (response.headers.get('access')) {
      const accessToken = response.headers.get('access') as string;
      dispatchAccessToken(replaceAccessTokenState(accessToken));
      router.replace('/');
    }
  };

  return (
    <section className="flex flex-col mt-[40px] w-[90%] items-center">
      <div className="w-[60%] h-fit flex flex-col gap-y-[35px] py-5">
        <span className="text-[30px] normalFont">Email</span>
        <input
          type="email"
          placeholder="name.domain.com"
          className="shadow-whiteShadow w-full h-10 rounded-[5px] pl-3"
          onChange={(event) => handleChangeEmail(event.target.value)}
          value={email}
        />
      </div>
      <div className="w-[60%] h-fit flex flex-col gap-y-[35px] py-5">
        <span className="text-[30px] normalFont">Enter your password</span>
        <input
          type="text"
          placeholder="Enter your secret password"
          className="shadow-whiteShadow w-full h-10 rounded-[5px] pl-3"
          onChange={(event) => handleChangePassword(event.target.value)}
          value={password}
        />
      </div>
      <div className="w-[60%] h-fit flex justify-center items-center pt-5">
        <button
          className="bg-themeColor text-white rounded-[10px] w-[120px] h-[50px]"
          onClick={handleClickLoginButton}
        >
          Log In
        </button>
      </div>
    </section>
  );
}

// 해당 로직은 추후에 유효성 검사가 진행되어야 함
