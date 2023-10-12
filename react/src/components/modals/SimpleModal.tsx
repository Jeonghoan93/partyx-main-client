import { useCallback, useEffect, useState } from "react";

interface SimpleModalProps {
  title?: string;
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel?: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
}

const SimpleModal: React.FC<SimpleModalProps> = ({
  title,
  isOpen = false,
  onClose,
  body,
  onSubmit,
  disabled = false,
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }

    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose, disabled]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }
    handleClose();
    onSubmit();
  }, [disabled, handleClose, onSubmit]);

  if (!showModal) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden bg-neutral-800/70 ${
        showModal ? "opacity-100" : "opacity-0"
      } transition-opacity duration-300`}
      style={showModal ? {} : { pointerEvents: "none" }}
    >
      <div
        className={`relative w-full max-w-screen-sm max-h-screen my-6 translate duration-400 ${
          showModal ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {/* Modal Box */}
        <div className="relative overflow-hidden bg-gray-200 rounded-lg shadow-lg">
          {/* Header */}
          <div className="absolute top-0 z-10 flex justify-center items-center w-full p-3 bg-white rounded-t">
            <h2 className="text-[12pt] font-extrabold">{title}</h2>

            <span
              onClick={handleSubmit}
              className="cursor-pointer absolute right-4 p-1 text-blue-700 font-bold text-[10pt] border-0 hover:underline transition"
            >
              Done
            </span>
          </div>

          {/* Content */}
          <div className="relative flex flex-col w-full h-full lg:h-auto md:h-auto max-h-[calc(100vh-0rem)] pt-5 overflow-y-auto">
            {body}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleModal;
