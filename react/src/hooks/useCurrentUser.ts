import { useEffect, useState } from "react";
import { User } from "src/interfaces/user";
import { getCurrentUser } from "src/services/auth";

export function useCurrentUser() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  function hasCookie(name: string): boolean {
    return document.cookie
      .split(";")
      .some((item) => item.trim().startsWith(name + "="));
  }

  async function fetchAndSetCurrentUser() {
    if (!hasCookie("Authentication")) return;

    try {
      const user = await getCurrentUser();
      setCurrentUser(user ?? null);
    } catch (err) {
      console.error("Error fetching user:", err);
    }
  }

  useEffect(() => {
    fetchAndSetCurrentUser();
  }, []);

  return currentUser;
}
