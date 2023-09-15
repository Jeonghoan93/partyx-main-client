type FestivalCardProps = {
  title: string;
  img: string;
  price: number;
  currency: string;
  desc: string;
  date: string;
  time: string;
  userName?: string;
  userPhoto?: string;
  boxKey: string;
  containerStyle: React.CSSProperties;
};

const FestivalCard: React.FC<FestivalCardProps> = ({
  title,
  img,
  price,
  currency,
  desc,
  time,
  date,
  containerStyle,
  boxKey,
}) => {
  return (
    <div key={boxKey} style={containerStyle}>
      <div
        className="relative rounded-lg overflow-hidden bg-transparent"
        style={{
          height: "375px",
        }}
      >
        {/* Background Image */}
        <div
          className="absolute w-full h-full"
          style={{
            backgroundImage: `url(${img})`, // Use img from props
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        {/* Gradient */}
        <div
          className="absolute w-full bottom-0 h-1/3 bg-gradient-to-t from-black opacity-70"
          style={{ height: "40%" }}
        ></div>
        {/* Content */}
        <div className="absolute w-full bottom-0 p-4" style={{ height: "40%" }}>
          <h3 className="text-white font-bold">{title}</h3>
          <p className=" text-gray-300 text-sm">
            {desc.length > 45 ? desc.substring(0, 45) + "..." : desc}
          </p>
          <div className="flex text-red-50 font-serif text-[10pt] items-center mt-2">
            {time}, {date}
          </div>
          <span className="text-white font-bold mt-2 block">
            {currency} {price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FestivalCard;
