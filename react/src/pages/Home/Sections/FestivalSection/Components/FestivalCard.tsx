type FestivalCardProps = {
  title: string;
  img: string;
  price: number;
  currency: string;
  desc: string;
  userName: string;
  userPhoto: string;
  boxKey: string;
  containerStyle: React.CSSProperties;
};

const FestivalCard: React.FC<FestivalCardProps> = ({
  title,
  img,
  price,
  currency,
  desc,
  userName,
  userPhoto,
  containerStyle,
  boxKey,
}) => {
  return (
    <div key={boxKey} style={containerStyle}>
      <div
        className="relative rounded-lg overflow-hidden bg-transparent"
        style={{
          height: "400px",
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
        <div className="absolute w-full bottom-0 p-4" style={{ height: "37%" }}>
          <h3 className="text-white font-bold">{title}</h3>
          <p className=" text-gray-300 text-sm">
            {desc.length > 50 ? desc.substring(0, 50) + "..." : desc}
          </p>
          <div className="flex items-center mt-2">
            <img
              src={userPhoto}
              alt={userName}
              className=" w-8 h-8 rounded-full mr-2"
            />
            <span className=" text-white text-sm">{userName}</span>
          </div>
          <span className="text-white font-bold sm:mt-2 block">
            {currency} {price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FestivalCard;
