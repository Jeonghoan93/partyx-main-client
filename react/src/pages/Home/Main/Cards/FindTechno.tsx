const FindTechno = () => {
  return (
    <section className="w-full h-[50vh] overflow-hidden relative mb-3 rounded-lg border-[1px] border-neutral-100 shadow-lg">
      <section className="w-full h-[50vh] overflow-hidden relative">
        <img
          src={"/images/party.jpg"}
          style={{ width: "100%", height: "100%" }}
          className="object-cover w-full"
          alt="Image"
        />
        <div className={"absolute inset-0 bg-black opacity-50"}></div>{" "}
        {/* This div acts as the overlay */}
      </section>

      <section
        style={{
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
        }}
        className="absolute object-cover w-full items-center justify-center flex flex-col gap-4 z-1"
      >
        <div className="text-white flex flex-row items-center gap-3 font-bold text-[14pt]">
          Find techno parties, festivals and rave or create your own
        </div>
      </section>
    </section>
  );
};

export default FindTechno;
