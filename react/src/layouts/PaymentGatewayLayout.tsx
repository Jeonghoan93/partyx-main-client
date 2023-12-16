import { Outlet } from "react-router-dom";
import MobileFooter from "src/components/Footers/MobileFooter";
import CreateProfileModal from "src/components/modals/CreateProfileModal";
import FinishRegister from "src/components/modals/FinishRegisterModal";
import LoginModal from "src/components/modals/LoginModal";
import RegisterModal from "src/components/modals/RegisterModal";
import RentModal from "src/components/modals/RentModal";
import SearchModal from "src/components/modals/SearchModal";
import { useWindowWidth } from "src/hooks/useWindowWidth";
import NavbarPaymentGateway from "src/pages/PaymentProcess/PaymentGateway/Components/NavbarPaymentGateway";
import ToasterProvider from "src/providers/ToasterProvider";

export default function PaymentGatewayLayout() {
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth < 768;

  return (
    <>
      <ToasterProvider />
      <LoginModal />
      <RegisterModal />
      <FinishRegister />
      <CreateProfileModal />

      <SearchModal />
      <RentModal />

      <NavbarPaymentGateway />

      <div className={"py-5 sm:py-10"}>
        <Outlet />
      </div>

      {isMobile ? <MobileFooter /> : ""}
    </>
  );
}
