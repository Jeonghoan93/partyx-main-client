import EmptyState from "src/components/EmptyState";

import { useEffect, useState } from "react";
import ClientOnly from "src/components/ClientOnly";
import Container from "src/components/Container";
import { getCurrentUser } from "src/services/auth";
import AboutSection from "./Components/AboutSection";
import InvestorSection from "./Components/InvestorSection";
import OfferSection from "./Components/OfferSection";

const EnterprisePage: React.FC = () => {
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
    <Container>
      <div className="mt-10">
        <AboutSection name={"About us"} />
        <OfferSection name={"Our offers"} />
        <InvestorSection name={"Investor relations"} />
      </div>
    </Container>
  );
};

export default EnterprisePage;
