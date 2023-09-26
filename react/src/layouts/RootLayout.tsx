import { Outlet } from "react-router-dom";
import Footer from "src/components/footer";
import CreateProfileModal from "src/components/modals/CreateProfileModal";
import FinishRegister from "src/components/modals/FinishRegisterModal";
import LoginModal from "src/components/modals/LoginModal";
import RegisterModal from "src/components/modals/RegisterModal";
import RentModal from "src/components/modals/RentModal";
import SearchModal from "src/components/modals/SearchModal";
import Navbar from "src/components/navbar/Navbar";
import ToasterProvider from "src/providers/ToasterProvider";

export default function RootLayout() {
  return (
    <>
      <ToasterProvider />
      <LoginModal />
      <FinishRegister />
      <CreateProfileModal />
      <RegisterModal />
      <SearchModal />
      <RentModal />
      <Navbar />

      <div className="pb-20 pt-28">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
