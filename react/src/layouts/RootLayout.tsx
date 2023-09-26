import { Outlet } from "react-router-dom";
import FullPageModal from "src/components/FullPageModal";
import Footer from "src/components/footer";
import Navbar from "src/components/navbar/Navbar";
import ToasterProvider from "src/providers/ToasterProvider";

export default function RootLayout() {
  return (
    <>
      <FullPageModal />
      <ToasterProvider />

      <Navbar />

      <div className="pb-20 pt-28">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
