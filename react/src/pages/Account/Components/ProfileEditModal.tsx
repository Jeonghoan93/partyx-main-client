import SimpleModal from "src/components/modals/SimpleModal";
import useProfileEditModal from "src/hooks/useProfileEditModal";
import BusinessPlan from "src/pages/BusinessPlan";

interface ProfileEditModalProps {
  isOpen?: boolean;
  onClose: () => void;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel?: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
}

const ProfileEditModal: React.FC<ProfileEditModalProps> = () => {
  const profileEditModal = useProfileEditModal();

  const bodyContent = <BusinessPlan />;

  return (
    <SimpleModal
      isOpen={profileEditModal.isOpen}
      title={"User name"}
      onClose={profileEditModal.onClose}
      onSubmit={() => {}}
      body={bodyContent}
    />
  );
};

export default ProfileEditModal;
