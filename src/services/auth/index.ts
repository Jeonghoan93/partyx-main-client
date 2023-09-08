import { FieldValues } from "react-hook-form";
import api from "src/services/api";

export const registerUser = async (data: FieldValues) => {
  const email = data.email as string;
  const password = data.password as string;
  const name = data.name as string;
  const type = data.type ? (data.type as string) : userTypes.CUSTOMER;

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

export const getCurrentUser = async () => {
  try {
    const res = await api.post("/auth/current-user");

    console.log("res data from current user: ", res.data);
    return res.data;
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
    const res = await api.post("/auth/login", { email, password });

    const token = res.data.token || localStorage.getItem("token");

    if (token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      localStorage.setItem("token", token);
    }

    return res.data;
  } catch (err) {
    throw new Error("An error occurred during login.");
  }
};

export const logout = async () => {
  try {
    await api.post("/auth/logout");

    localStorage.removeItem("token");
    delete api.defaults.headers.common["Authorization"];
  } catch (err) {
    throw new Error("An error occurred during logout.");
  }
};
