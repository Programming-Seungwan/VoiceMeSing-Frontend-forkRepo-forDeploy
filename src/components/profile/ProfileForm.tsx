'use client';

import EditPencilSVG from '@public/all/modelNameForm/editPencil.svg';
import { useState } from 'react';

export default function ProfileForm() {
  const [namePlaceholder, setNamePlaceholder] = useState<string>(
    'Programming-seungwan'
  );

  return (
    <form className="flex flex-col items-center">
      <label htmlFor="nickname" className="w-full text-[20px] mb-[15px]">
        Nickname
      </label>

      <div className="w-[600px] h-[45px] shadow-whiteShadow rounded-[5px] flex items-center pl-3 pr-2 mb-[60px]">
        <input
          type="text"
          id="nickname"
          className="grow"
          placeholder={namePlaceholder}
        />
        <EditPencilSVG />
      </div>

      <label htmlFor="password" className="w-full text-[20px] mb-[15px]">
        Password
      </label>

      <div className="w-[600px] h-[45px] shadow-whiteShadow rounded-[5px] flex items-center pl-3 pr-2 mb-[60px]">
        <input type="password" id="password" className="grow" />
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