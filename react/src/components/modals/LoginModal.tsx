import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

import useLoginModal from "src/hooks/useLoginModal";
import useRegisterModal from "src/hooks/useRegisterModal";

import { login, loginWithGoogle } from "src/services/auth";
import Button from "../Button";
import Heading from "../Heading";
import Input from "../inputs/Input";
import Modal from "./Modal";

const LoginModal = () => {
  const navigate = useNavigate();

  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (credentials) => {
    setIsLoading(true);

    try {
      const res = await login(credentials);

      if (res?.status == "success") {
        toast.success("Logged in");
        loginModal.onClose();
        navigate("/");
      } else {
        toast.error(res?.message || "Unknown error");
      }
    } catch (err) {
      toast.error("Unknown error");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      //TODO: implement google auth
      const googleToken = ""; // Get this from your Google auth flow

      const res = await loginWithGoogle(googleToken);

      if (res?.status == "success") {
        toast.success("Logged in");
        navigate("/");
        loginModal.onClose();
      } else {
        toast.error(res?.message || "Unknown error");
      }
    } catch (err) {
      toast.error("Unknown error");
    }
  };

  const onToggle = useCallback(() => {
    loginModal.onClose();
    registerModal.onOpen();
  }, [loginModal, registerModal]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome back" />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="Password"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button
        outline
        label="Continue with Google"
        icon={FcGoogle}
        onClick={handleGoogleSignIn}
      />
      <div
        className="
      text-neutral-500 text-center mt-4 font-light"
      >
        <p>
          New here?
          <span
            onClick={onToggle}
            className="
              ml-3
              text-neutral-800
              cursor-pointer 
              hover:underline
            "
          >
            {" "}
            Create an account
          </span>
        </p>
      </div>
      <div
        className="
      text-neutral-500 text-center font-light"
      >
        <p>
          Trying the app?
          <span
            onClick={() => {}}
            className="
              ml-3
              text-neutral-800
              cursor-pointer 
              hover:underline
            "
          >
            {" "}
            Login as MockedUser
          </span>
        </p>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title="Login"
      actionLabel="Continue"
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default LoginModal;
