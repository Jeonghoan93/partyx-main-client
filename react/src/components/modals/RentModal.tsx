import dayjs from "dayjs";
import { Suspense, lazy, useMemo, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Heading from "src/components/Heading";
import CategoryInput from "src/components/inputs/CategoryInput";
import Counter from "src/components/inputs/Counter";
import DateTimePicker from "src/components/inputs/DateTimePicker";
import ImageUpload from "src/components/inputs/ImageUpload";
import Input from "src/components/inputs/Input";
import useRentModal from "src/hooks/useRentModal";
import { createEvent } from "src/services/event";
import { CreateEventDTO } from "src/services/event/dto";
import { categories } from "src/utils/constants";
import Modal from "./Modal";

enum STEPS {
  CATEGORY = 0,
  LOCATION = 1,
  EVENT_DATE = 2,
  INFO = 3,
  IMAGES = 4,
  DESCRIPTION = 5,
  PRICE = 6,
}

type CustomValue = string | { lat: number; lng: number } | number;

const RentModal = () => {
  const navigate = useNavigate();
  const rentModal = useRentModal();

  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(STEPS.CATEGORY);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      category: "",
      location: null,
      maxGuests: 10,
      minGuests: 5,
      imageSrc: "",
      price: 1,
      title: "",
      description: "",
      eventDate: dayjs().format("YYYY-MM-DD"),
      eventTime: {
        hour: dayjs().hour(),
        minute: dayjs().minute(),
      },
    },
  });

  const location = watch("location");
  const category = watch("category");
  const maxGuests = watch("maxGuests");
  const minGuests = watch("minGuests");
  const imageSrc = watch("imageSrc");

  const Map = lazy(() => import("src/components/Map"));

  const setCustomValue = (id: string, value: CustomValue) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  const onBack = () => {
    setStep((value) => value - 1);
  };

  const onNext = () => {
    setStep((value) => value + 1);
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    if (step !== STEPS.PRICE) {
      return onNext();
    }

    setIsLoading(true);

    try {
      const res = await createEvent(data as CreateEventDTO);

      if (res?.status === "success") {
        toast.success("Event created!");
        navigate("/");
        reset();
        setStep(STEPS.CATEGORY);
        rentModal.onClose();
      }
    } catch (err) {
      toast.error("Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  const actionLabel = useMemo(() => {
    if (step === STEPS.PRICE) {
      return "Create";
    }

    return "Next";
  }, [step]);

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.CATEGORY) {
      return undefined;
    }

    return "Back";
  }, [step]);

  let bodyContent = (
    <div className="flex flex-col gap-8">
      <Heading
        title="Which of these best describes your event?"
        subtitle="Pick a category"
      />
      <div
        className="
          grid 
          grid-cols-1 
          md:grid-cols-2 
          gap-3
          max-h-[50vh]
          overflow-y-auto
        "
      >
        {categories.map((item) => (
          <div key={item.label} className="col-span-1">
            <CategoryInput
              onClick={(category) => setCustomValue("category", category)}
              selected={category === item.label}
              label={item.label}
              icon={item.icon}
            />
          </div>
        ))}
      </div>
    </div>
  );

  if (step === STEPS.LOCATION) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Where is your place located?"
          subtitle="Help guests find you!"
        />
        City or Country Select should be implemented here
        <Suspense fallback={<div>Loading...</div>}>
          <Map center={location?.coordinates} />
        </Suspense>
      </div>
    );
  }

  if (step === STEPS.EVENT_DATE) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="When is your event?"
          subtitle="Select the date and time!"
        />
        <DateTimePicker
          onChange={(date) => {
            if (date) {
              setValue("eventDate", date.format("YYYY-MM-DD"));
              setValue("eventTime", {
                hour: date.hour(),
                minute: date.minute(),
              });
            }
          }}
        />
      </div>
    );
  }

  if (step === STEPS.INFO) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Share some basics about your place"
          subtitle="What amenitis do you have?"
        />
        <Counter
          onChange={(value) => setCustomValue("minGuests", value)}
          value={minGuests}
          title="Minimum guests"
          subtitle="How many guests do you allow?"
        />
        <hr />
        <Counter
          onChange={(value) => setCustomValue("maxGuests", value)}
          value={maxGuests}
          title="Maximum guests"
          subtitle="How many guests do you allow?"
        />
      </div>
    );
  }

  if (step === STEPS.IMAGES) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Add a photo of your place"
          subtitle="Show guests what your place looks like!"
        />
        <ImageUpload
          onChange={(value) => setCustomValue("imageSrc", value)}
          value={imageSrc}
        />
      </div>
    );
  }

  if (step === STEPS.DESCRIPTION) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="How would you describe your event?"
          subtitle="Short and sweet works best!"
        />
        <Input
          id="title"
          label="Name of your event"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <hr />
        <Input
          id="description"
          label="Description"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
      </div>
    );
  }

  if (step === STEPS.PRICE) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Now, set your price"
          subtitle="How much do you charge per person?"
        />
        <Input
          id="price"
          label="Price"
          formatPrice
          type="number"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
      </div>
    );
  }

  return (
    <Modal
      disabled={isLoading}
      isOpen={rentModal.isOpen}
      title="List your party!"
      actionLabel={actionLabel}
      onSubmit={handleSubmit(onSubmit)}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
      onClose={rentModal.onClose}
      body={bodyContent}
    />
  );
};

export default RentModal;
