import { Outlet } from "react-router-dom";
import CreateProfileModal from "src/Components/modals/CreateProfileModal";
import FinishRegister from "src/Components/modals/FinishRegisterModal";
import LoginModal from "src/Components/modals/LoginModal";
import RegisterModal from "src/Components/modals/RegisterModal";
import RentModal from "src/Components/modals/RentModal";
import SearchModal from "src/Components/modals/SearchModal";
import Navbar from "src/Components/navbar/Navbar";
import FullPageModal from "src/pages/AnimationPage/FullPageModal";
import ToasterProvider from "src/providers/ToasterProvider";

export default function PaymentLayout() {
  return (
    <>
      <FullPageModal />
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
    </>
  );
}
