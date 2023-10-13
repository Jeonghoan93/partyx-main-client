import { BiChevronRight } from "react-icons/bi";
import { BsPatchCheck } from "react-icons/bs";
import LineContainer from "src/components/LineContainer";

const PhotosVideos = () => {
  return (
    <LineContainer>
      <div className="pb-5">
        <span className="text-[11pt] font-extrabold text-gray-400">
          My photos & videos
        </span>
      </div>

      <div className="flex flex-col gap-4 text-gray-900 text-[11pt] font-semibold">
        <div className="flex flex-row justify-between items-center text-center">
          <div className="flex flex-col items-start">
            <div className="flex flex-row gap-2 items-center hover:underline cursor-pointer">
              <span>Selfie Verification</span>
              <span className="bg-blue-200 border-blue-100 rounded-full">
                <BsPatchCheck size={14} />
              </span>
            </div>

            <span className="text-gray-400 text-[10pt]">You're verified.</span>
          </div>

          <span
            onClick={() => alert("Coming soon!")}
            className="cursor-pointer"
          >
            <BiChevronRight size={20} />
          </span>
        </div>
      </div>
    </LineContainer>
  );
};

export default PhotosVideos;
