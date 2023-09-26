import { Outlet } from "react-router-dom";
import FullPageModal from "src/components/FullPageModal";
import CreateProfileModal from "src/components/modals/CreateProfileModal";
import FinishRegister from "src/components/modals/FinishRegisterModal";
import LoginModal from "src/components/modals/LoginModal";
import RegisterModal from "src/components/modals/RegisterModal";
import RentModal from "src/components/modals/RentModal";
import SideBar from "src/components/siderbar/SideBar";
import ToasterProvider from "src/providers/ToasterProvider";

export default function HostLayout() {
  return (
    <>
      <FullPageModal />
      <ToasterProvider />
      <LoginModal />
      <FinishRegister />
      <CreateProfileModal />
      <RegisterModal />

      <RentModal />
      <SideBar />

      <div>
        <Outlet />
      </div>
    </>
  );
}
