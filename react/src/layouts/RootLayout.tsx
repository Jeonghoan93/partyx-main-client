import { Outlet } from "react-router-dom";
import Footer from "src/components/footer";

export default function RootLayout() {
  return (
    <>
      <div className="pb-20 pt-28">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
