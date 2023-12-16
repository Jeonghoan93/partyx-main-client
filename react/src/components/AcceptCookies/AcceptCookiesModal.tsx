import { useState } from "react";
import AcceptCookiesButton from "./AcceptCookiesButton";

const AcceptCookiesModal: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleAccept = () => {
    // Implement cookie acceptance logic here
    setIsVisible(false);
  };

  const handleReject = () => {
    // Implement cookie rejection logic here
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className="fixed bottom-1 left-1 right-1 bg-gray-200 border-[1px] border-gray-900 rounded-md py-4 px-2 shadow-md z-50"
      style={{ height: "30vh", zIndex: 1000 }}
    >
      <div className="flex flex-col gap-5 items-center">
        <span className="font-extrabold text-[15pt]"> We use cookies</span>

        <span className="leading-tight text-[10pt] font-semibold">
          By clicking “Accept all”, you agree to the storing of cookies on your
          device for functional, analytics, and advertising purposes.
        </span>

        <div className="w-full flex flex-col gap-2 items-center">
          <AcceptCookiesButton onClick={handleAccept} />

          <AcceptCookiesButton onClick={handleReject} isReject={true} />
        </div>

        <span className="font-bold text-[9pt] cursor-pointer hover:underline">
          See our privacy policy
        </span>
      </div>
    </div>
  );
};

export default AcceptCookiesModal;
