import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import useFinishRegister from "src/hooks/useFinishRegister";

import { Checkbox } from "@mui/material";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { registerUser } from "src/services/auth";
import Input from "../inputs/Input";
import Modal from "./Modal";

const FinishRegisterModal = () => {
  const navigate = useNavigate();
  const finishRegisterModal = useFinishRegister();

  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
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
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <div className="flex flex-row gap-2">
          <Input
            id="firstName"
            label="First Name"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
          <Input
            id="lastName"
            label="Last Name"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
        </div>
        <span className="text-[9pt] text-gray-500 font-normal">
          Make sure it matches the name on your government ID.
        </span>
      </div>

      <div className="mt-1 mb-2">
        <div className="mb-1">
          <h2 className="text-[11pt] font-semibold">Birthday</h2>
        </div>
        <div className="flex flex-row gap-1">
          <Input
            id="month"
            label="Month"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
          <Input
            id="day"
            label="Day"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
          <Input
            id="year"
            label="Year"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
        </div>
      </div>

      {/* Here should be the google email where user already logged in */}

      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-2 mt-3">
      <hr />
      <span className="text-[9pt] text-gray-800">
        By selecting{" "}
        <span className="text-black font-semibold">Agree and continue</span>, I
        agree to PartyX’s{" "}
        <span className="text-blue-900 font-semibold underline cursor-pointer">
          Terms of Service
        </span>
        ,{" "}
        <span className="text-blue-900 font-semibold underline cursor-pointer">
          Payments Terms of Service
        </span>
        , and{" "}
        <span className="text-blue-900 font-semibold underline cursor-pointer">
          Nondiscrimination Policy
        </span>{" "}
        and acknowledge the{" "}
        <span className="text-blue-900 font-semibold underline cursor-pointer">
          Privacy Policy
        </span>
        .
      </span>

      <div className="flex flex-start items-center">
        <Checkbox />
        <span className="text-[9pt] text-gray-800">
          I don't want to receive marketing messages from PartyX.
        </span>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={finishRegisterModal.isOpen}
      title="Finish signing up"
      actionLabel="Agree and Continue"
      onClose={finishRegisterModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default FinishRegisterModal;
