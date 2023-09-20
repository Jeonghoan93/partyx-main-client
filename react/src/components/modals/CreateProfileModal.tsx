import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import useCreateProfileModal from "src/hooks/useCreateProfile";

import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { registerUser } from "src/services/auth";
import Button from "../Button";
import Modal from "./Modal";

const CreateProfileModal = () => {
  const navigate = useNavigate();
  const finishRegisterModal = useCreateProfileModal();

  const [isLoading, setIsLoading] = useState(false);

  const { handleSubmit } = useForm<FieldValues>({
    defaultValues: {},
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);

    try {
      await registerUser(data);

      toast.success("Registered");
      navigate("/");
      finishRegisterModal.onClose();
    } catch (err) {
      toast.error("Unknown error");
    } finally {
      setIsLoading(false);
    }
  };

  const bodyContent = (
    <div className="flex flex-col items-center">
      <span className="font-bold text-[16pt] mb-4">PARTYX</span>
      <span className="font-normal text-gray-800 text-[12pt]">
        Discover unique experiences around the world.
      </span>
    </div>
  );

  const footerContent = (
    <div>
      <Button label="Continue" onClick={onSubmit} black={true} outline={true} />
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={finishRegisterModal.isOpen}
      title="Create your profile"
      onClose={finishRegisterModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default CreateProfileModal;
