const OfficesSection = () => {
  return (
    <div className="mx-auto py-5">
      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {/* First Office Image */}
        <div className="relative h-[40vh] overflow-hidden mb-3 md:mb-0">
          <img
            src={"/images/office1.jpg"}
            className="absolute inset-0 w-full h-full object-cover"
            alt="Stockholm Office"
          />
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="absolute inset-0 flex items-center justify-center z-0">
            <div className="text-white font-bold text-[14pt]">
              <span>Stockholm Office</span>
            </div>
          </div>
        </div>

        {/* Second Office Image */}
        <div className="relative h-[40vh] overflow-hidden mb-3 md:mb-0">
          <img
            src={"/images/office2.jpg"}
            className="absolute inset-0 w-full h-full object-cover"
            alt="Berlin Office"
          />
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="absolute inset-0 flex items-center justify-center z-0">
            <div className="text-white font-bold text-[14pt]">
              <span>Berlin Office</span>
            </div>
          </div>
        </div>

        {/* Third Office Image */}
        <div className="relative h-[40vh] overflow-hidden">
          <img
            src={"/images/office3.jpg"}
            className="absolute inset-0 w-full h-full object-cover"
            alt="Amsterdam Office"
          />
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="absolute inset-0 flex items-center justify-center z-0">
            <div className="text-white font-bold text-[14pt]">
              <span>Amsterdam Office</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficesSection;
