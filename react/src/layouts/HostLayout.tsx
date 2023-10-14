import { Outlet } from "react-router-dom";
import CreateProfileModal from "src/components/modals/CreateProfileModal";
import FinishRegister from "src/components/modals/FinishRegisterModal";
import LoginModal from "src/components/modals/LoginModal";
import RegisterModal from "src/components/modals/RegisterModal";
import RentModal from "src/components/modals/RentModal";
import SearchModal from "src/components/modals/SearchModal";
import SideBar from "src/components/siderbar/SideBar";
import FullPageModal from "src/pages/AnimationPage/FullPageModal";
import ToasterProvider from "src/providers/ToasterProvider";

export default function HostLayout() {
  return (
    <>
      <FullPageModal />
      <ToasterProvider />
      <LoginModal />
      <RegisterModal />

      <FinishRegister />
      <CreateProfileModal />

      <SearchModal />
      <RentModal />
      <SideBar />

      <div>
        <Outlet />
      </div>
    </>
  );
}
