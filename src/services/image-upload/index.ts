import api from "../api";

export type UploadResponse = {
  secure_url: string;
  [key: string]: string;
};

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

  if (res.status !== 200) {
    throw new Error("Failed to upload image to cloudinary");
  }

  const data: UploadResponse = await res.data;

  return data;
};
