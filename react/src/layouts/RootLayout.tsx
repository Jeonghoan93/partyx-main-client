import { Outlet } from "react-router-dom";
import Footer from "src/components/footer";
import Navbar from "src/components/navbar/Navbar";

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <div className="pb-20 pt-28">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
