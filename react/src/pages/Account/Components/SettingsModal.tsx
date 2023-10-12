import { useCallback, useEffect, useState } from "react";
import BusinessPlan from "src/pages/BusinessPlan";

interface SettingsModalProps {
  isOpen?: boolean;
  onClose: () => void;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel?: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
}

const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen = false,
  onClose,
  disabled = false,
}) => {
  const [showSettingsModal, setShowSettingsModal] = useState(isOpen);

  useEffect(() => {
    setShowSettingsModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (!disabled) {
      setShowSettingsModal(false);
      setTimeout(onClose, 300);
    }
  }, [onClose, disabled]);

  if (!showSettingsModal) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden bg-neutral-800/70">
      <div
        className={
          "relative w-full max-w-screen-sm max-h-screen my-6 translate duration-400"
        }
      >
        {/* Modal Box */}
        <div className="relative overflow-hidden bg-gray-200 rounded-lg shadow-lg">
          {/* Header */}
          <div className="absolute top-0 z-10 flex justify-center items-center w-full p-3 bg-white rounded-t">
            <h2 className="text-[12pt] font-extrabold">Settings</h2>

            <span
              onClick={handleClose}
              className="cursor-pointer absolute right-4 p-1 text-blue-700 font-bold text-[10pt] border-0 hover:underline transition"
            >
              Done
            </span>
          </div>

          {/* Content */}
          <div className="relative flex flex-col w-full h-full lg:h-auto md:h-auto max-h-[calc(100vh-0rem)] pt-5 overflow-y-auto">
            <BusinessPlan />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
