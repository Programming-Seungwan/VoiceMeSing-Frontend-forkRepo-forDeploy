import MagnifyingGlassSVG from '@public/create-song/magnifyingGlass.svg';

export default function CreateSongFirstStep() {
  return (
    <div className="w-[90%] mt-[50px] flex flex-col items-center gap-y-[60px]">
      <span className="text-[30px] text-white">Select your Voice Model</span>
      <section className="w-[60%] h-[250px] flex justify-center items-center rounded-[20px] bg-[#222227] hover:cursor-pointer">
        <MagnifyingGlassSVG />
      </section>
    </div>
  );
}
