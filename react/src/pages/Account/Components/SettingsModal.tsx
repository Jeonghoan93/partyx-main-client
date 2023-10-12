import { useCallback, useEffect, useState } from "react";
import Container from "src/components/Container";

interface SettingsModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit?: () => void;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel?: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
}

const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  disabled,
}) => {
  const [showSettingsModal, setShowSettingsModal] = useState(isOpen);

  useEffect(() => {
    setShowSettingsModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }

    setShowSettingsModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose, disabled]);

  //   const handleSubmit = useCallback(() => {
  //     if (disabled) {
  //       return;
  //     }

  //     onSubmit();
  //   }, [onSubmit, disabled]);

  //   const handleSecondaryAction = useCallback(() => {
  //     if (disabled || !secondaryAction) {
  //       return;
  //     }

  //     secondaryAction();
  //   }, [secondaryAction, disabled]);

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
          className="
          relative 
          w-full
          md:w-[375pt]
          lg:w-[386pt]
          xl:w-[400pt]
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
            ${showSettingsModal ? "translate-y-0" : "translate-y-full"}
            ${showSettingsModal ? "opacity-100" : "opacity-0"}
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
                p-3
                rounded-t
                justify-center
                relative
                "
              >
                <div className="flex justify-center">
                  <div className="text-[12pt] font-extrabold">Settings</div>
                  <button
                    className="
                    p-1
                    border-0 
                    hover:opacity-70
                    transition
                    absolute
                    right-4
                  "
                    onClick={handleClose}
                  >
                    <span className="text-blue-700 font-bold text-[10pt]">
                      Done
                    </span>
                  </button>
                </div>
              </div>

              {/*body*/}
              <div className="h-screen relative bg-gray-100">
                <Container>First item</Container>
                <Container>First item</Container>
                <Container>First item</Container>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsModal;
