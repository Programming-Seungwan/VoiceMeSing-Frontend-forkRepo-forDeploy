'use client';

import EditPencilSVG from '@public/all/modelNameForm/editPencil.svg';
import { ChangeEvent, Dispatch, SetStateAction, FormEvent } from 'react';
import { useAppSelector } from '@hooks/reduxHooks';
import { useRouter } from 'next/navigation';

interface profileFormProp {
  nickname: string;
  password: string;
  changeUserProfileNickname: Dispatch<SetStateAction<string>>;
  changeUserProfilePassword: Dispatch<SetStateAction<string>>;
}

export default function ProfileForm({
  nickname,
  password,
  changeUserProfileNickname,
  changeUserProfilePassword,
}: profileFormProp) {
  const accessToken = useAppSelector(
    (selector) => selector.accessToken.accessToken
  );

  const router = useRouter();

  const handleChangeUserNickname = (ev: ChangeEvent<HTMLInputElement>) => {
    changeUserProfileNickname(ev.target.value);
  };

  const handleChangeUserPassword = (ev: ChangeEvent<HTMLInputElement>) => {
    changeUserProfilePassword(ev.target.value);
  };

  // form이 제출되면 요청을 전송하고, 그 다음에 페이지를 새로고침 해주어야 한다.
  const handleSubmitUserProfileForm = async (
    ev: FormEvent<HTMLFormElement>
  ) => {
    ev.preventDefault();
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/profile-update`,
        {
          method: 'PATCH',
          credentials: 'include',
          headers: {
            access: accessToken as string,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nickname: nickname,
            password: password,
            introduction: 'user nickname and password change in profile page',
          }),
        }
      );

      if (!response.ok) {
        throw new Error('failed to patch new nickname and password of user!');
      }

      location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form
      className="flex flex-col items-center grow"
      onSubmit={handleSubmitUserProfileForm}
    >
      <label htmlFor="nickname" className="w-full text-[20px] mb-[15px]">
        Nickname
      </label>

      <div className="w-[600px] h-[45px] shadow-whiteShadow rounded-[5px] flex items-center pl-3 pr-2 mb-[60px]">
        <input
          type="text"
          id="nickname"
          className="grow"
          placeholder={nickname}
          onChange={handleChangeUserNickname}
        />
        <EditPencilSVG />
      </div>

      <label htmlFor="password" className="w-full text-[20px] mb-[15px]">
        Password
      </label>

      <div className="w-[600px] h-[45px] shadow-whiteShadow rounded-[5px] flex items-center pl-3 pr-2 mb-[60px]">
        <input
          type="password"
          id="password"
          className="grow"
          value={password}
          onChange={handleChangeUserPassword}
        />
        <EditPencilSVG />
      </div>

      <button
        type="submit"
        className="w-[150px] h-[60px] rounded-[10px] bg-themeColor"
      >
        Save
      </button>
    </form>
  );
}
