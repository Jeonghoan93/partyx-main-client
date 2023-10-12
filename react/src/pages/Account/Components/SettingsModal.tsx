import SimpleModal from "src/components/modals/SimpleModal";
import useSettingsModal from "src/hooks/useSettingsModal";
import BusinessPlan from "src/pages/BusinessPlan";

interface SettingsModalProps {
  isOpen?: boolean;
  onClose: () => void;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel?: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
}

const SettingsModal: React.FC<SettingsModalProps> = () => {
  const settingsModal = useSettingsModal();

  const bodyContent = <BusinessPlan />;

  return (
    <SimpleModal
      isOpen={settingsModal.isOpen}
      title={"Settings"}
      onClose={settingsModal.onClose}
      onSubmit={() => alert("Updated")}
      body={bodyContent}
    />
  );
};

export default SettingsModal;
