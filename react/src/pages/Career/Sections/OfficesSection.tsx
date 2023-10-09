const OfficesSection = () => {
  return (
    <div className="bg-gray-50">
      <section
        className="w-full h-[40vh] overflow-hidden relative mb-3"
        style={{ maxWidth: "600px" }}
      >
        <section className="w-full h-[50vh] overflow-hidden relative">
          <img
            src={"/images/office1.jpg"}
            style={{ width: "100%", height: "100%" }}
            className="object-cover w-full"
            alt="Image"
          />
          <div className={"absolute inset-0 bg-black opacity-30"}></div>{" "}
          {/* This div acts as the overlay */}
        </section>

        <section
          style={{ width: "100%", height: "100%", top: 0, left: 0 }}
          className="absolute object-cover w-full items-center justify-center flex flex-col gap-4 z-1"
        >
          <div className="text-white flex flex-row items-center gap-3 font-bold text-[14pt]">
            <span>Stockholm Office</span>
          </div>
        </section>
      </section>

      <section
        className="w-full h-[40vh] overflow-hidden relative my-3"
        style={{ maxWidth: "600px" }}
      >
        <section className="w-full h-[50vh] overflow-hidden relative">
          <img
            src={"/images/office2.jpg"}
            style={{ width: "100%", height: "100%" }}
            className="object-cover w-full"
            alt="Image"
          />
          <div className={"absolute inset-0 bg-black opacity-30"}></div>{" "}
          {/* This div acts as the overlay */}
        </section>

        <section
          style={{ width: "100%", height: "100%", top: 0, left: 0 }}
          className="absolute object-cover w-full items-center justify-center flex flex-col gap-4 z-1"
        >
          <div className="text-white flex flex-row items-center gap-3 font-bold text-[14pt]">
            <span>Berlin Office</span>
          </div>
        </section>
      </section>

      <section
        className="w-full h-[40vh] overflow-hidden relative my-3"
        style={{ maxWidth: "600px" }}
      >
        <section className="w-full h-[50vh] overflow-hidden relative">
          <img
            src={"/images/office3.jpg"}
            style={{ width: "100%", height: "100%" }}
            className="object-cover w-full"
            alt="Image"
          />
          <div className={"absolute inset-0 bg-black opacity-30"}></div>{" "}
          {/* This div acts as the overlay */}
        </section>

        <section
          style={{ width: "100%", height: "100%", top: 0, left: 0 }}
          className="absolute object-cover w-full items-center justify-center flex flex-col gap-4 z-1"
        >
          <div className="text-white flex flex-row items-center gap-3 font-bold text-[14pt]">
            <span>Amsterdam Office</span>
          </div>
        </section>
      </section>
    </div>
  );
};

export default OfficesSection;
