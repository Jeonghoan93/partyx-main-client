import { useState } from "react";

const images = [
  { url: "images/office1.jpg", text: "Stockholm" },
  { url: "images/office2.jpg", text: "Berlin" },
  { url: "images/office3.jpg", text: "Amsterdam" },
];

const HeaderInvestor = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div className="relative h-[40vh] overflow-hidden">
      <img
        src={images[currentImageIndex].url}
        alt="Header"
        className="w-full h-full object-cover absolute top-0 left-0"
      />
      <div className="absolute bottom-[40pt] left-[10pt] text-white font-bold">
        {images[currentImageIndex].text}
      </div>

      <div className="absolute bottom-[10pt] left-[10pt] flex space-x-[10pt]">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2.5 h-2.5 rounded-full cursor-pointer ${
              index === currentImageIndex
                ? "bg-white"
                : "bg-transparent border-2 border-white"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HeaderInvestor;
