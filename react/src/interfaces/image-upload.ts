export type CloudinaryUploadResult = {
  asset_id: string;
  public_id: string;
  access_mode: string;
  api_key: string;
  bytes: number;
  created_at: string;
  etag: string;
  folder: string;
  format: string;
  height: number;
  original_filename: string;
  placeholder: boolean;
  resource_type: string;
  secure_url: string;
  signature: string;
  tags: string[];
  type: string;
  url: string;
  version: number;
  version_id: string;
  width: number;
};

export type UploadResponse = {
  status: "success" | "error";
  result?: CloudinaryUploadResult;
  error?: any;
};
