export default function EmailPasswordLoginSection() {
  return (
    <section className="flex flex-col mt-[40px] w-[90%] items-center">
      <div className="w-[60%] h-fit flex flex-col gap-y-[35px] py-5">
        <span className="text-[30px] normalFont">Email</span>
        <input
          type="email"
          placeholder="name.domain.com"
          className="shadow-whiteShadow w-full h-10 rounded-[5px] pl-3"
        />
      </div>
      <div className="w-[60%] h-fit flex flex-col gap-y-[35px] py-5">
        <span className="text-[30px] normalFont">Enter your password</span>
        <input
          type="text"
          placeholder="Enter your secret password"
          className="shadow-whiteShadow w-full h-10 rounded-[5px] pl-3"
        />
      </div>
      <div className="w-[60%] h-fit flex justify-center items-center pt-5">
        <button className="bg-themeColor text-white rounded-[10px] w-[120px] h-[50px]">
          Log In
        </button>
      </div>
    </section>
  );
}

// 해당 로직은 추후에 유효성 검사가 진행되어야 함
