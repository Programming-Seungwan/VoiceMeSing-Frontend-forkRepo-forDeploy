import EditPencilSVG from '@public/all/modelNameForm/editPencil.svg';
import SendAirplaneSVG from '@public/all/modelNameForm/sendAirplane.svg';

export default function ModelNameForm() {
  return (
    <section className="w-[90%] flex flex-col items-center">
      <span className="text-white text-[35px] normalFont mt-[90px]">
        Enter Model Name
      </span>
      <span className="text-[15px] normalFont text-progressBarGray mt-[30px]">
        This Model Name can not be edited later, so choose carefully.
      </span>

      <div className="w-[80%] h-[50px] mt-[50px] shadow-whiteShadow rounded-[25px] flex justify-between items-center px-[30px]">
        {/* 연필 로고 UI */}
        <EditPencilSVG />
        {/* input */}
        <input
          type="text"
          placeholder="Enter Your Own Vocal Name"
          className="grow ml-3"
        />
        {/* 비행기 로고 UI */}
        <SendAirplaneSVG className="hover:cursor-pointer" />
      </div>
    </section>
  );
}
