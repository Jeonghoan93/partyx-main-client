import { Outlet } from "react-router-dom";
import ClientOnly from "src/components/ClientOnly";
import FullPageModal from "src/components/FullPageModal";
import CreateProfileModal from "src/components/modals/CreateProfileModal";
import FinishRegister from "src/components/modals/FinishRegisterModal";
import LoginModal from "src/components/modals/LoginModal";
import RegisterModal from "src/components/modals/RegisterModal";
import RentModal from "src/components/modals/RentModal";
import SearchModal from "src/components/modals/SearchModal";
import SideBar from "src/components/siderbar/SideBar";
import ToasterProvider from "src/providers/ToasterProvider";

export default function HostLayout() {
  return (
    <>
      <ClientOnly>
        <FullPageModal />
        <ToasterProvider />
        <LoginModal />
        <FinishRegister />
        <CreateProfileModal />
        <RegisterModal />
        <SearchModal />
        <RentModal />
        <SideBar />
      </ClientOnly>
      <div>
        <Outlet />
      </div>
    </>
  );
}
