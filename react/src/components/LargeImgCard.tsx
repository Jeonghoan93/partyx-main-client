interface LargeImgCardProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  dark?: boolean;
  img: string;
}

const LargeImgCard: React.FC<LargeImgCardProps> = ({
  children,
  img,
  style,
  dark = false,
}) => {
  return (
    <section
      style={style}
      className="w-full h-[40vh] overflow-hidden rounded-xl relative"
    >
      <section className="w-full h-[50vh] overflow-hidden rounded-xl relative">
        <img
          src={img}
          style={{ width: "100%", height: "100%" }}
          className="object-cover w-full"
          alt="Image"
        />
        <div
          className={`absolute inset-0 bg-black ${
            dark ? "opacity-70" : "opacity-10"
          }`}
        ></div>{" "}
        {/* This div acts as the overlay */}
      </section>

      <section
        style={{ width: "100%", height: "100%", top: 0, left: 0 }}
        className="absolute object-cover w-full items-center justify-center flex flex-col gap-4 z-10"
      >
        {children}
      </section>
    </section>
  );
};

export default LargeImgCard;
