import { UploadResponse } from "src/interfaces/image-upload";
import api from "../api";

export const uploadToCloudinary = async (
  file: File
): Promise<UploadResponse> => {
  const formData = new FormData();

  formData.append("file", file);

  const res = await api.post("/image-upload/cloudinary", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  const data: UploadResponse = await res.data;

  if (data.status !== "success" || res.status !== 201) {
    throw new Error(data.error || "Failed to upload image to cloudinary");
  }

  return data;
};
