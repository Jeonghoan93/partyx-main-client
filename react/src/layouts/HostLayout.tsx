import { Outlet } from "react-router-dom";
import CreateProfileModal from "src/Components/modals/CreateProfileModal";
import FinishRegister from "src/Components/modals/FinishRegisterModal";
import LoginModal from "src/Components/modals/LoginModal";
import RegisterModal from "src/Components/modals/RegisterModal";
import RentModal from "src/Components/modals/RentModal";
import SearchModal from "src/Components/modals/SearchModal";
import SideBar from "src/Components/siderbar/SideBar";
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
