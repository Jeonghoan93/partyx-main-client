import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import SimpleModal from "src/Components/modals/SimpleModal";
import useUpcomingPastModal from "src/hooks/useUpcomingPastModal";
import Body from "./Body";
import Header from "./Header";

const UpcomingPastModal: React.FC = () => {
  const upcomingPastModal = useUpcomingPastModal();
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
      isOpen={upcomingPastModal.isOpen}
      title={"Your events"}
      disabled={isLoading}
      onClose={upcomingPastModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={<Body mode={upcomingPastModal.mode} />}
      header={
        <Header
          onToggleMode={(newMode) => upcomingPastModal.onOpen(newMode)}
          mode={upcomingPastModal.mode}
        />
      }
    />
  );
};

export default UpcomingPastModal;
