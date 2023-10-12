import { useCallback, useEffect, useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";
import useOnClickOutside from "src/hooks/userOnClickOutside";

interface SimpleModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel?: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
}

const SimpleModal: React.FC<SimpleModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  disabled,
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

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  useOnClickOutside([modalRef], handleClose);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }

    handleClose();
    onSubmit();
  }, [onSubmit, disabled, handleClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div
        className="
          justify-center 
          items-center 
          flex 
          overflow-x-hidden 
          overflow-y-auto 
          fixed 
          inset-0 
          z-50 
          outline-none 
          focus:outline-none
          bg-neutral-800/70
        "
      >
        <div
          ref={modalRef}
          className="
          fixed 
          w-full
          max-w-screen-lg
          my-6
          mx-auto 
          lg:h-auto
          md:h-auto
          "
        >
          {/*content*/}
          <div
            className={`
            translate
            duration-300
            ${showModal ? "translate-y-0" : "translate-y-full"}
            ${showModal ? "opacity-100" : "opacity-0"}
          `}
          >
            <div
              className="
              translate
              h-full
              lg:h-auto
              md:h-auto
              max-h-[calc(100vh-0rem)]
              overflow-y-auto
              border-0 
              rounded-lg 
              shadow-lg 
              relative 
              flex 
              flex-col 
              w-full 
              bg-white 
              outline-none 
              focus:outline-none
            "
            >
              {/*header*/}
              <div
                className="
                flex 
                items-center 
                p-5
                rounded-t
                justify-center
                relative
                border-b-[1px]
                "
              >
                <button
                  className="
                    p-1
                    border-0 
                    hover:opacity-70
                    transition
                    absolute
                    left-9
                  "
                  onClick={onClose}
                >
                  <IoMdClose size={18} />
                </button>
                <span
                  onClick={handleSubmit}
                  className="cursor-pointer absolute right-4 p-1 text-blue-700 font-bold text-[10pt] border-0 hover:underline transition"
                >
                  Done
                </span>
                <div className="text-[12pt] font-bold">{title}</div>
              </div>
              {/*body*/}
              <div className="pt-5 no-scrollbar w-full h-full max-h-[calc(100vh-0rem)] overflow-y-auto">
                {body}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SimpleModal;
