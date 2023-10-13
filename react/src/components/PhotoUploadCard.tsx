import React from "react";
import { BiUpload } from "react-icons/bi";

const PhotoCard = () => {
  const [imageSrc, setImageSrc] = React.useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImageSrc(reader.result as string);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="relative h-[20vh] w-full border-[1px] border-neutral-200 rounded-lg shadow-sm">
      <img
        src={imageSrc || "/images/placeholder.jpg"}
        alt="User upload"
        className={`w-full h-full rounded-lg ${!imageSrc && "hidden"}`}
      />
      <input
        type="file"
        accept="image/*"
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        onChange={handleImageChange}
      />
      {!imageSrc && (
        <div className="absolute inset-0 flex items-center font-semibold justify-center text-gray-400">
          <span className="cursor-pointer p-1">
            <BiUpload size={25} />
          </span>
        </div>
      )}
    </div>
  );
};

export default PhotoCard;
