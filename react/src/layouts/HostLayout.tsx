import { Outlet } from "react-router-dom";
import FullPageModal from "src/components/FullPageModal";
import SideBar from "src/components/siderbar/SideBar";
import ToasterProvider from "src/providers/ToasterProvider";

export default function HostLayout() {
  return (
    <>
      <FullPageModal />
      <ToasterProvider />

      <SideBar />

      <div>
        <Outlet />
      </div>
    </>
  );
}
