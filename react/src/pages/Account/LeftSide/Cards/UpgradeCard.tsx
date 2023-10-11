const UpgradeCard = () => {
  return (
    <section className="w-full h-[40vh] overflow-hidden border-[1px] border-neutral-200 shadow relative rounded-lg">
      <section className="w-full h-[40vh] overflow-hidden relative">
        <img
          src={"/images/party2.jpeg"}
          style={{ width: "100%", height: "100%" }}
          className="object-cover w-full"
          alt="Image"
        />
        <div className={"absolute inset-0 bg-black opacity-50"}></div>{" "}
        {/* This div acts as the overlay */}
      </section>

      <section
        style={{ width: "100%", height: "100%", top: 0, left: 0 }}
        className="absolute object-cover w-full items-center justify-center flex flex-col gap-4 z-1"
      >
        <div className="text-white flex flex-col items-center text-center gap-2">
          <span className="text-[15pt] text-gray-50 font-extrabold">
            PartyX
          </span>
          <span className="text-[10pt] font-bold px-3 text-gray-100">
            Get exclusive access to the best parties in town
          </span>
          <span className="w-[100px] shadow-md rounded-xl py-1 bg-white text-black text-[10pt] font-semibold">
            Upgrade
          </span>
        </div>
      </section>
    </section>
  );
};

export default UpgradeCard;
