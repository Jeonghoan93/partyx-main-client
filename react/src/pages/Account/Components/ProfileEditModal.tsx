import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import SimpleModal from "src/components/modals/SimpleModal";
import useProfileEditModal from "src/hooks/useProfileEditModal";
import BusinessPlan from "src/pages/BusinessPlan";

const ProfileEditModal: React.FC = () => {
  const profileEditModal = useProfileEditModal();
  const [isLoading, setIsLoading] = useState(false);

  const { handleSubmit } = useForm<FieldValues>({
    defaultValues: {},
  });

  const bodyContent = <BusinessPlan />;

  const onSubmit = async () => {
    setIsLoading(true);

    try {
      return null;
    } catch (err) {
      toast.error("Unknown error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SimpleModal
      isOpen={profileEditModal.isOpen}
      title={"User name"}
      disabled={isLoading}
      onClose={profileEditModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
    />
  );
};

export default ProfileEditModal;
