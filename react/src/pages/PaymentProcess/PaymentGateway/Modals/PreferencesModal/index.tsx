import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import SimpleModal from "src/components/modals/SimpleModal";
import usePreferencesModal from "src/hooks/usePreferencesModal";
import PreferencesBody from "./PreferencesBody";

const PreferencesModal: React.FC = () => {
  const settingsModal = usePreferencesModal();
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

  return (
    <SimpleModal
      disabled={isLoading}
      isOpen={settingsModal.isOpen}
      title={"Preferences"}
      onClose={settingsModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={<PreferencesBody />}
    />
  );
};

export default PreferencesModal;
