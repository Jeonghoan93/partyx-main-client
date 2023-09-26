import { TbPhotoPlus } from "react-icons/tb";
import { uploadToCloudinary } from "src/services/image-upload";

interface ImageUploadProps {
  onChange: (value: string) => void;
  value: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onChange, value }) => {
  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (file) {
      try {
        const result = await uploadToCloudinary(file);

        if (result.result) {
          onChange(result.result.secure_url);
        }

        if (result.status === "error") {
          console.error(result.error);
          return;
        }
      } catch (err) {
        console.error(err);
        throw new Error("Error uploading image");
      }
    }
  };

  return (
    <div
      className="
      relative
      cursor-pointer
      hover:opacity-70
      transition
      border-dashed 
      border-2 
      p-20 
      border-neutral-300
      flex
      flex-col
      justify-center
      items-center
      gap-4
      text-neutral-600
    "
    >
      <label>
        <TbPhotoPlus size={50} />
        <div className="font-semibold text-lg">Click to upload</div>
        <input
          type="file"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
      </label>
      {value && (
        <div className="absolute inset-0 w-full h-full">
          <img
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            src={value}
            alt="Uploaded"
          />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
