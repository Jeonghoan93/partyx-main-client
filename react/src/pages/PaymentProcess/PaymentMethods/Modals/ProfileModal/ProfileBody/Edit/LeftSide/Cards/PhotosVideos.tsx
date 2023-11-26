import LineContainer from "src/components/LineContainer";
import PhotoUploadCard from "src/components/PhotoUploadCard";

const PhotosVideos = () => {
  return (
    <LineContainer>
      <div className="pb-3">
        <span className="text-[11pt] font-extrabold text-gray-400">
          My photos & videos
        </span>
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex flex-row gap-1">
          <PhotoUploadCard />
          <PhotoUploadCard />
        </div>

        <div className="flex flex-row gap-1">
          <PhotoUploadCard />
          <PhotoUploadCard />
        </div>

        <div className="p-1">
          <span className="text-[9pt] font-semibold text-gray-400">
            Tap to edit; drag to recorder
          </span>
        </div>
      </div>
    </LineContainer>
  );
};

export default PhotosVideos;
