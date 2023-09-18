import React, { useEffect, useRef, useState } from "react";

const FullPageModal: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      videoElement.currentTime = 0;

      const stopAt7Seconds = () => {
        if (videoElement.currentTime >= 7) {
          videoElement.pause();
          hideModalSmoothly();
          videoElement.removeEventListener("timeupdate", stopAt7Seconds);
        }
      };

      videoElement.addEventListener("timeupdate", stopAt7Seconds);
    }
  }, []);

  const hideModalSmoothly = () => {
    const modalElement = modalRef.current;
    if (modalElement) {
      modalElement.style.opacity = "0";
      setTimeout(() => {
        setIsVisible(false);
      }, 1000); // 1s transition
    }
  };

  const handleCloseModal = () => {
    const videoElement = videoRef.current;

    if (videoElement) {
      videoElement.pause();
    }

    hideModalSmoothly();
  };

  if (!isVisible) return null;

  return (
    <div
      ref={modalRef}
      className="fixed top-0 left-0 w-full h-full z-50 transition-opacity duration-1000"
      style={{ opacity: 1 }}
    >
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://s3.eu-north-1.amazonaws.com/partyx.se/video2.mp4"
        autoPlay
        muted
      ></video>
      {/* Darkening overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
        <h2 className="text-white font-bold text-2xl mb-2 font-mono">
          GET INVITED
        </h2>
        <p className="text-gray-100 mb-6">
          PartyX hosts any type of Party Events Nearby.
        </p>
        <button
          onClick={handleCloseModal}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 shadow-lg hover:shadow-xl"
        >
          Go to Website
        </button>
      </div>
    </div>
  );
};

export default FullPageModal;
