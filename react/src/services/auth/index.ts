import { FieldValues } from "react-hook-form";
import { User } from "src/interfaces/user";
import api from "src/services/api";

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
    throw new Error("An error occurred during registration.");
  }
};

export const getCurrentUser = async (): Promise<User> => {
  try {
    const res = await api.get("/auth/current-user", {
      withCredentials: true,
    });

    const currentUser = res.data.result.user;

    console.log("res data from current user: ", res.data);
    return currentUser;
  } catch (err) {
    console.error("Error fetching user:", err);
    throw new Error("An error occurred while retrieving the user.");
  }
};

export const loginWithGoogle = async (googleToken: string) => {
  try {
    const res = await api.post("/auth/login-google", { googleToken });
    return res.data;
  } catch (err) {
    throw new Error("An error occurred during Google login.");
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
    throw new Error("An error occurred during login.");
  }
};

export const logout = async () => {
  try {
    await api.post("/auth/logout");
  } catch (err) {
    throw new Error("An error occurred during logout.");
  }
};
