import { FieldValues } from "react-hook-form";
import { User } from "src/interfaces/user";
import api from "src/services/api";

const handleAxiosError = (err: any) => {
  if (!err.response) {
    throw new Error("Network error. Please check your connection.");
  } else {
    throw new Error(
      err.response?.data?.message || "An unexpected error occurred."
    );
  }
};

export const registerUser = async (data: FieldValues) => {
  const email = data.email as string;
  const password = data.password as string;
  const name = data.name as string;
  const type = data.type ? (data.type as string) : "Customer";

  if (!email || !password || !name) {
    throw new Error("Invalid data provided.");
  }
  try {
    const res = await api.post("/auth/register", {
      email,
      password,
      name,
      type,
    });
    return res.data;
  } catch (err) {
    handleAxiosError(err);
  }
};

export const getCurrentUser = async (): Promise<User | undefined> => {
  try {
    const res = await api.get("/auth/current-user", {
      withCredentials: true,
    });

    const currentUser = res.data.result.user;

    return currentUser;
  } catch (err) {
    console.error("Error fetching user:", err);
    handleAxiosError(err);
  }
};

export const loginWithGoogle = async (googleToken: string) => {
  try {
    const res = await api.post("/auth/login-google", { googleToken });
    return res.data;
  } catch (err) {
    handleAxiosError(err);
  }
};

export const login = async (credentials: FieldValues) => {
  const email = credentials.email as string;
  const password = credentials.password as string;

  if (!email || !password) {
    throw new Error("Invalid credentials provided.");
  }
  try {
    const res = await api.post("/auth/login", {
      email,
      password,
    });

    console.log("res data from login: ", res.data);

    return res.data;
  } catch (err) {
    handleAxiosError(err);
  }
};

export const logout = async () => {
  try {
    await api.post("/auth/logout");
  } catch (err) {
    handleAxiosError(err);
  }
};
