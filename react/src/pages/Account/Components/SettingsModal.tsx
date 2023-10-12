import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import SimpleModal from "src/components/modals/SimpleModal";
import useSettingsModal from "src/hooks/useSettingsModal";
import BusinessPlan from "src/pages/BusinessPlan";

const SettingsModal: React.FC = () => {
  const settingsModal = useSettingsModal();
  const [isLoading, setIsLoading] = useState(false);

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

  const bodyContent = <BusinessPlan />;

  return (
    <SimpleModal
      disabled={isLoading}
      isOpen={settingsModal.isOpen}
      title={"Settings"}
      onClose={settingsModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
    />
  );
};

export default SettingsModal;
