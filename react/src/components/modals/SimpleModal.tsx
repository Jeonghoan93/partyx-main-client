import { useCallback, useEffect, useRef, useState } from "react";
import useOnClickOutside from "src/hooks/userOnClickOutside";

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

  const modalRef = useRef<HTMLDivElement>(null);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }

    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose, disabled]);

  useOnClickOutside([modalRef], handleClose);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }
    handleClose();
    onSubmit();
  }, [disabled, handleClose, onSubmit]);

  const animationClass = showModal
    ? "translate-y-0"
    : "translate-y-1/2 opacity-0";

  if (!showModal) {
    return null;
  }

  return (
    <div
      className={
        "fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden bg-neutral-800/70"
      }
    >
      <div
        className={"relative w-full max-w-screen-lg max-h-screen my-6 sm:py-3"}
      >
        {/* Modal Box */}
        <div
          className={`relative overflow-hidden bg-gray-200 sm:rounded-lg shadow-lg ${animationClass} transform transition-transform duration-300 ease-in-out`}
          ref={modalRef}
        >
          {/* Header */}
          <div className="absolute top-0 z-10 flex justify-center items-center w-full p-3 bg-white sm:rounded-t">
            <h2 className="text-[12pt] font-extrabold">{title}</h2>

            <span
              onClick={handleSubmit}
              className="cursor-pointer absolute right-4 p-1 text-blue-700 font-bold text-[10pt] border-0 hover:underline transition"
            >
              Done
            </span>
          </div>

          {/* Content */}
          <div
            style={{ paddingTop: "60px" }}
            className="no-scrollbar w-full h-full max-h-[calc(100vh-0rem)] overflow-y-auto"
          >
            {body}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleModal;
