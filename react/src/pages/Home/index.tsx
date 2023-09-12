import Container from "src/components/Container";
import EmptyState from "src/components/EmptyState";

import { useEffect, useState } from "react";
import ClientOnly from "src/components/ClientOnly";
import { getCurrentUser } from "src/services/auth";

const Home: React.FC = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    async function fetchCurrentUser() {
      const user = await getCurrentUser();
      setCurrentUser(user);
    }

    fetchCurrentUser();
  }, []);

  if (currentUser) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    );
  }
  return (
    <ClientOnly>
      <Container>
        <div
          className="relative rounded-lg overflow-hidden shadow-2xl"
          style={{
            height: "40vw",
          }}
        >
          <div
            className="absolute w-full h-full"
            style={{
              backgroundImage:
                "url(https://cdn.pixabay.com/photo/2018/01/15/21/50/concert-3084876_1280.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>

          <div className="hidden md:block z-10 h-full w-full bg-white bg-opacity-90 rounded-lg shadow-xl">
            hi
          </div>
        </div>
      </Container>
    </ClientOnly>
  );
};

export default Home;
