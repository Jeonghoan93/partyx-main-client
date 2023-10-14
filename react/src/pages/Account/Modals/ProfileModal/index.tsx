import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import SimpleModal from "src/Components/modals/SimpleModal";
import useProfileModal from "src/hooks/useProfileModal";
import ProfileBody from "./ProfileBody";
import ProfileHeader from "./ProfileHeader";

const ProfileModal: React.FC = () => {
  const profileEditModal = useProfileModal();
  const [isLoading, setIsLoading] = useState(false);
  const [mode, setMode] = useState<"edit" | "view">("edit");

  const { handleSubmit } = useForm<FieldValues>({
    defaultValues: {},
  });

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
      body={<ProfileBody mode={mode} />}
      header={<ProfileHeader onToggleMode={setMode} mode={mode} />}
    />
  );
};

export default ProfileModal;
