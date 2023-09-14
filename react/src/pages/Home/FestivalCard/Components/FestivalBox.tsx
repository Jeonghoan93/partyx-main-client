type FestivalBoxProps = {
  title: string;
  img: string;
  price: number;
  desc: string;
  userName: string;
  userPhoto: string;
};

const FestivalBox: React.FC<FestivalBoxProps> = ({
  title,
  img,
  price,
  desc,
  userName,
  userPhoto,
}) => {
  return (
    <div
      className="relative rounded-lg overflow-hidden shadow-2xl"
      style={{
        height: "50vw",
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
        style={{ height: "30%" }}
      ></div>
      {/* Content */}
      <div className="absolute w-full bottom-0 p-4" style={{ height: "30%" }}>
        <h3 className="text-white font-bold">{title}</h3>
        <p className=" text-gray-300 text-sm">{desc}</p>
        <div className="flex items-center mt-2">
          <img
            src={userPhoto}
            alt={userName}
            className="hidden sm:block w-8 h-8 rounded-full mr-2"
          />
          <span className="hidden sm:block text-white text-sm">{userName}</span>
        </div>
        <span className="text-white sm:mt-2 block">${price}</span>
      </div>
    </div>
  );
};

export default FestivalBox;
