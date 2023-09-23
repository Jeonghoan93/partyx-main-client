import { useEffect, useState } from "react";
import { User } from "src/interfaces/user";
import { getCurrentUser } from "src/services/auth";

export function useCurrentUser() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    async function fetchCurrentUser() {
      const user = await getCurrentUser();
      setCurrentUser(user);
    }
    fetchCurrentUser();
  }, []);

  return currentUser;
}