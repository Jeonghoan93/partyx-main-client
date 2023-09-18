import React, { useEffect, useState } from "react";
import ClientOnly from "src/components/ClientOnly";
import FullPageModal from "src/components/FullPageModal";
import Footer from "src/components/footer";
import LoginModal from "src/components/modals/LoginModal";
import RegisterModal from "src/components/modals/RegisterModal";
import RentModal from "src/components/modals/RentModal";
import SearchModal from "src/components/modals/SearchModal";
import Navbar from "src/components/navbar/Navbar";
import ToasterProvider from "src/providers/ToasterProvider";
import { getCurrentUser } from "src/services/auth";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    async function fetchCurrentUser() {
      const user = await getCurrentUser();

      console.log("root layout current user: ", user);
      setCurrentUser(user);
    }
    fetchCurrentUser();
  }, []);

  return (
    <>
      <ClientOnly>
        <FullPageModal />
        <ToasterProvider />
        <LoginModal />
        <RegisterModal />
        <SearchModal />
        <RentModal />
        <Navbar currentUser={currentUser} />
      </ClientOnly>
      <div className="pb-20 pt-28">{children}</div>
      <Footer />
    </>
  );
}
