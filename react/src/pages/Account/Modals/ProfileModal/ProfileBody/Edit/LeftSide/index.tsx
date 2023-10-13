import AboutMe from "./Cards/AboutMe";
import PhoneEmail from "./Cards/PhoneEmail";
import PhotosVideos from "./Cards/PhotosVideos";

const EditLeftSide: React.FC = () => {
  return (
    <>
      <div className="flex flex-col gap-3 col-span-4 mb-3">
        <PhotosVideos />
        <AboutMe />
        <PhoneEmail />
      </div>
    </>
  );
};

export default EditLeftSide;
