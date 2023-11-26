import LineContainer from "src/components/LineContainer";

const SwishCard = () => {
  return (
    <LineContainer>
      <section className="cursor-pointer flex flex-row justify-between items-center ">
        <div className="flex flex-row gap-2">
          <span className="font-semibold text-[12pt]">Swish</span>
        </div>

        <div className="flex flex-row gap-1 items-center">
          <span>
            <img
              src={"/images/swish.png"}
              alt="swish"
              className={"w-[20px] h-[27px] rounded-lg"}
            />
          </span>
        </div>
      </section>
    </LineContainer>
  );
};

export default SwishCard;
