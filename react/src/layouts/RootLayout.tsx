import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <div className="pb-20 pt-28">
        <Outlet />
      </div>
    </>
  );
}
