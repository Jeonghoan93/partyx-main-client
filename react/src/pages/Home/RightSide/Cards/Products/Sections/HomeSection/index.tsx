import { useEffect, useRef } from "react";

const HomeSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      videoElement.currentTime = 0;

      const playFor10Seconds = () => {
        if (videoElement.currentTime > 10) {
          videoElement.pause();
          hideContainerSmoothly();
          videoElement.removeEventListener("timeupdate", playFor10Seconds);
        }
      };

      videoElement.addEventListener("timeupdate", playFor10Seconds);
    }
  }, []);

  const hideContainerSmoothly = () => {
    const containerElement = containerRef.current;
    if (containerElement) {
      containerElement.style.opacity = "0";
      setTimeout(() => {
        containerElement.style.display = "none";
      }, 1000); // assuming 1s transition
    }
  };

  return (
    <>
      <div
        ref={containerRef}
        className="mb-5 relative rounded-lg overflow-hidden shadow-2xl transition-opacity duration-1000"
        style={{ height: "500px", opacity: 1 }}
      >
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="https://s3.eu-north-1.amazonaws.com/partyx.se/video2.mp4"
          autoPlay
          muted
        ></video>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h2 className="text-white text-2xl mb-2">GET INVITED</h2>
          <p className="text-white">
            PartyX hosts any type of Party Events including House Party, Rave,
            Festivals Nearby.
          </p>
        </div>
      </div>
    </>
  );
};

export default HomeSection;
