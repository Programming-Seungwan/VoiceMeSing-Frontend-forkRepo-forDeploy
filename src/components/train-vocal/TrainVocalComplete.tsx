interface trainVocalCompleteProp {
  audioFile: File | null;
  modelName: string | null;
}

export default function TrainVocalComplete({
  audioFile,
  modelName,
}: trainVocalCompleteProp) {
  const handleClickMakeModelButton = (): void => {
    console.log(audioFile);
    console.log(modelName);
  };

  return (
    <section className="w-[90%] flex flex-col mt-[90px] items-center">
      <span className="text-white normalFont text-[35px]">
        Let{"'s"} Make your Own Voice Model!
      </span>
      <span className="text-[15px] text-progressBarGray mt-[50px]">
        Click {"'Make Model'"} button below
      </span>
      <button
        className="w-[150px] h-[60px] text-white bg-themeColor rounded-[10px] mt-[100px]"
        onClick={handleClickMakeModelButton}
      >
        Make Model
      </button>
    </section>
  );
}
