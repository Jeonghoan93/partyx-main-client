import React, { useEffect, useRef } from "react";
import { useModalContext } from "src/hooks/useModalContext";
import "./AnimationPage.css";

const FullPageModal: React.FC = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  const { isVisible, closeModal } = useModalContext();

  useEffect(() => {
    const timer = setTimeout(() => {
      hideModalSmoothly();
    }, 136000);

    return () => clearTimeout(timer);
  }, []);

  const hideModalSmoothly = () => {
    const modalElement = modalRef.current;

    if (modalElement) {
      modalElement.style.opacity = "0";
      setTimeout(() => {
        closeModal(); // This uses the closeModal from the context
      }, 1000); // 1s transition
    }
  };

  hideModalSmoothly();

  if (!isVisible) return null;

  return (
    <div
      ref={modalRef}
      className="fixed top-0 left-0 w-full h-full z-50 transition-opacity duration-1000"
      style={{ opacity: 1 }}
    >
      <div
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "rgba(0.1, 0, 0.2, 0.92)",
          backgroundBlendMode: "multiply",
        }}
        className="absolute top-0 left-0 w-full h-full z-10"
      ></div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
        <div className="text-gray-100 mb-6 flex flex-col items-center gap-3">
          <div className="logo text-[10pt]">
            <span className="party">P</span>
            <span className="party">A</span>
            <span className="party">R</span>
            <span className="party">T</span>
            <span className="party">Y</span>
            <span className="x">X</span>
          </div>

          <h2 className="text-white font-bold text-2xl mb-2 font-mono">
            GET INVITED
          </h2>

          <div>
            <span>hosts any type of Party Events Nearby.</span>
          </div>
        </div>
        <button
          onClick={() => hideModalSmoothly()}
          className="bg-black border-white border-2 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-xl transition duration-300 shadow-lg hover:shadow-xl"
        >
          Go to Website
        </button>
      </div>
    </div>
  );
};

export default FullPageModal;
