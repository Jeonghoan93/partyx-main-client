import { FieldValues } from "react-hook-form";
import api from "../api";

export const registerUser = async (data: FieldValues) => {
  const email = data.email as string;
  const password = data.password as string;
  const name = data.name as string;

  if (!email || !password || !name) {
    throw new Error("Invalid data provided.");
  }
  try {
    const res = await api.post("/auth/register", {
      email,
      password,
      name,
    });
    return res.data;
  } catch (err) {
    throw new Error("An error occurred during registration.");
  }
};

export const getSession = async () => {
  try {
    const res = await api.post("/auth/session");
    return res.data;
  } catch (err) {
    throw new Error("An error occurred while retrieving the session.");
  }
};

export const getCurrentUser = async () => {
  try {
    const res = await api.post("/auth/current-user");
    return res.data;
  } catch (err) {
    throw new Error("An error occurred while fetching the current user.");
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
    const res = await api.post("/auth/login", { email, password });
    return res.data;
  } catch (err) {
    throw new Error("An error occurred during login.");
  }
};
